# Raviteja Bommireddy - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your system:
- Node.js 18.0 or later
- npm or yarn package manager

### Installation & Setup

1. **Extract the downloaded zip file** to your desired location

2. **Navigate to the project directory**
   \`\`\`bash
   cd raviteja-portfolio
   \`\`\`

3. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`
   
   Or if you prefer yarn:
   \`\`\`bash
   yarn install
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`
   
   Or with yarn:
   \`\`\`bash
   yarn dev
   \`\`\`

5. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

The website should now be running locally on your machine!

## 🛠️ Available Scripts

- `npm run dev` - Runs the development server
- `npm run build` - Builds the application for production
- `npm run start` - Runs the production build
- `npm run lint` - Runs ESLint for code quality

## 📁 Project Structure

\`\`\`
raviteja-portfolio/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── experiences/       # Experiences page
│   ├── publications/      # Publications page
│   ├── projects/          # Projects page
│   ├── news/             # News page
│   ├── more/             # More/Brainstorm page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── navigation.tsx    # Navigation component
│   └── theme-toggle.tsx  # Theme toggle component
├── lib/                  # Utility functions
└── public/              # Static assets
\`\`\`

## 🎨 Features

- **Responsive Design** - Works on all devices
- **Dark/Light Theme** - Toggle between themes
- **Modern UI** - Built with shadcn/ui components
- **Fast Performance** - Optimized with Next.js
- **SEO Friendly** - Proper meta tags and structure

## 🔧 Customization

### Updating Content

1. **Personal Information**: Edit `app/page.tsx` for home page content
2. **Experience**: Update `app/experiences/page.tsx`
3. **Projects**: Modify `app/projects/page.tsx`
4. **News**: Edit `app/news/page.tsx`

### Adding New Pages

1. Create a new folder in the `app` directory
2. Add a `page.tsx` file in that folder
3. Update the navigation in `components/navigation.tsx`

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Use Tailwind classes

## 📱 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically

### Other Deployment Options

- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Use `next export` for static deployment
- **Self-hosted**: Use `npm run build` and serve the `out` folder

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change port with `npm run dev -- -p 3001`
2. **Dependencies issues**: Delete `node_modules` and run `npm install` again
3. **Build errors**: Check console for specific error messages

### Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Try deleting `node_modules` and `.next` folders, then reinstall

## 📄 License

This project is for personal use. Feel free to use it as a template for your own portfolio.

---

**Contact**: cs23b2011@iiitdm.ac.in
