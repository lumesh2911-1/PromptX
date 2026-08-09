# 🤖 PromptX - AI Chat Assistant

A modern full-stack AI chat assistant built with **Next.js**, **React**, **TypeScript**, and the **Vercel AI SDK** — streaming chat powered by OpenAI with auth, persistent history, and a responsive shadcn/ui UI.

## ✨ Features

- 💬 Real-time streaming chat (OpenAI `gpt-4o-mini`)
- 🧵 Conversation history with pin, archive & delete
- ✏️ Auto-naming chat titles
- 🔒 Clerk authentication
- 💾 PostgreSQL persistence via Prisma
- 🌙 Light / dark / system themes

## 🚀 Getting Started

Prerequisites: Node.js 18.18+, bun/npm, OpenAI API key, Clerk keys, PostgreSQL DB.

```bash
git clone https://github.com/lumesh2911-1/PromptX.git
cd PromptX
bun install        # or npm install
```

Create a `.env` file with:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DBNAME?sslmode=require"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
OPENAI_API_KEY=sk-xxx
```

> ⚠️ Never commit real keys. `.env` is git-ignored.



### Database

```bash
bunx prisma generate
bunx prisma migrate dev
```



### Run

```bash
bun run dev     # then open http://localhost:3000
```



## 🔄 App Flow

Sign in via Clerk → onboarded → chat shell opens → new chat → type & stream a response → auto-named → pin/archive/delete → persisted to Postgres.

## 🛠️ Tech Stack

Next.js 16 · React 19 · TypeScript · Vercel AI SDK · OpenAI · Clerk · Prisma · PostgreSQL (Neon) · Tailwind CSS · shadcn/ui · TanStack Query

## 👨‍💻 Author

**Lumesh Kumar Sahu** — Software Engineer | React Native Developer

- GitHub: [https://github.com/lumesh2911-1](https://github.com/lumesh2911-1)
- LinkedIn: [https://www.linkedin.com/in/lumesh2911/](https://www.linkedin.com/in/lumesh2911/)
- Portfolio: [https://lumesh.vercel.app/](https://lumesh.vercel.app/)



## 📄 License

Open-source for learning, personal use, and portfolio projects.