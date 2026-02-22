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

- In Render **Environment**, set **APP_URL** to your service URL (e.g. `https://myportfolio-wbod.onrender.com`). This avoids "Invalid URI: Host is malformed" when the app builds URLs behind Render’s proxy.
- Run migrations once (e.g. via Render **Shell**):  
  `php artisan migrate --force`
- Open your app URL and test the portfolio and login (`/login-0416`).

---

## 500 Server Error

If you see **500 | SERVER ERROR** when opening the site:

1. **Check runtime logs**  
   Render Dashboard → your service → **Logs**. Reproduce the error (refresh the page), then look for the PHP exception and stack trace. That will show the real cause (e.g. missing env, DB, or code error).

2. **Required environment variables** (Render → Environment):
   - **APP_KEY** – Run `php artisan key:generate --show` locally and set that value, or use a 32-char base64 key.
   - **APP_URL** – Your service URL, e.g. `https://myportfolio-wbod.onrender.com`.
   - **Database** – See **PostgreSQL via Environment variables** below.

3. **Temporarily show errors in the browser**  
   Set **APP_DEBUG** = `true`, redeploy, reload the page to see the error message, then set **APP_DEBUG** back to `false` and redeploy.

4. **Storage permissions**  
   The Dockerfile runs `chmod -R 775 storage bootstrap/cache`. If you still see permission errors in the logs, the app may need different ownership; the logs will say.

---

## PostgreSQL via Environment variables

To use PostgreSQL by setting individual env vars (no `DATABASE_URL`), add these in Render → your service → **Environment**:

| Key              | Example value        | Required |
|------------------|----------------------|----------|
| **DB_CONNECTION**| `pgsql`              | Yes      |
| **DB_HOST**      | Your Postgres host   | Yes      |
| **DB_PORT**      | `5432`               | Only if not 5432 |
| **DB_DATABASE**  | Your database name   | Yes      |
| **DB_USERNAME**  | Your DB user         | Yes      |
| **DB_PASSWORD**  | Your DB password     | Yes      |

Use the real host, database name, username, and password from your Postgres provider (e.g. Render Postgres “Internal Database URL” or your own server). Copy **DB_HOST** exactly from Render Postgres → Connections (one wrong character causes 500). After saving, redeploy so the app uses PostgreSQL.
