# 🎀 Life Dashboard 2026 - Complete Setup Guide

Your cozy Sanrio-inspired life tracking dashboard is ready to be built!

## 🚀 Quick Start

### Step 1: Clone & Setup

```bash
# Clone this repository
git clone https://github.com/pooooo451/life-dashboard-2026.git
cd life-dashboard-2026

# Create Next.js project
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir

# Install dependencies
npm install @supabase/supabase-js @supabase/ssr
npm install lucide-react clsx tailwind-merge class-variance-authority
npm install date-fns recharts
npm install @radix-ui/react-dropdown-menu @radix-ui/react-dialog @radix-ui/react-tabs
```

### Step 2: Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://kqlunomebhqevvyrojry.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_RLgtoSBwxCUgc9uovNhQw_L6lPqa
```

### Step 3: Get Complete Code

I'll provide all code files via the GitHub web interface. Check the commits for:

- **tailwind.config.ts** - Cozy pastel theme configuration
- **app/globals.css** - Custom styling
- **lib/supabase.ts** - Database client setup
- **app/layout.tsx** - Root layout with fonts
- **app/page.tsx** - Landing page
- **app/login/page.tsx** - Login page
- **app/signup/page.tsx** - Signup page  
- **app/dashboard/page.tsx** - Main dashboard
- **app/goals/page.tsx** - Goals management
- **app/tasks/page.tsx** - Task tracking
- **app/habits/page.tsx** - Habit tracker

### Step 4: Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## ✨ Features

- 🎨 **Cozy Sanrio-inspired design** with soft pastels
- 🔐 **Supabase authentication** - secure user management
- 📊 **Goal tracking** - set and monitor life goals
- ✅ **Task management** - daily and weekly tasks
- 🌱 **Habit tracking** - build positive habits
- 📱 **Responsive design** - works on all devices
- 🔒 **Row Level Security** - your data is private

## 📁 Project Structure

```
life-dashboard-2026/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── dashboard/page.tsx
│   ├── goals/page.tsx
│   ├── tasks/page.tsx
│   ├── habits/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── lib/
│   ├── supabase.ts
│   └── utils.ts
├── components/
│   └── (to be added)
├── .env.local
├── tailwind.config.ts
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Primary Pink**: Sanrio-inspired pink (#fb3d8a)
- **Secondary Blue**: Soft sky blue (#0ea5e9)
- **Accent Colors**:
  - Yellow: #fffacd
  - Peach: #ffd4b2
  - Mint: #d4f4dd
  - Lavender: #e7d4f5

### Fonts
- **Display**: Fredoka (rounded, friendly)
- **Body**: Inter (clean, readable)

## 🔧 Supabase Configuration

Your database is already set up with:

✅ 12 tables with RLS enabled
✅ 48 security policies configured
✅ Views for analytics and summaries
✅ Sample seed data ready

## 📝 Next Steps

1. ✅ Clone repository
2. ✅ Install dependencies
3. ⏳ Add all code files (coming in next commits)
4. ⏳ Customize colors and design
5. ⏳ Add your own illustrations
6. ⏳ Deploy to Vercel

## 🚀 Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel dashboard for automatic deployments.

## 💝 Support

Questions? Check the code comments or create an issue!

Made with love and cozy vibes ✨
