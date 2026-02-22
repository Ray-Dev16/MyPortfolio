# Deploying to Render

## Fix: "php: not found" during build

The Vite build runs `php artisan wayfinder:generate` (via the wayfinder plugin). That **requires PHP**. Render was using a **Node-only** environment, so the build failed.

You can fix it in one of two ways:

---

## Option A: Use Docker (recommended)

1. In the Render dashboard, open your **MyPortfolio** web service.
2. Go to **Settings** (or the service configuration).
3. Set **Runtime** (or **Environment**) to **Docker** (not Node).
4. Set **Dockerfile Path** to `./Dockerfile` (or leave default).
5. **Clear** the **Build Command** and set **Start Command** to:
   ```bash
   php artisan serve --host=0.0.0.0 --port=$PORT
   ```
   (If Render hides Build/Start when using Docker, leave them empty.)
6. Save and **Deploy** again.

The build will run inside the Docker image, which has both PHP and Node, so `wayfinder:generate` and the rest of the build will succeed.

---

## Option B: Keep Node runtime and commit generated routes

If you prefer to keep the service as a **Node** (non-Docker) app:

1. **Locally** (with PHP installed), run:
   ```bash
   php artisan wayfinder:generate --with-form
   ```
2. **Commit** the generated files (they are now allowed by `.gitignore`):
   - `resources/js/routes/`
   - `resources/js/wayfinder/` (if present)
3. **Push** to your repo and trigger a new deploy on Render.

On Render, the Vite build will skip running the PHP command (because `RENDER=true`) and will use the committed route files instead.

---

## After a successful deploy

- In Render **Environment**, set **APP_URL** to your service URL (e.g. `https://your-service-name.onrender.com`). This avoids "Invalid URI: Host is malformed" when the app builds URLs behind Render’s proxy.
- Run migrations once (e.g. via Render **Shell**):  
  `php artisan migrate --force`
- Open your app URL and test the portfolio and login (`/login-0416`).
