# Single stage: PHP + Node so Vite/wayfinder can see Laravel routes at build time
FROM php:8.2-cli-alpine

# System deps + Node 22
RUN apk add --no-cache \
    git \
    unzip \
    libzip-dev \
    libpng-dev \
    libpq-dev \
    icu-dev \
    oniguruma-dev \
    nodejs \
    npm \
    && docker-php-ext-configure pdo_pgsql \
    && docker-php-ext-install -j$(nproc) \
        pdo \
        pdo_pgsql \
        mbstring \
        zip \
        exif \
        pcntl \
        bcmath \
        opcache \
        intl

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1

WORKDIR /var/www/html

# Composer deps
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --prefer-dist

# App code (needed for Vite/wayfinder and final runtime)
COPY . .

# Skip wayfinder PHP command in Vite (vite.config.ts uses command: 'true' when RENDER=true).
# Route types are generated at dev time or can be committed; build proceeds without Laravel bootstrap.
ENV RENDER=true

# Frontend build
RUN npm ci && npm run build

RUN composer dump-autoload --optimize --no-dev

RUN chmod -R 775 storage bootstrap/cache 2>/dev/null || true

EXPOSE 8080
ENV PORT=8080
# Run migrations on startup (no Render Shell needed); then start the web server.
CMD sh -c "php artisan migrate --force && exec php artisan serve --host=0.0.0.0 --port=${PORT}"
