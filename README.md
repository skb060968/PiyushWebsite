# Piyush Bholla Fashion - Indian Fashion Portfolio Website

A modern, responsive Indian fashion portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing the work of Piyush Bholla, an expert Indian fashion stylist and creative director.

![Piyush Bholla Fashion](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- **Modern Design**: Clean, minimalist design that puts the focus on Indian fashion work
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized images and modern web technologies
- **SEO Optimized**: Built-in SEO optimization with proper meta tags
- **Interactive Components**: Smooth animations and hover effects
- **Video Background**: YouTube video integration in hero section
- **Contact Form**: Functional contact form with validation
- **Portfolio Gallery**: Filterable portfolio gallery with Indian fashion categories

## 📱 Pages

- **Homepage**: Hero with video background, featured work, about preview, services, testimonials, contact
- **Portfolio**: Complete portfolio gallery with categories (Bridal, Saree, Celebrity, Festival)
- **About**: Detailed about page with Indian fashion experience, awards, and philosophy
- **Services**: Comprehensive Indian fashion services page with pricing in INR and process
- **Contact**: Contact form with Indian fashion project inquiry details and FAQ

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **Fonts**: Google Fonts (Playfair Display, Inter)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/piyush-bholla-fashion.git
   cd piyush-bholla-fashion
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- `fashion-gold`: #D4AF37
- `fashion-black`: #1a1a1a
- `fashion-gray`: #f5f5f5

### Images
Replace the placeholder images with actual portfolio images:
- Add images to `public/images/` folder
- Update image paths in components
- Organize by categories: bridal, saree, celebrity, festival

### Content
Update the content in each component:
- Personal details and bio for Piyush Bholla
- Indian fashion portfolio projects and descriptions
- Services and pricing in INR
- Contact information and location
- Client testimonials from Indian fashion industry

## 📁 Project Structure

```
piyush-bholla-fashion/
├── app/                    # Next.js 14 App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact form
│   ├── FeaturedWork.tsx  # Featured work gallery
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section with video
│   ├── Navbar.tsx        # Navigation
│   ├── Services.tsx      # Services section
│   └── Testimonials.tsx  # Client testimonials
├── public/               # Static assets
│   └── images/          # Image storage
│       ├── about/       # About section images
│       ├── hero/        # Hero images
│       └── portfolio/   # Portfolio images
├── lib/                 # Utility functions
└── tailwind.config.js   # Tailwind configuration
```

## 🌐 Deployment

### Deploy on Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically with each push

### Deploy on Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure custom domain if needed

### Deploy on GitHub Pages
1. Add GitHub Pages configuration
2. Enable GitHub Actions for deployment
3. Push to main branch to deploy

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Cloudinary (if using for images)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 📈 Performance Features

- Image optimization with Next.js Image component
- Lazy loading for images
- Optimized fonts loading
- Minimal JavaScript bundle
- CSS optimization with Tailwind
- SEO meta tags and structured data

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Piyush Bholla Fashion**
- Email: hello@piyushbholla.com
- Phone: +91 98765 43210
- Location: Mumbai, India
- Instagram: [@piyushbhollafashion](https://instagram.com/piyushbhollafashion)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ for Indian Fashion**