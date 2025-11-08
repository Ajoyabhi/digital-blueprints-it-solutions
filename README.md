# PayzuTech - IT Services Platform

A modern, full-stack web application for an IT services company that provides comprehensive cloud solutions, cybersecurity services, AI/ML implementation, software development, and IT infrastructure management. The platform showcases services, case studies, and client testimonials while providing consultation booking capabilities.

## 🚀 Live Demo

Visit the live application at: [Your Deployment URL]

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling with custom design system
- **Radix UI** primitives with shadcn/ui component library
- **wouter** for client-side routing
- **React Query** (@tanstack/react-query) for server state management
- **React Hook Form** with Zod validation

### Backend
- **Node.js** with Express.js server
- **TypeScript** with ES modules
- **PostgreSQL** with Drizzle ORM
- **Neon Database** (serverless PostgreSQL)
- **Session Management** with PostgreSQL-based sessions

### Development Tools
- **ESBuild** for fast bundling
- **Drizzle Kit** for database schema management
- **Replit** integration for seamless development

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **PostgreSQL** database (or use Neon Database)
- **Git** for version control

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/payzutech.git
cd payzutech
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/payzutech_db"

# Session Configuration
SESSION_SECRET="your-super-secret-session-key-here"

# Environment
NODE_ENV="development"
```

### 4. Database Setup

#### Option A: Using Neon Database (Recommended)
1. Sign up for a free account at [Neon](https://neon.tech)
2. Create a new database
3. Copy the connection string to your `.env` file as `DATABASE_URL`

#### Option B: Local PostgreSQL
1. Install PostgreSQL on your system
2. Create a new database:
   ```sql
   CREATE DATABASE payzutech_db;
   ```
3. Update the `DATABASE_URL` in your `.env` file with your local credentials

### 5. Run Database Migrations

```bash
# Generate and push database schema
npm run db:push

# Optional: Generate migrations
npm run db:generate
```

### 6. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
payzutech/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # shadcn/ui components
│   │   │   ├── sections/  # Page sections
│   │   │   ├── forms/     # Form components
│   │   │   └── dialogs/   # Modal components
│   │   ├── pages/         # Route components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and configurations
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Database abstraction
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema
├── migrations/           # Database migrations
├── package.json
└── README.md
```

## 🎯 Key Features

### Services Offered
- **Cloud Solutions** - AWS, Azure, Google Cloud migration and management
- **Cybersecurity** - Threat detection, security audits, compliance
- **AI/ML Services** - Machine learning, automation, predictive analytics
- **Software Development** - Custom applications, API development
- **IT Infrastructure** - 24/7 monitoring, network management
- **Data Analytics** - Business intelligence, data visualization

### Fintech Solutions
- Payment & Payout Gateways
- Domestic Money Transfer (DMT)
- Utility Payment Collection
- BBPS API Integration
- Mobile & DTH Recharge
- AEPS Integration
- White-label B2B Software

### Platform Features
- Responsive design with mobile-first approach
- Interactive consultation booking system
- Comprehensive case studies showcase
- Dynamic navigation with hover dropdowns
- Real-time chatbot interface
- SEO-optimized pages
- Performance-optimized builds

## 🚀 Available Scripts

```bash
# Development
npm run dev              # Start development server

# Building
npm run build           # Build for production
npm run start           # Start production server

# Database
npm run db:push         # Push schema to database
npm run db:generate     # Generate migration files
npm run db:migrate      # Run migrations
npm run db:studio       # Open Drizzle Studio

# Code Quality
npm run lint            # Run ESLint
npm run type-check      # Run TypeScript checks
```

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `SESSION_SECRET` | Secret key for session encryption | Yes |
| `NODE_ENV` | Environment (development/production) | Yes |
| `PORT` | Server port (default: 5000) | No |

## 🛡️ Security Features

- Input validation with Zod schemas
- SQL injection protection via Drizzle ORM
- Session-based authentication
- CSRF protection
- Environment variable protection
- Secure HTTP headers

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1024px and above)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🔄 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Consultation
- `POST /api/consultation` - Book consultation
- `GET /api/consultation/:id` - Get consultation details

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📊 Performance Optimization

- **Code Splitting** - Dynamic imports for route-based splitting
- **Image Optimization** - Responsive images with lazy loading
- **Caching** - Browser and server-side caching strategies
- **Bundle Analysis** - Webpack bundle analyzer integration
- **Lighthouse Scores** - 90+ performance scores

## 🚢 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Replit Deployment

This project is optimized for Replit deployment:

1. Fork the repository on Replit
2. Set up environment variables in Replit secrets
3. Run the project using the configured workflow
4. Your app will be available at `https://your-repl-name.replit.app`

### Traditional Hosting

For deployment on services like Heroku, Vercel, or DigitalOcean:

1. Set up environment variables on your platform
2. Configure your database connection
3. Deploy using your platform's deployment process

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- **Email**: support@payzutech.com
- **Documentation**: [Project Wiki](https://github.com/yourusername/payzutech/wiki)
- **Issues**: [GitHub Issues](https://github.com/yourusername/payzutech/issues)

## 🎉 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for lightning-fast development
- [Drizzle ORM](https://orm.drizzle.team/) for type-safe database operations
- [Neon Database](https://neon.tech/) for serverless PostgreSQL

---

Built with ❤️ by the PayzuTech Team