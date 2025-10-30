# Braeden Kilburn - Portfolio

A modern, responsive portfolio website built with Astro, showcasing my professional experience, projects, and skills as a Full-Stack Software Engineer.

## ✨ Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive Layout**: Optimized for all device sizes with mobile-first approach
- **Dynamic Content**: Content managed through Astro collections for easy updates
- **Performance Optimized**: Fast loading with Astro's static site generation

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: CSS with custom properties and nesting
- **Icons**: Custom SVG icons
- **Content Management**: Astro Content Collections
- **Package Manager**: Bun
- **Deployment**: Static hosting ready

## 🎯 Pages

- **Homepage** (`/`): Hero section with featured projects and about preview
- **About** (`/about`): Detailed professional experience, skills, and personal info
- **Projects** (`/projects`): Interactive project showcase with filtering capabilities
- **Contact** (`/contact`): Professional contact information and social links

## 🧞 Commands

All commands are run from the root of the project:

| Command         | Action                                           |
| :-------------- | :----------------------------------------------- |
| `bun install`   | Installs dependencies                            |
| `bun dev`       | Starts local dev server at `localhost:4321`      |
| `bun build`     | Build your production site to `./dist/`          |
| `bun preview`   | Preview your build locally, before deploying     |
| `bun astro ...` | Run CLI commands like `astro add`, `astro check` |

To utilize the Bun runtime, it may be necessary to add the `--bun` flag to run the CLI with Bun instead of Node.js. For example:

```shell
bun run --bun dev
```

## 📝 Content Management

The portfolio uses Astro Content Collections for easy content management:

- **Experience**: Add/edit professional experience in `src/data/experience/`
- **Skills**: Update technical skills in `src/data/skills/`
- **Projects**: Manage portfolio projects in `src/data/projects/`
- **Social Links**: Update social media links in `src/data/socials/`

Each collection uses markdown files with frontmatter for structured data.

## 🎨 Customization

The site uses CSS custom properties for easy theming. Key variables are defined in `src/styles/global.css`:

- Color scheme (light/dark mode support)
- Typography scale
- Spacing system
- Border radius and shadows

## 📱 Responsive Design

- Mobile-first approach with breakpoints at 768px and 1024px
- Flexible grid layouts that adapt to screen size
- Touch-friendly interactive elements
- Optimized typography for readability across devices

## 🚀 Deployment

The site is built as a static site and can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
