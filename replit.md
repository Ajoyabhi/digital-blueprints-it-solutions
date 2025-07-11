# TechFlow Solutions - IT Services Platform

## Overview

TechFlow Solutions is a modern, full-stack web application for an IT services company that provides cloud solutions, cybersecurity, AI/ML services, software development, and IT infrastructure management. The platform showcases services, case studies, and client testimonials while providing consultation booking capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: React Router for client-side navigation
- **State Management**: React Query (@tanstack/react-query) for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **API Pattern**: RESTful API with /api prefix

### Development Setup
- **Monorepo Structure**: Shared code between client and server
- **Hot Reload**: Vite middleware integration in development
- **Type Safety**: Shared TypeScript types across frontend and backend
- **Path Aliases**: Configured for clean imports (@, @shared, @assets)

## Key Components

### Frontend Structure
```
client/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── sections/        # Page sections (Hero, Services, etc.)
│   │   ├── forms/           # Form components
│   │   └── dialogs/         # Modal components
│   ├── pages/               # Route components
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utilities and configurations
```

### Backend Structure
```
server/
├── index.ts                 # Express server setup
├── routes.ts                # API route definitions
├── storage.ts               # Database abstraction layer
└── vite.ts                  # Vite integration for development
```

### Shared Components
```
shared/
└── schema.ts                # Database schema and types
```

## Data Flow

1. **Database Layer**: Drizzle ORM with PostgreSQL for data persistence
2. **Storage Interface**: Abstraction layer (IStorage) with in-memory fallback
3. **API Layer**: Express.js REST endpoints with /api prefix
4. **Frontend State**: React Query for server state management
5. **UI Components**: Radix UI + shadcn/ui for consistent design

## External Dependencies

### Core Dependencies
- **UI Framework**: React 18 with TypeScript
- **Database**: Drizzle ORM with Neon Database
- **Styling**: Tailwind CSS with Radix UI components
- **Forms**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for runtime type validation
- **State Management**: TanStack React Query

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Configured for strict type checking
- **Replit Integration**: Cartographer plugin and runtime error overlay
- **Database Migrations**: Drizzle Kit for schema management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds client to `dist/public`
2. **Backend Build**: ESBuild bundles server to `dist/index.js`
3. **Production**: Serves static files and API from single Express server

### Environment Configuration
- **Development**: `npm run dev` with hot reload
- **Production**: `npm run build && npm start`
- **Database**: Managed through DATABASE_URL environment variable

### Database Management
- **Schema**: Defined in `shared/schema.ts`
- **Migrations**: Generated in `migrations/` directory
- **Push**: `npm run db:push` for schema updates

## Development Notes

The application uses a sophisticated development setup with:
- Vite middleware integration for seamless full-stack development
- Shared TypeScript types between client and server
- Memory-based storage fallback for development
- Page loading animations and smooth transitions
- Consultation dialog system for lead generation
- Responsive design with mobile-first approach

The database schema currently includes a users table with username/password authentication structure, suggesting future authentication features may be planned.