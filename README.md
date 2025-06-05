# Tixae Template

A modern Next.js template inspired by the PastPal layout structure. This template provides a beautiful two-panel interface with responsive design, perfect for applications that need a main content area and an interactive sidebar.

## Features

- **Modern Next.js 14** with TypeScript
- **Responsive Layout** - Adaptive design that works on all devices
- **Two-Panel Interface** - Main content area + interactive sidebar
- **Beautiful UI Components** with HeroUI
- **Dark/Light Theme** support
- **Framer Motion** animations
- **Tailwind CSS** for styling
- **Mobile-First** responsive design

## Layout Structure

The template replicates the successful layout pattern from PastPal:

- **Header Navigation** - Fixed top navigation with logo, menu items, and user controls
- **Main Content Area** - Left panel for primary content (welcome screen, documentation, etc.)
- **Interactive Sidebar** - Right panel for chat, forms, or other interactive elements
- **Empty State** - Beautiful onboarding screen for new users
- **Mobile Menu** - Collapsible navigation for mobile devices

## Quick Start

1. **Clone or download** this template
2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── common/          # Shared components
│   │   ├── interface/       # Main interface components
│   │   ├── layout/          # Navigation and layout components
│   │   └── states/          # Different app states (empty, loading, etc.)
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── providers.tsx        # App providers
│   └── globals.css          # Global styles
└── components/              # Additional components (if needed)
```

## Key Components

### Layout Components

- **Navbar** - Main navigation header
- **NavLink** - Individual navigation links
- **MobileMenu** - Mobile navigation drawer
- **UserMenu** - User account dropdown

### Interface Components

- **MainInterface** - Two-panel layout container
- **WelcomePanel** - Left content panel with instructions
- **ChatPanel** - Right interactive panel with chat interface

### State Components

- **EmptyState** - Beautiful onboarding screen for new users

## Customization

### 1. Branding

Update the logo and branding in:

- `src/app/components/layout/Navbar.tsx` - Logo and brand name
- `src/app/layout.tsx` - Page title and meta description

### 2. Navigation

Modify navigation links in:

- `src/app/components/layout/Navbar.tsx` - Update the `navigationLinks` array

### 3. Content

Replace placeholder content in:

- `src/app/components/interface/WelcomePanel.tsx` - Main content area
- `src/app/components/states/EmptyState.tsx` - Welcome screen

### 4. Styling

Customize the design system:

- `tailwind.config.ts` - Tailwind configuration
- `src/app/globals.css` - CSS variables and custom styles

### 5. Functionality

Add your application logic:

- Replace the mock chat in `ChatPanel.tsx` with real functionality
- Add routing for different pages
- Integrate with your backend APIs

## Theme Configuration

The template uses CSS variables for theming. Customize colors in `globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Primary brand color */
  --background: 0 0% 100%; /* Background color */
  --foreground: 222.2 84% 4.9%; /* Text color */
  /* ... more variables */
}
```

## Responsive Design

The template is built mobile-first with these breakpoints:

- Mobile: Default (< 1024px)
- Desktop: `lg:` prefix (≥ 1024px)

Key responsive features:

- Collapsible navigation on mobile
- Stacked layout on mobile, side-by-side on desktop
- Adaptive heights using viewport calculations

## Integration Examples

This template is perfect for:

- **AI Chat Applications** - Replace ChatPanel with your AI interface
- **Documentation Sites** - Use WelcomePanel for docs, ChatPanel for search
- **SaaS Dashboards** - Main content + interactive sidebar
- **Learning Platforms** - Content + practice exercises
- **Creative Tools** - Canvas + tools panel

## Dependencies

Core dependencies included:

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **HeroUI** - Beautiful React components
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library
- **next-intl** - Internationalization
- **Sonner** - Toast notifications

## Performance

The template is optimized for performance:

- Server-side rendering (SSR)
- Automatic code splitting
- Optimized fonts with `next/font`
- Efficient CSS with Tailwind
- Minimal JavaScript bundle

## Deployment

Deploy anywhere that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **Docker** (Dockerfile included)

## License

This template is provided as-is for any use case. Feel free to modify and adapt it for your projects.

## Support

This template is based on the successful layout patterns from PastPal. Use it as a starting point for your own applications and customize it to fit your specific needs.
