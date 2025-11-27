# Turboot Website

Professional website for Turboot - Web Development, Software Development & PC Builds

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** PostgreSQL (Planned)
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **UI Components:** Custom components with Radix UI primitives

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or cloud)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd turboot-web
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your database credentials.

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check formatting without modifying files

## Project Structure

```
turboot-web/
├── src/
│   ├── app/              # Next.js pages and API routes
│   ├── components/       # React components
│   │   ├── ui/          # Base UI components
│   │   ├── layout/      # Layout components
│   │   └── sections/    # Page sections
│   ├── lib/             # Utilities and constants
│   └── types/           # TypeScript types

├── public/              # Static assets
└── Documentation/       # Additional documentation
```

## Features

- ✅ Responsive design
- ✅ Dark mode toggle (Light/Dark/System)
- ✅ Modern UI with Tailwind CSS v4
- ✅ Contact form with validation
- ✅ Portfolio showcase
- ✅ Service pages
- ✅ SEO optimized
- ✅ TypeScript for type safety
- ✅ Code formatting with Prettier
- ✅ Auto-format on commit (Husky + lint-staged)
- ✅ CI/CD pipeline with GitHub Actions
- ✅ Unit and integration tests
- ✅ Language switcher

## Future Enhancements

- [ ] Email integration for contact form
- [ ] Analytics integration

## License

© 2025 Turboot. All rights reserved.

## Contact

For questions or support, contact: [info@turboot.com](mailto:info@turboot.com)
