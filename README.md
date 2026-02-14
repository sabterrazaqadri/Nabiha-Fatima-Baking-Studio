# 🎂 Nabiha Fatima Baking Studio

A modern, elegant, mobile-first showcase website for a home-based cake business. This is a high-converting showcase website designed to display beautiful cake photos, build trust, and drive customers to WhatsApp for orders.

## ✨ Features

### 🎨 Design
- **Soft pastel color palette** (cream, blush pink, light beige)
- **Elegant bakery aesthetic** with rounded cards and soft shadows
- **Serif fonts** for headings (Playfair Display)
- **Clean sans-serif** for body text (Inter)
- **Warm and feminine tone** - luxury but minimal

### 📱 Sections
1. **Hero Section** - Large background image with primary CTAs
2. **About Section** - Story with 3 highlight points
3. **Cake Gallery** - Categorized gallery with lightbox modal
4. **How to Order** - Simple 3-step process
5. **Testimonials** - Customer reviews with 5-star ratings
6. **FAQ** - Expandable accordion
7. **Contact Section** - Contact info and quick message form
8. **Footer** - Brand info and social links

### 🚀 Technical Features
- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **Framer Motion** for smooth animations
- **Lucide React** for icons
- **Mobile-first responsive design**
- **SEO optimized** with proper metadata
- **Sticky WhatsApp floating button**
- **Image optimization** with Next.js Image component
- **Smooth scroll behavior**

### 📞 WhatsApp Integration
- WhatsApp number: **+92 329 2159108**
- Multiple WhatsApp CTAs throughout the site
- Sticky floating button with pulse animation
- Contact form redirects to WhatsApp

## 🛠️ Getting Started

### Prerequisites
- Bun installed (`curl -fsSL https://bun.sh/install | bash`)
- Node.js 20+ (for compatibility)

### Installation

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun build

# Run production server
bun start

# Type checking
bun typecheck

# Linting
bun lint
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Global styles and color palette
│   └── favicon.ico         # Site icon
└── components/
    ├── Hero.tsx            # Hero section with background image
    ├── About.tsx           # About section with highlights
    ├── Gallery.tsx         # Categorized gallery with lightbox
    ├── HowToOrder.tsx      # 3-step ordering process
    ├── Testimonials.tsx    # Customer testimonials
    ├── FAQ.tsx             # Accordion FAQ section
    ├── Contact.tsx         # Contact information and form
    ├── Footer.tsx          # Footer with links
    ├── WhatsAppButton.tsx  # Sticky floating WhatsApp button
    └── index.ts            # Component exports
```

## 🎨 Color Palette

```css
--cream: #FFF8F0        /* Background */
--blush: #FFE5E5        /* Light accents */
--rose: #FFB6C1         /* Primary accent */
--beige: #F5E6D3        /* Secondary background */
--soft-brown: #D4A574   /* Tertiary accent */
--text-dark: #4A4A4A    /* Primary text */
--text-light: #6B6B6B   /* Secondary text */
```

## 📝 Customization

### Update WhatsApp Number
Search for `923292159108` in the codebase and replace with your number.

### Update Instagram Handle
Search for `@nabihafatimabakingstudio` and replace with your handle.

### Update Images
Replace the Unsplash URLs in components with your own cake images:
- Hero background: `Hero.tsx`
- About image: `About.tsx`
- Gallery images: `Gallery.tsx`

### Update Content
- Business hours: `Contact.tsx`
- Location: `Contact.tsx`
- Testimonials: `Testimonials.tsx`
- FAQ answers: `FAQ.tsx`
- About story: `About.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Build: `bun build`
- Output: `.next` directory
- Start: `bun start`

## 📱 Mobile Optimization

- Large tap targets (min 44x44px)
- Sticky WhatsApp button
- Clean stacking layout
- Fast loading with optimized images
- No horizontal scroll
- Smooth animations

## 🎯 Performance

- Server Components by default
- Optimized images with Next.js Image
- Lazy loading
- Minimal dependencies
- Tree-shaking enabled
- Tailwind CSS purges unused styles

## 📊 SEO

- Proper meta tags
- Open Graph tags
- Twitter Card tags
- Semantic HTML
- Proper heading hierarchy (H1, H2, H3)
- Optimized alt text for images
- Mobile-friendly

## 🤝 Support

For questions or support, contact via:
- WhatsApp: +92 329 2159108
- Instagram: @nabihafatimabakingstudio

## 📄 License

This project is created for Nabiha Fatima Baking Studio.

---

Made with ❤️ for celebrating life's special moments
