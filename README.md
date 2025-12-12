# Next.js E-Commerce Platform 👟

A modern, full-stack e-commerce platform built with Next.js 16, focusing on footwear and shoe products. Features a sleek UI, secure authentication, and robust database integration for a seamless online shopping experience.

![Next.js](https://img.shields.io/badge/Next.js-16.0.6-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)
![Better Auth](https://img.shields.io/badge/Better_Auth-1.4.5-green)

## ✨ Features

- **🛍️ Product Catalog**: Browse a curated collection of shoes with images, pricing, and color options
- **🔐 Authentication System**: Secure user authentication with email/password using Better Auth
- **👤 User Management**: Sign up, sign in, and session management with 7-day cookie persistence
- **🛒 Shopping Cart**: State management with Zustand for cart functionality
- **📱 Responsive Design**: Modern, mobile-first UI built with TailwindCSS 4
- **💾 Database Integration**: PostgreSQL database via Neon with Drizzle ORM
- **🎨 Modern UI**: Clean, intuitive interface with product cards, badges, and dynamic layouts
- **🔒 Guest Sessions**: Support for guest browsing before authentication
- **⚡ Server Actions**: Fast, optimized data fetching with Next.js Server Components

## 🛠️ Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19.2](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[TailwindCSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library

### Backend & Database
- **[Better Auth](https://www.better-auth.com/)** - Authentication solution with Drizzle adapter
- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript ORM for PostgreSQL
- **[Neon Database](https://neon.tech/)** - Serverless PostgreSQL
- **[Zod](https://zod.dev/)** - Runtime type validation

### State Management
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management

## 📁 Project Structure

```
nextjs-ecommerce/
├── app/
│   ├── (auth)/          # Authentication routes (sign-in, sign-up)
│   ├── (root)/          # Main app routes (home, checkout)
│   ├── globals.css      # Global styles
│   └── layout.tsx       # Root layout
├── components/
│   ├── AuthForm.tsx     # Authentication form component
│   ├── Card.tsx         # Product card component
│   ├── Footer.tsx       # Footer component
│   ├── Navbar.tsx       # Navigation bar
│   └── ...
├── lib/
│   ├── auth/            # Authentication logic and actions
│   └── db/              # Database configuration and schemas
├── store/
│   └── useStore.ts      # Zustand store configuration
├── public/
│   └── shoes/           # Product images
└── drizzle/             # Database migrations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ and npm/pnpm/yarn/bun
- PostgreSQL database (Neon recommended)
- Environment variables configured

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL=your_neon_database_url
   
   # Better Auth
   BETTER_AUTH_SECRET=your_secret_key
   BETTER_AUTH_URL=http://localhost:3000
   ```

4. **Set up the database**
   ```bash
   # Generate migrations
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # (Optional) Open Drizzle Studio to view your database
   npm run db:studio
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:generate` | Generate Drizzle migrations |
| `npm run db:push` | Push schema changes to database |
| `npm run db:migrate` | Run database migrations |
| `npm run db:studio` | Open Drizzle Studio (database GUI) |

## 🗄️ Database Schema

The application uses the following main tables:

- **users** - User accounts and profiles
- **sessions** - Active user sessions
- **accounts** - Linked authentication accounts
- **verifications** - Email verification tokens
- **guests** - Guest session management

Database schema defined using Drizzle ORM in `lib/db/schema/`

## 🔐 Authentication

Authentication is powered by **Better Auth** with the following features:

- ✅ Email and password authentication
- ✅ Secure session management (7-day duration)
- ✅ HTTP-only cookies for security
- ✅ UUID-based user IDs
- ✅ Guest session support
- ⚙️ Social providers ready (currently disabled)

## 🎨 UI Components

Key components include:

- **Card** - Product display cards with badges, pricing, and images
- **Navbar** - Responsive navigation with user authentication status
- **Footer** - Site-wide footer with branding
- **AuthForm** - Unified sign-in/sign-up form with validation

## 🌐 Deployment

### Deploy on Vercel

The easiest deployment option:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nextjs-ecommerce)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Environment Variables for Production

Ensure you set these in your hosting platform:

- `DATABASE_URL` - Your PostgreSQL connection string
- `BETTER_AUTH_SECRET` - Random secret for auth encryption
- `BETTER_AUTH_URL` - Your production URL

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal project. Feel free to fork and modify for your own use.

## 📧 Contact

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ using Next.js and modern web technologies.
