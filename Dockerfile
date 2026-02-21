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

# Wayfinder runs "php artisan wayfinder:generate" during Vite build; Laravel requires APP_KEY.
# Placeholder only for build. Runtime uses the real APP_KEY from Render env.
ENV APP_KEY=base64:2fl+K8y4bFb3xL1zC5vY6Q==
ENV APP_ENV=production

# Frontend build (wayfinder generates route types; needs PHP + APP_KEY above)
RUN npm ci && npm run build

RUN composer dump-autoload --optimize --no-dev

RUN chmod -R 775 storage bootstrap/cache 2>/dev/null || true

EXPOSE 8080
ENV PORT=8080
CMD php artisan serve --host=0.0.0.0 --port=${PORT}
