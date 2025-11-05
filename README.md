# Cloud Engineer Portfolio

A modern, responsive portfolio website built with React for showcasing cloud engineering expertise and projects.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean and professional design with smooth animations
- **React Router**: Single-page application with smooth navigation
- **Reusable Components**: Modular component architecture
- **Technology Showcase**: Detailed skills and certifications sections
- **Project Gallery**: Interactive project showcase with filtering
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML structure

## Sections

1. **Home**: Hero section with introduction and key highlights
2. **About**: Professional summary, stats, and key strengths
3. **Projects**: Showcase of cloud engineering projects with technology badges
4. **Skills**: Comprehensive technical skills organized by category
5. **Certifications**: Industry certifications with verification links
6. **Contact**: Contact form and social media links

## Technologies Used

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cloud-engineer-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Personal Information

Update your personal details in `src/data/personalInfo.js`:

- Name, title, location
- Contact information
- Social media links
- Bio and professional summary

### Projects

Add your projects in `src/data/projects.js`:

- Project title and description
- Technologies used
- GitHub and demo links
- Featured project flag

### Skills

Customize your skills in `src/data/skills.js`:

- Organize by categories
- Set proficiency levels
- Add technology icons

### Certifications

Update certifications in `src/data/certifications.js`:

- Certification details
- Issuer information
- Verification links
- Credential IDs

### Styling

The project uses Tailwind CSS with custom configuration in `tailwind.config.js`. You can:

- Modify color schemes
- Add custom animations
- Update typography
- Customize component styles

## File Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   └── TechBadge.js    # Technology badge component
├── data/               # Data files for content
│   ├── personalInfo.js # Personal information
│   ├── projects.js     # Projects data
│   ├── skills.js       # Skills data
│   └── certifications.js # Certifications data
├── sections/           # Main page sections
│   ├── Home.js        # Hero section
│   ├── About.js       # About section
│   ├── Projects.js    # Projects showcase
│   ├── Skills.js      # Skills section
│   ├── Certifications.js # Certifications section
│   └── Contact.js     # Contact form
├── App.js             # Main App component
├── index.js           # React entry point
└── index.css          # Global styles and Tailwind imports
```

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Deploy automatically on push

### AWS S3 + CloudFront

1. Build the project: `npm run build`
2. Upload `build` folder contents to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain and SSL certificate

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue in the GitHub repository.
