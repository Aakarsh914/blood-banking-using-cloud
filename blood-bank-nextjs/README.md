# Blood Bank Cloud (Next.js)

Full-stack Blood Bank app for **Vercel + Supabase + Gmail (free)**. Same features as the original React + Express app, without Render.

The legacy stack (`frontend/`, `UPLOAD_READY/`, Render) is **not modified** by this project.

## Quick start

See **[DEPLOY.md](./DEPLOY.md)** for step-by-step Vercel deployment.

```bash
npm install
cp .env.example .env
npx prisma generate
npm run dev
```

## Stack

- **Next.js 16** — UI + API routes (`/api/*`)
- **Prisma** — Supabase PostgreSQL
- **Gmail App Password** — registration OTP emails (free)
- **Supabase Realtime** — optional SOS notifications
