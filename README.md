# 🚀 Modern Bio-Link Page (Astro Edition)

Welcome to the **Modern Bio-Link Page** template. This is a high-performance personal landing page (Link-in-bio) built with a modern Bento Grid layout, premium aesthetics, and lightning-fast speed.

📖 **Official Page:** [Launchlean.dev](https://launchlean.dev)

## ✨ Key Features
- ⚡ **Ultra Fast:** Powered by Astro 5.0 (SSG) for near-instant page loads.
- 🍱 **Bento Grid Layout:** Fully responsive and flexible content grid.
- 🎨 **Premium UI:** Features Glassmorphism, dynamic Mesh Gradients, and default Dark Mode.
- 📱 **Mobile First:** Optimized for a perfect experience on all mobile devices.
- 📇 **VCard Export:** One-click "Save Contact" functionality to add info directly to phone contacts.
- 📋 **Copy to Clipboard:** Tap to quickly copy bank account numbers or emails.
- 🔍 **SEO & Open Graph:** Pre-configured Meta tags for beautiful social media sharing.

---

## � Prerequisites

Before you begin, ensure you have the following installed:

1. **NVM (Node Version Manager):** It is highly recommended to use NVM to manage your Node.js versions.
   - [Install NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
2. **Node.js:** This project requires Node.js (LTS version 18 or higher recommended).
   ```bash
   nvm install --lts
   nvm use --lts
   ```

## �🛠 Installation Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Your site will be running at: `http://localhost:4321`

---

## 📦 Content Management

This template uses **Astro Content Collections**, allowing you to update content by editing JSON/Markdown files without touching the code.

### 👤 1. Profile Information
Edit file: `src/content/profile/me.json`
```json
{
  "name": "Your Name",
  "bio": "A short bio about yourself",
  "avatar": "../../assets/avatar.png",
  "location": "City, Country",
  "verified": true,
  "phone": "+1234567890", // Optional: for VCard/Save Contact
  "email": "hello@example.com" // Optional: for VCard/Save Contact
}
```
*Note: Place your profile picture in the `src/assets/` directory.*

### 📥 2. Save Contact (VCard)
The "Save Contact" button on the home page allows users to download your contact information directly to their phone.
To configure the information included in the VCard (.vcf file), add the `phone` and `email` fields to your `src/content/profile/me.json` as shown above.

### 🔗 3. Links (Bento Grid)
Each link is a `.json` file in the `src/content/links/` directory. You can create multiple files like `facebook.json`, `portfolio.json`, `bank.json`.

**Link File Structure:**
```json
{
  "id": "unique-id",
  "title": "Display Title",
  "url": "https://your-link.com",
  "icon": "LucideIconName", // Icon name from Lucide (e.g., Youtube, Github, Mail)
  "isFeatured": true, // Displays a 'Featured' badge
  "layout": "large", // 'large', 'medium', or 'small'
  "color": "#FF0000" // Accent color for the card
}
```

**Layout Types:**
- `large`: Occupies 2 columns and 2 rows (Best for featured products or videos).
- `medium`: Occupies 2 columns and 1 row (Best for primary links).
- `small`: Occupies 1 column (Best for social icons or small stats).

**Copy to Clipboard Feature:**
To enable fast copy, set the URL to: `#copy:content-to-copy`
*Example: `#copy:0123456789`*

### 📱 4. Social Media
Edit/Create files in: `src/content/socials/`
These will always render as `small` cards at the end of the grid.

---

## 🎨 Customization

- **Icons:** The template uses [Lucide React](https://lucide.dev/icons). Just use the icon name in the `icon` field within the JSON files.
- **Background:** You can customize the Mesh Gradient colors in `src/layouts/Layout.astro`.
- **CSS:** Custom Tailwind effects are located in `src/styles/global.css`.

---

## 🚀 Deployment

For a detailed walkthrough, check out the [Official Deployment Guide](https://launchlean.dev/guides/bio-page-deploy-guide/).

### Build the Project
```bash
npm run build
```
The `dist/` directory will contain your static site source code, ready to be deployed to:
- **Cloudflare Pages:** Highly recommended for speed and ease of use.
- **Vercel / Netlify:** Connect your GitHub repo and select Astro as the framework.

---

## 📝 Developer Notes
- Use the Astro `<Image />` component for automatic image optimization.
- View Transitions are pre-configured for a smooth "App-like" navigation experience.

## deploy cloudflare


```bash
npm install -g wrangler
```

```bash
npm run clean && npm run build && npx wrangler pages deploy dist --project-name rocky-nguyen
```

- change rocky-nguyen with your project name
---
*Template created by **Rocky Nguyen**.*
