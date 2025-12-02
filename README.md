# 🌿 Freelance Paramedic Website - Professional Wellness Practitioner Portfolio

A modern, SEO-optimized, and GDPR-compliant website for freelance wellness practitioners (kinesiologists, reflexologists, energy healers, etc.). Built with Next.js 15, React 18, Tailwind CSS, and following best practices for performance, security, and accessibility.

[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.2.7-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

## ✨ Features

### 🎨 Modern Design

- **Responsive Design** - Mobile-first approach with breakpoints for all devices (sm: 640px, md: 768px, lg: 1024px)
- **Smooth Animations** - Custom Tailwind animations (fade-in, slide-up, scale-in)
- **Glassmorphism Effects** - Modern UI with backdrop-blur and semi-transparent cards
- **Professional Color Palette** - Harmonized primary/secondary/accent colors
- **WebP Images** - Optimized image format with priority loading and quality settings
- **Unified Image Styling** - Consistent brightness (0.7) and saturation (1.1) across all pages

### 🔍 SEO Optimized

- **Comprehensive Meta Tags** - Title, description, keywords for every page
- **Open Graph Tags** - Perfect social media sharing
- **Twitter Cards** - Optimized Twitter previews
- **Structured Data** - JSON-LD schema for LocalBusiness, Person, and Services
- **Sitemap.xml** - Auto-generated sitemap for search engines
- **Robots.txt** - Proper search engine crawling directives
- **Canonical URLs** - Prevent duplicate content issues
- **Local SEO** - Geo-tags and location-specific optimization

### 🔒 Security & Privacy

- **Security Headers** - HSTS, X-Frame-Options, CSP with strict directives
- **GDPR Compliant** - Cookie consent with 12-month expiration
- **Form Security** - Input sanitization, rate limiting (30s), email/phone validation
- **Environment Variables** - All sensitive data in `.env.local` files
- **No Hardcoded Credentials** - Fully configurable via environment
- **XSS Protection** - Built-in security measures
- **0 Vulnerabilities** - All dependencies updated and audited

### ♿ Accessibility

- **WCAG 2.1 Compliant** - Accessible to all users
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Friendly** - Proper ARIA labels and semantic HTML
- **Zoom Support** - No viewport restrictions
- **High Contrast** - Readable text on all backgrounds

### 📊 Analytics

- **Google Analytics** - Privacy-respecting analytics with consent management
- **Route Tracking** - Automatic page view tracking
- **Consent-based** - Analytics only activate after user consent

### 📱 Core Pages

- **Home (Accueil)** - Welcome page with hero section and professional quotes
- **Kinésiologie** - 3-slide carousel explaining kinesiology, muscle testing, session details
- **Pourquoi** - Modern grid layout with 8 cards showing reasons to consult
- **Réflexologie Cranio-Sacrée** - Split layout with image and detailed explanation
- **Nettoyage Énergétique** - Centered card with semi-transparent background
- **À propos de moi** - Professional biography with optional photo
- **Contact et Tarifs** - Contact form, pricing, social icons, and footer

## 🚀 Quick Start

### Prerequisites

- Node.js 14.0 or higher
- npm package manager (yarn not supported - npm only)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/freelance-paramedic-website.git
   cd freelance-paramedic-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   **Note:** This project uses npm only. Do not use yarn.

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

4. **Configure your `.env.local` file**

   Open `.env.local` and fill in your actual values:

   ```env
   # API Keys
   NEXT_PUBLIC_API_KEY=your_web3forms_api_key_here
   NEXT_PUBLIC_GA_ID=your_google_analytics_id_here

   # Business Information
   NEXT_PUBLIC_BUSINESS_NAME=Your Business Name
   NEXT_PUBLIC_BUSINESS_ADDRESS=Your Professional Address
   NEXT_PUBLIC_CONTACT_EMAIL=contact@example.com
   NEXT_PUBLIC_PHONE_NUMBER=+33 X XX XX XX XX

   # Social Media
   NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/yourpage
   NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/yourprofile

   # Legal Information
   NEXT_PUBLIC_EDITOR_NAME=Editor Full Name
   NEXT_PUBLIC_EDITOR_ADDRESS=Editor Address
   NEXT_PUBLIC_OWNER_NAME=Website Owner Name
   NEXT_PUBLIC_OWNER_ADDRESS=Website Owner Address

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_DEFAULT_LANG=fr
   NEXT_PUBLIC_SITE_TITLE=Your Site Title
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Configuration

### Getting Your API Keys

#### Web3Forms (Contact Form)

1. Visit [https://web3forms.com/](https://web3forms.com/)
2. Sign up for a free account
3. Create a new form and copy your Access Key
4. Add it to `NEXT_PUBLIC_API_KEY` in `.env.local`

#### Google Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property (GA4)
3. Copy your Measurement ID (format: G-XXXXXXXXXX)
4. Add it to `NEXT_PUBLIC_GA_ID` in `.env.local`

### Customizing Content

All content is configurable via environment variables and components:

- **Business Info**: Update `.env.local` with your details
- **Services**: Edit components in `/components/` directory
- **Images**: Replace images in `/public/` directory (use WebP format)
- **Colors**: Modify `tailwind.config.js` for your brand colors
- **SEO**: Update `components/SEO.js` and `components/StructuredData.js`
- **Footer**: Displayed only on Contact page, uses env variables

### Responsive Design Notes

This site uses Tailwind's default breakpoints:

- **Mobile**: < 640px (default)
- **sm**: ≥ 640px (tablet portrait)
- **md**: ≥ 768px (tablet landscape)
- **lg**: ≥ 1024px (desktop)

All pages are optimized for mobile-first with specific padding-top values to account for the fixed header menu.

### Updating Sitemap

Edit `/public/sitemap.xml` and update:

- `<loc>` tags with your actual domain
- `<lastmod>` dates when you update content
- Add/remove pages as needed

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/freelance-paramedic-website)

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to:

- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**
- **Railway**
- **Render**

## 🗂️ Project Structure

```
freelance-paramedic-website/
├── components/              # React components
│   ├── SEO.js              # SEO meta tags component
│   ├── StructuredData.js   # JSON-LD structured data
│   ├── CookieConsent.js    # GDPR cookie consent (12-month expiration)
│   ├── Layout.js           # Main layout wrapper (menu only)
│   ├── Menu.js             # Navigation menu (bg-green-50, font-weight: 500)
│   ├── Footer.js           # Footer (only on Contact page)
│   ├── Accueil.js          # Homepage
│   ├── Kinesiologie.js     # Kinesiology page with carousel
│   ├── Pourquoi.js         # Why consult page (8 cards grid)
│   ├── Reflexologie.js     # Reflexology page (split layout)
│   ├── NettoyageEnergetique.js # Energy cleansing page
│   ├── AproposDeMoi.js     # About page
│   ├── ContactsEtTarifs.js # Contact & pricing page
│   └── ContactEtTarifs/    # Contact page components
│       ├── Contact.js      # Main contact layout
│       ├── ContactInfo.js  # Contact information
│       ├── FormContact.js  # Contact form (with security)
│       ├── Tarifs.js       # Pricing table
│       └── SocialIcons.js  # Social media icons
├── pages/                  # Next.js pages (routes)
│   ├── _app.js            # Custom App component
│   ├── _document.js       # Custom Document
│   └── [PageName].js      # Individual page routes
├── public/                # Static assets
│   ├── robots.txt         # Search engine directives
│   ├── sitemap.xml        # XML sitemap
│   ├── logo.png           # Site logo
│   └── *.WebP             # Optimized images (brightness: 0.7, saturate: 1.1)
├── styles/                # CSS files
│   ├── globals.css        # Global styles with animations
│   ├── Menu.module.css    # Menu styles
│   └── Rosace.module.css  # Rosace component styles
├── .env.example           # Environment variables template
├── .env.local             # Your local environment (gitignored)
├── .gitignore             # Git ignore rules (includes yarn.lock, .yarn/)
├── next.config.js         # Next.js configuration with security headers
├── tailwind.config.js     # Tailwind CSS configuration (custom colors/animations)
└── package.json           # Dependencies (npm only)
```

## 🎨 Design System

### Color Palette

```javascript
colors: {
  primary: {
    50: '#f0f9f4',   // Very light green
    100: '#daf1e4',
    200: '#b7e4cc',
    300: '#86d0ac',
    400: '#55b888',  // Footer gradient start
    500: '#3a9d6e',
    600: '#2a7d57',
    700: '#226447',  // Titles, footer gradient end
    800: '#1e5039',
    900: '#1a4230',
  },
  // Also includes secondary, accent, and neutral palettes
}
```

### Image Optimization

All background images use:

- `filter: brightness(0.7) saturate(1.1)` (except A propos: 0.95)
- `quality={75}`
- `priority` loading for above-the-fold images
- WebP format for optimal compression

### Typography

- **Menu**: font-weight: 500 (medium)
- **Titles**: font-weight: 600-700 (semibold-bold)
- **Body**: font-weight: 400 (regular)

### Animations

- **fade-in**: Opacity transition (0.5s)
- **slide-up**: Translate Y with opacity (0.5s)
- **scale-in**: Scale transformation (0.3s)
- Staggered delays using `animationDelay` inline styles

## 🔐 Security Features

### Security Headers (next.config.js)

```javascript
headers: {
  'Content-Security-Policy': '...',  // Strict CSP
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
}
```

### Form Security (FormContact.js)

- Input sanitization (removes < >)
- Email format validation
- Phone number validation (French format)
- Rate limiting: 1 submission per 30 seconds
- Loading states
- Error handling

### Cookie Consent

- 12-month expiration
- Timestamp storage
- Granular accept/decline controls
- GDPR compliant

## 🔐 Security Best Practices

✅ **DO:**

- Keep `.env` and `.env.local` files in `.gitignore`
- Regenerate API keys if accidentally exposed
- Use HTTPS in production
- Keep dependencies updated (`npm audit`)
- Review security headers regularly
- Run `npm audit fix` after updates

❌ **DON'T:**

- Commit `.env` files to git
- Share API keys publicly
- Disable security headers
- Use deprecated packages
- Mix yarn and npm (npm only!)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🔄 Updates & Maintenance

### Updating Dependencies

```bash
npm update
npm audit
npm audit fix
```

### Current Dependencies (Updated)

- Next.js: 15.1.3
- React: 18.3.1
- React DOM: 18.3.1
- Tailwind CSS: 3.2.7

**Built with ❤️ for wellness practitioners who want a professional online presence**

_This template is perfect for kinesiologists, reflexologists, energy healers, massage therapists, naturopaths, and other wellness professionals._
