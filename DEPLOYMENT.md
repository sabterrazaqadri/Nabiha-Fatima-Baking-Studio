# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js website.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Nabiha Fatima Baking Studio website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

## Alternative: Deploy to Netlify

1. **Build the project**
   ```bash
   bun run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repo

## Alternative: Deploy to Your Own Server

### Requirements:
- Node.js 20+ or Bun installed
- PM2 or similar process manager

### Steps:

1. **Build the project**
   ```bash
   bun install
   bun run build
   ```

2. **Start the server**
   ```bash
   bun start
   ```

3. **Use PM2 for production**
   ```bash
   npm install -g pm2
   pm2 start "bun start" --name nabiha-baking
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx (if needed)**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

No environment variables are required for the base setup. If you add features later (like analytics), add them in your deployment platform:

### Vercel:
- Go to Settings → Environment Variables
- Add your variables

### Netlify:
- Go to Site settings → Environment variables
- Add your variables

## Post-Deployment Checklist

- [ ] Test all WhatsApp links work correctly
- [ ] Verify Instagram link opens correctly
- [ ] Check all images load properly
- [ ] Test on mobile devices
- [ ] Test contact form redirects to WhatsApp
- [ ] Verify SEO meta tags (use [metatags.io](https://metatags.io))
- [ ] Test page speed (use [PageSpeed Insights](https://pagespeed.web.dev))
- [ ] Submit sitemap to Google Search Console

## Performance Tips

1. **Optimize Images**
   - Replace Unsplash URLs with your own optimized images
   - Use WebP format when possible
   - Keep images under 500KB

2. **Enable Caching**
   - Vercel handles this automatically
   - For custom servers, configure proper cache headers

3. **Monitor Performance**
   - Use Vercel Analytics (free)
   - Or Google Analytics
   - Monitor Core Web Vitals

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
bun install
bun run build
```

### Images Not Loading
- Check image URLs are accessible
- Verify Next.js Image component configuration
- Check domain is added to `next.config.ts` if using external images

### WhatsApp Links Not Working
- Verify phone number format: 923292159108 (no + or spaces)
- Test on mobile device
- Check URL encoding is correct

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

---

Need help? Contact via WhatsApp: +92 329 2159108
