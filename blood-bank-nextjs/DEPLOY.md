# Deploy Blood Bank Cloud (Next.js + Vercel + Supabase + Gmail)

No Render. No paid email service.

| Service | Role |
|---------|------|
| **Vercel** | Website + API (`/api/*`) |
| **Supabase** | PostgreSQL database |
| **Gmail App Password** | Free OTP & notification emails |

---

## Step 1 — Gmail App Password (free email)

1. Use a **Google account** (e.g. `sahniaakarsh6@gmail.com`).
2. Turn on **2-Step Verification**:  
   [myaccount.google.com/security](https://myaccount.google.com/security)
3. Create an **App Password**:  
   Google Account → Security → 2-Step Verification → **App passwords**
   - App: **Mail**
   - Device: **Other** → name it `Blood Bank Cloud`
4. Google shows a **16-character password** (like `abcd efgh ijkl mnop`).
   - Copy it **without spaces** → that is `SMTP_PASS`
5. Set:
   - `SMTP_USER` = your full Gmail address  
   - `SMTP_PASS` = the 16-character app password (no spaces)

**Do not** use your normal Gmail login password in `SMTP_PASS`.

---

## Step 2 — Supabase

1. Open your Supabase project.
2. **Settings → Database** → copy the **Transaction pooler** URI (port **6543**).
3. Paste it as `DATABASE_URL` in Vercel (and local `.env`).

If tables are missing, run `../backend/sql/schema.sql` in Supabase **SQL Editor**.

Optional: enable **Realtime** on `blood_requests` for live SOS alerts.

---

## Step 3 — Deploy on Vercel

1. Push the repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo.
3. Set **Root Directory** to `blood-bank-nextjs`.
4. Add these **Environment Variables**:

| Variable | Example / notes |
|----------|-----------------|
| `DATABASE_URL` | Supabase pooler URI |
| `JWT_SECRET` | Any long random string |
| `SMTP_USER` | `you@gmail.com` |
| `SMTP_PASS` | 16-char app password |
| `NEXT_PUBLIC_APP_URL` | `https://your-app.vercel.app` (set after first deploy) |
| `NEXT_PUBLIC_SUPABASE_URL` | Optional |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Optional |

5. Click **Deploy**.

---

## Step 4 — Test registration

1. Open your Vercel URL → **Register**.
2. Enter email → **Continue (Send OTP)**.
3. Check inbox and **Spam** for “Your Registration OTP”.
4. Enter OTP → complete registration.

If OTP fails:

- Vercel → Project → **Logs** → look for `OTP email failed` or `EAUTH`
- Recreate App Password and update `SMTP_PASS` on Vercel → **Redeploy**

---

## Local development

```bash
cd blood-bank-nextjs
cp .env.example .env
# Fill DATABASE_URL, JWT_SECRET, SMTP_USER, SMTP_PASS
npm install
npx prisma generate
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Stack summary

- **Vercel** — hosts everything (no Render)
- **Supabase** — data only
- **Gmail SMTP** — free emails via Nodemailer

Your old `frontend/` + Render backend can stay in the repo; this app does not use them.
