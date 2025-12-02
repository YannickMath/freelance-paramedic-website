# 🌿 Freelance Paramedic Website - Professional Wellness Practitioner Portfolio

A modern, SEO-optimized, and GDPR-compliant website for freelance wellness practitioners (kinesiologists, reflexologists, energy healers, etc.). Built with Next.js, Tailwind CSS, and following best practices for performance, security, and accessibility.

[![Next.js](https://img.shields.io/badge/Next.js-13.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.2.7-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

## ✨ Features

### 🎨 Modern Design

- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Custom Animations** - Smooth transitions using Framer Motion
- **Professional UI** - Clean, elegant design with Tailwind CSS
- **WebP Images** - Optimized image format for faster loading

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

- **Security Headers** - HSTS, X-Frame-Options, CSP, and more
- **GDPR Compliant** - Cookie consent banner with granular controls
- **Environment Variables** - All sensitive data in `.env` files
- **No Hardcoded Credentials** - Fully configurable via environment
- **XSS Protection** - Built-in security measures

### ♿ Accessibility

- **WCAG 2.1 Compliant** - Accessible to all users
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Friendly** - Proper ARIA labels and semantic HTML
- **Zoom Support** - No viewport restrictions

### 📊 Analytics

- **Google Analytics** - Privacy-respecting analytics with consent management
- **Route Tracking** - Automatic page view tracking
- **Consent-based** - Analytics only activate after user consent

### 📱 Core Pages

- **Home** - Welcome page with hero section
- **Services** - Detailed service descriptions (Kinesiology, Reflexology, Energy Healing)
- **About** - Practitioner biography and credentials
- **Contact & Pricing** - Contact form and service pricing
- **Legal** - Privacy policy and legal mentions

## 🚀 Quick Start

### Prerequisites

- Node.js 14.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/freelance-paramedic-website.git
   cd freelance-paramedic-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

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
   # or
   yarn dev
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
- **Images**: Replace images in `/public/` directory
- **Colors**: Modify `tailwind.config.js` for your brand colors
- **SEO**: Update `components/SEO.js` and `components/StructuredData.js`

### Updating Sitemap

Edit `/public/sitemap.xml` and update:

- `<loc>` tags with your actual domain
- `<lastmod>` dates when you update content
- Add/remove pages as needed

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm start
# or
yarn start
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
├── components/           # React components
│   ├── SEO.js           # SEO meta tags component
│   ├── StructuredData.js # JSON-LD structured data
│   ├── CookieConsent.js # GDPR cookie consent
│   ├── Layout.js        # Main layout wrapper
│   ├── Menu.js          # Navigation menu
│   └── ...              # Page-specific components
├── pages/               # Next.js pages (routes)
│   ├── index.js         # Homepage
│   ├── Kinesiologie.js  # Kinesiology page
│   ├── Reflexologie.js  # Reflexology page
│   ├── ContactsEtTarifs.js # Contact & pricing
│   ├── _app.js          # Custom App component
│   └── _document.js     # Custom Document
├── public/              # Static assets
│   ├── robots.txt       # Search engine directives
│   ├── sitemap.xml      # XML sitemap
│   ├── logo.png         # Site logo
│   └── *.WebP           # Optimized images
├── styles/              # CSS files
│   ├── globals.css      # Global styles
│   └── *.module.css     # Component-specific styles
├── .env.example         # Environment variables template
├── .env.local           # Your local environment (gitignored)
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies
```

## 🎨 Customization Guide

### Changing Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        secondary: "#your-color",
      },
    },
  },
};
```

### Adding New Pages

1. Create a component in `/components/YourPage.js`
2. Create a page in `/pages/YourPage.js`
3. Import and add SEO component
4. Add to menu in `/components/Menu.js`
5. Update sitemap in `/public/sitemap.xml`

### Changing Fonts

Update in `tailwind.config.js`:

```javascript
fontFamily: {
  'your-font': ['Your Font', 'sans-serif'],
}
```

## 🔐 Security Best Practices

✅ **DO:**

- Keep `.env` and `.env.local` files in `.gitignore`
- Regenerate API keys if accidentally exposed
- Use HTTPS in production
- Keep dependencies updated (`npm audit`)
- Review security headers regularly

❌ **DON'T:**

- Commit `.env` files to git
- Share API keys publicly
- Disable security headers
- Use deprecated packages

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Web3Forms for the contact form service
- All open-source contributors

## 📞 Support

If you have questions or need help:

1. Check existing [Issues](https://github.com/yourusername/freelance-paramedic-website/issues)
2. Create a new issue with details
3. Star ⭐ the repo if you find it useful!

## 🔄 Updates & Maintenance

### Updating Dependencies

```bash
npm update
# or
yarn upgrade
```

### Security Audits

```bash
npm audit
npm audit fix
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Image Optimization**: WebP format
- **Code Splitting**: Automatic via Next.js

---

**Built with ❤️ for wellness practitioners who want a professional online presence**

_This template is perfect for kinesiologists, reflexologists, energy healers, massage therapists, naturopaths, and other wellness professionals._
