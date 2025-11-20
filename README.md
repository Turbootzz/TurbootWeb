# Turboot Website

Professional website for Turboot - Web Development, Software Development & PC Builds

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** PostgreSQL with Prisma ORM
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

4. Set up the database:

```bash
# Push the schema to your database
npm run db:push

# Run migrations (for production)
npm run db:migrate

# Seed the database with example data
npm run db:seed
```

5. Run the development server:

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
- `npm run db:migrate` - Run database migrations
- `npm run db:push` - Push schema to database (development)
- `npm run db:seed` - Seed database with example data
- `npm run db:studio` - Open Prisma Studio (database GUI)

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
├── prisma/              # Database schema and migrations
├── public/              # Static assets
└── Documentation/       # Additional documentation
```

## Database Setup

### Using PostgreSQL locally:

1. Install PostgreSQL
2. Create a database: `createdb turboot_db`
3. Update `.env.local` with your connection string

### Using cloud PostgreSQL:

Options include:

- Vercel Postgres
- Supabase
- Neon
- Railway

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Features

- ✅ Responsive design
- ✅ Dark mode toggle (Light/Dark/System)
- ✅ Modern UI with Tailwind CSS v4
- ✅ Contact form with validation
- ✅ Portfolio showcase
- ✅ Service pages
- ✅ SEO optimized
- ✅ TypeScript for type safety
- ✅ Database ready with Prisma
- ✅ Code formatting with Prettier
- ✅ Auto-format on commit (Husky + lint-staged)
- ✅ CI/CD pipeline with GitHub Actions

## Future Enhancements

- [ ] Blog/News section
- [ ] Homelab services dashboard
- [ ] Admin panel for content management
- [ ] Multi-language support (EN/NL)
- [ ] Client testimonials
- [ ] Email integration for contact form
- [ ] Analytics integration
- [ ] Unit and integration tests

## License

© 2025 Turboot. All rights reserved.

## Contact

For questions or support, contact: [thijs@turboot.com](mailto:thijs@turboot.com)
