# Build My Agent

An AI agent builder platform built with Next.js 16, React 19, and Supabase.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5 (strict mode)
- **UI:** React 19, Tailwind CSS v4
- **State:** Zustand v5
- **Backend:** Supabase (Auth, Database, Storage)
- **Icons:** lucide-react

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Add your Supabase credentials to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server (http://localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npx tsc --noEmit` | Type-check without emitting files |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (landingPage)/      # Landing page route group
│   ├── auth/               # Auth pages (login, signup)
│   ├── dashboard/          # Dashboard routes
│   │   └── create-agent/   # Create agent flow
│   ├── globals.css         # Tailwind CSS imports
│   └── layout.tsx          # Root layout with auth sync
├── components/             # Shared UI components
│   ├── AuthState_Sync.tsx
│   ├── Navbar_LandingPage.tsx
│   └── Navbar_Dashboard.tsx
├── libs/                   # Utility modules
│   └── supabase/
│       └── server.ts       # Server-side Supabase client
├── serverActions/          # Next.js Server Actions
│   ├── loginAction.ts
│   └── signupAction.ts
└── stores/                 # Zustand stores
    └── useAuthStore.ts
```

## Features

- **Authentication:** Email/password login and signup powered by Supabase Auth
- **Dashboard:** Protected dashboard area for authenticated users
- **Create Agent:** Multi-step agent creation flow
- **State Management:** Global auth state synced between server and client
- **Type Safety:** Full TypeScript support with strict mode enabled

## Development Guidelines

- Run `npx tsc --noEmit` before committing to catch type errors
- Use `@/` path alias for imports within `src/`
- Prefer Server Components; use `"use client"` only when necessary
- Keep files under ~200 lines; split large components into smaller pieces
- Follow the naming conventions documented in `AGENTS.md`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Your Supabase publishable key |

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zustand Documentation](https://docs.pmnd.rs/zustand)

## License

MIT
