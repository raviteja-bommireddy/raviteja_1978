# GitHub Pages Deployment & Editing Guide
## Complete Guide for Raviteja's Portfolio Website

---

## 📋 Table of Contents
1. [Initial Setup & Deployment](#initial-setup--deployment)
2. [How to Edit Your Portfolio](#how-to-edit-your-portfolio)
3. [Updating Your Website](#updating-your-website)
4. [Troubleshooting](#troubleshooting)
5. [Advanced Tips](#advanced-tips)

---

## 🚀 Initial Setup & Deployment

### Step 1: Install Required Software

#### Install Git (if not already installed)
1. Go to [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Download and install with default settings
3. Restart your command prompt after installation
4. Verify installation: `git --version`

#### Verify Node.js is installed
\`\`\`bash
node --version
npm --version
\`\`\`

### Step 2: Create GitHub Account & Repository

1. **Create GitHub Account**:
   - Go to [https://github.com](https://github.com)
   - Sign up for a free account
   - Verify your email address

2. **Create New Repository**:
   - Click the "+" icon in top right corner
   - Select "New repository"
   - Repository name: `raviteja-portfolio`
   - Make it **Public**
   - **Don't** check "Initialize with README"
   - Click "Create repository"

### Step 3: Prepare Your Project

In your project folder (`D:\PROJECTS\Websites\raviteja-portfolio`), run:

\`\`\`bash
# Build your project first to make sure everything works
npm run build
\`\`\`

### Step 4: Upload to GitHub

\`\`\`bash
# Initialize git repository
git init

# Configure your git identity (replace with your info)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Personal portfolio website"

# Add GitHub repository as remote (REPLACE YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/raviteja-portfolio.git

# Create main branch and push
git branch -M main
git push -u origin main
\`\`\`

**⚠️ Important**: Replace `YOUR_USERNAME` with your actual GitHub username!

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in left sidebar
4. Under **"Source"**, select **"GitHub Actions"**
5. Click **"Save"**

### Step 6: Wait for Deployment

1. Go to **"Actions"** tab in your repository
2. Wait for the green checkmark (usually takes 2-5 minutes)
3. Your website will be live at: `https://YOUR_USERNAME.github.io/raviteja-portfolio/`

---

## ✏️ How to Edit Your Portfolio

### Understanding the File Structure

\`\`\`
raviteja-portfolio/
├── app/
│   ├── page.tsx                 # 🏠 HOME PAGE
│   ├── experiences/page.tsx     # 💼 EXPERIENCES PAGE
│   ├── publications/page.tsx    # 📚 PUBLICATIONS PAGE
│   ├── projects/page.tsx        # 🚀 PROJECTS PAGE
│   ├── news/page.tsx           # 📰 NEWS PAGE
│   ├── more/page.tsx           # 💡 MORE PAGE
│   └── layout.tsx              # Navigation & overall layout
├── components/
│   ├── navigation.tsx          # Navigation menu
│   └── theme-toggle.tsx        # Dark/light theme toggle
└── package.json                # Project dependencies
\`\`\`

### Editing Each Page

#### 🏠 **Editing HOME PAGE** (`app/page.tsx`)

**To change your name/title:**
\`\`\`typescript
<h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
  Raviteja Bommireddy  {/* ← Change this */}
</h1>
<p className="text-xl text-muted-foreground mb-4">
  Research Assistant & AI Enthusiast  {/* ← Change this */}
</p>
\`\`\`

**To update your bio:**
\`\`\`typescript
<p className="text-lg text-muted-foreground leading-relaxed">
  Your new bio text here...  {/* ← Change this */}
</p>
\`\`\`

**To change contact information:**
\`\`\`typescript
<Link href="mailto:cs23b2011@iiitdm.ac.in">  {/* ← Change email */}
<Link href="tel:+919391985287">              {/* ← Change phone */}
<Link href="https://linkedin.com/in/your-profile">  {/* ← Change LinkedIn */}
<Link href="https://github.com/your-username">      {/* ← Change GitHub */}
\`\`\`

**To update your photo:**
\`\`\`typescript
<Image
  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my%20photo%20HD.jpg-gebuwVanQmFEsf4NqmCJxWjTXhsMz1.jpeg"  {/* ← Replace with your photo URL */}
  alt="Raviteja Bommireddy"             {/* ← Change alt text */}
  width={280}
  height={350}
/>
\`\`\`

#### 💼 **Editing EXPERIENCES PAGE** (`app/experiences/page.tsx`)

**To add a new job experience:**
\`\`\`typescript
const experiences = [
  // Add new experience at the beginning of the array
  {
    title: "Your New Job Title",
    company: "Company Name",
    location: "City, Country",
    duration: "Start Date - End Date",
    type: "Full-time", // or "Internship", "Contract", etc.
    description: [
      "First achievement or responsibility",
      "Second achievement or responsibility",
      "Third achievement or responsibility",
    ],
    skills: ["Skill1", "Skill2", "Skill3"],
  },
  // ... existing experiences
]
\`\`\`

**To update education:**
\`\`\`typescript
<CardTitle className="text-xl">Your Degree Title</CardTitle>
<span className="font-medium">Your University Name</span>
<span>Your Location</span>
<span>Your Duration</span>
\`\`\`

#### 🚀 **Editing PROJECTS PAGE** (`app/projects/page.tsx`)

**To add a new project:**
\`\`\`typescript
const projects = [
  // Add new project at the beginning
  {
    title: "Your Project Name",
    category: "Project Category", // e.g., "Machine Learning", "Web Development"
    description: "Brief description of your project...",
    features: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3",
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
    icon: <YourIcon className="w-6 h-6" />, // Choose from lucide-react icons
    color: "border-l-blue-500", // Choose color: blue, green, red, purple, etc.
  },
  // ... existing projects
]
\`\`\`

#### 📰 **Editing NEWS PAGE** (`app/news/page.tsx`)

**To add news items:**
\`\`\`typescript
const newsItems = [
  // Add new news at the beginning (most recent first)
  {
    title: "Your News Title",
    date: "Month Year", // e.g., "January 2024"
    category: "Category", // e.g., "Achievement", "Research", "Career"
    content: "Description of the news or achievement...",
    tags: ["Tag1", "Tag2", "Tag3"],
  },
  // ... existing news
]
\`\`\`

#### 📚 **Editing PUBLICATIONS PAGE** (`app/publications/page.tsx`)

**To add your first publication:**
Replace the "Coming Soon" section with:
\`\`\`typescript
const publications = [
  {
    title: "Your Paper Title",
    authors: "Author1, Author2, You",
    venue: "Conference/Journal Name",
    year: "2024",
    link: "https://link-to-paper.com",
    abstract: "Brief abstract of your paper...",
  }
]

// Then map through publications to display them
{publications.map((pub, index) => (
  <Card key={index}>
    <CardContent className="p-6">
      <h3 className="font-semibold text-lg mb-2">{pub.title}</h3>
      <p className="text-muted-foreground mb-2">{pub.authors}</p>
      <p className="text-sm text-muted-foreground mb-3">{pub.venue}, {pub.year}</p>
      <p className="text-sm mb-4">{pub.abstract}</p>
      <Button asChild size="sm">
        <Link href={pub.link} target="_blank">View Paper</Link>
      </Button>
    </CardContent>
  </Card>
))}
\`\`\`

#### 💡 **Editing MORE PAGE** (`app/more/page.tsx`)

**To update brainstorm areas:**
\`\`\`typescript
const brainstormAreas = [
  {
    title: "Your Interest Area",
    description: "Description of what you want to discuss...",
    icon: <YourIcon className="w-6 h-6" />,
    topics: ["Topic1", "Topic2", "Topic3"],
  },
  // ... other areas
]
\`\`\`

---

## 🔄 Updating Your Website

### Method 1: Using Command Line (Recommended)

1. **Make your changes** to any files
2. **Open command prompt** in your project folder
3. **Run these commands:**

\`\`\`bash
# Check what files you changed
git status

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Update: describe what you changed"

# Push to GitHub
git push
\`\`\`

4. **Wait 2-5 minutes** for GitHub Actions to rebuild your site
5. **Check your website** - changes should be live!

### Method 2: Using GitHub Web Interface

1. **Go to your repository** on GitHub
2. **Navigate to the file** you want to edit
3. **Click the pencil icon** (Edit this file)
4. **Make your changes**
5. **Scroll down** and add a commit message
6. **Click "Commit changes"**
7. **Wait for deployment** (check Actions tab)

### Common Update Scenarios

#### Adding a New Job
1. Edit `app/experiences/page.tsx`
2. Add new experience to the `experiences` array
3. Commit and push changes

#### Adding a New Project
1. Edit `app/projects/page.tsx`
2. Add new project to the `projects` array
3. Commit and push changes

#### Updating Your Photo
1. Upload new photo to an image hosting service (like imgur.com)
2. Copy the direct image URL
3. Replace the `src` in `app/page.tsx`
4. Commit and push changes

#### Adding News/Updates
1. Edit `app/news/page.tsx`
2. Add new item to `newsItems` array (at the beginning for most recent)
3. Commit and push changes

---

## 🔧 Troubleshooting

### Common Issues & Solutions

#### ❌ **"git is not recognized"**
- **Solution**: Install Git from [git-scm.com](https://git-scm.com)
- Restart command prompt after installation

#### ❌ **Authentication failed when pushing**
- **Solution**: Use Personal Access Token
  1. Go to GitHub → Settings → Developer settings → Personal access tokens
  2. Generate new token with "repo" permissions
  3. Use token as password when Git asks

#### ❌ **Website not updating after push**
- **Solution**: Check GitHub Actions
  1. Go to your repository → Actions tab
  2. Look for failed builds (red X)
  3. Click on failed build to see error details

#### ❌ **Website shows 404 error**
- **Solution**: Check repository settings
  1. Go to Settings → Pages
  2. Make sure source is set to "GitHub Actions"
  3. Check that repository name matches the basePath in next.config.mjs

#### ❌ **Images not loading**
- **Solution**: Use absolute URLs for images
  - Upload images to imgur.com or similar service
  - Use the direct image URL in your code

#### ❌ **Build fails with TypeScript errors**
- **Solution**: Check your syntax
  - Make sure all brackets `{}` and parentheses `()` are properly closed
  - Check for missing commas in arrays
  - Verify all imports are correct

### Getting Help

1. **Check the Actions tab** for build errors
2. **Look at the error messages** - they usually tell you what's wrong
3. **Google the error message** for solutions
4. **Ask for help** with specific error messages

---

## 🎯 Advanced Tips

### Customizing Colors
Edit `tailwind.config.ts` to change the color scheme:
\`\`\`typescript
theme: {
  extend: {
    colors: {
      primary: "your-color-here",
    }
  }
}
\`\`\`

### Adding New Pages
1. Create new folder in `app/` directory
2. Add `page.tsx` file in that folder
3. Update navigation in `components/navigation.tsx`

### SEO Optimization
Update `app/layout.tsx` metadata:
\`\`\`typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description...",
  keywords: ["your", "keywords"],
}
\`\`\`

### Custom Domain (Optional)
1. Buy a domain from any registrar
2. Add CNAME file to your repository with your domain
3. Configure DNS settings with your registrar
4. Update GitHub Pages settings

---

## 📝 Quick Reference Commands

\`\`\`bash
# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# Check current branch
git branch

# Build project locally
npm run build

# Run development server
npm run dev
\`\`\`

---

## 🎉 Final Notes

- **Always test locally** with `npm run dev` before pushing
- **Use descriptive commit messages** like "Add new project: AI Chatbot"
- **Keep your content updated** regularly
- **Backup your code** - GitHub serves as your backup!
- **Your website URL**: `https://YOUR_USERNAME.github.io/raviteja-portfolio/`

---

**Happy coding! 🚀**

*Last updated: January 2025*
