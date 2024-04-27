# NextJS-Ecomm
Learning Project by Youtube Next.js 14 tutorial implementing E-Commerce Web Application. The project uses sqlite as the database. If you want to use other databases, you need to change some configuration of the project as well.

## Getting Started
Setup .env file your own
```
DATABASE_URL=
ADMIN_USERNAME=
HASHED_ADMIN_PASSWORD=
STRIPE_SECERET_KEY=
STRIPE_WEBHOOK_SECRET=
RESEND_API_KEY=
SENDER_EMAIL=

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
NEXT_PUBLIC_SERVER_URL=
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
