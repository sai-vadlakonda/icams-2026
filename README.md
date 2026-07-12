# ICAMS 2026 — Conference Website

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-Official-success)

Official website for the **7th International Congress on Advances in Mechanical Sciences (ICAMS 2026)** organized by the **Department of Mechanical Engineering**, **Vardhaman College of Engineering (VCE)**, Hyderabad, Telangana, India.

The website provides complete conference information including keynote speakers, organizing committee, conference tracks, important dates, paper submission, registration, publications, venue, gallery, FAQs, and contact information.

**Conference Dates:** **December 4–5, 2026**

---

# Features

- Responsive design for Desktop, Tablet, and Mobile
- Dark / Light theme support
- Modern UI built with Tailwind CSS
- Smooth scrolling using Lenis
- Beautiful animations using Framer Motion
- Countdown timer for conference
- Animated statistics section
- About Conference & About College pages
- Seven conference tracks
- Timeline of important dates
- Paper submission page
- Registration fee details
- Publications information
- Venue page with embedded Google Maps
- Organizing Committee
- National & International Advisory Committee
- Keynote Speaker profiles with photographs
- Sponsors page
- Gallery with Swiper carousel
- Frequently Asked Questions
- Contact page with validated form
- SEO optimized pages
- Favicon support
- Production ready

---

# Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router v6**
- **Framer Motion**
- **GSAP**
- **Lenis**
- **React Hook Form**
- **Swiper**
- **Lucide React**
- **React Icons**
- **React Helmet Async**
- **ESLint**
- **Prettier**

---

# Project Structure

```
icams-2026/
│
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── gallery/
│   │   │   ├── speakers/
│   │   │   ├── hero-campus.jpg
│   │   │   └── icams-logo.jpg
│   │   │
│   │   └── templates/
│   │
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── site.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── data/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── sections/
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# Pages Included

1. Home
2. About Conference
3. About Vardhaman College
4. Conference Tracks
5. Important Dates
6. Submission
7. Registration
8. Publications
9. Venue
10. Committee
11. Speakers
12. Sponsors
13. Gallery
14. FAQ
15. Contact
16. 404 Not Found

---

# Highlights

### Home

- Hero section
- Conference countdown
- Conference statistics
- Conference overview
- Call-to-action buttons

### About Conference

- Conference objectives
- Scope
- Official ICAMS logo
- Conference overview

### About College

- College profile
- Vision & Mission
- Accreditations
- Infrastructure

### Conference Tracks

- Seven technical tracks
- Detailed research topics

### Important Dates

- Conference timeline
- Submission deadlines
- Registration deadlines

### Submission

- Paper submission guidelines
- Template download
- Submission portal

### Registration

- Registration fees
- Categories
- Payment details
- Registration inclusions

### Publications

- Conference Proceedings
- Springer LNME information
- Publication opportunities

### Venue

- Conference venue
- Google Maps integration
- Travel information

### Committee

- Chief Patrons
- Patron
- Organizing Committee
- National Advisory Committee
- International Advisory Committee

### Speakers

- Keynote Speakers
- Speaker photographs
- Affiliations

### Gallery

- Campus photographs
- Conference gallery
- Swiper carousel

### FAQ

- Frequently asked questions

### Contact

- Contact information
- Contact form

---

# Getting Started

## Prerequisites

Before running the project, make sure you have:

- Node.js **v18.18+** or **v20+**
- npm (comes with Node.js)

Verify installation:

```bash
node -v
npm -v
```

---

## Clone the Repository

```bash
git clone https://github.com/your-username/icams-2026.git
cd icams-2026
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

The production build will be generated inside:

```
dist/
```

---

## Preview Production Build

```bash
npm run preview
```

---

## Lint Project

```bash
npm run lint
```

---

## Format Code

```bash
npm run format
```

---

# Assets Used

The project stores all images and downloadable files inside the **public** directory.

```
public/

assets/
│
├── images/
│   ├── gallery/
│   ├── speakers/
│   ├── hero-campus.jpg
│   ├── icams-logo.jpg
│   └── vce-campus.jpg
│
├── templates/
│   ├── paper-template.docx
│   └── copyright-form.pdf
│
├── brochure-icams-2026.pdf
├── favicon.ico
└── sitemap.xml
```

---

# Updating Conference Content

Most conference information is stored separately from the UI.

This makes future updates very easy.

## Conference Details

```
src/constants/site.ts
```

Contains:

- Conference name
- Venue
- Contact details
- Registration details
- Payment information

---

## Navigation Menu

```
src/constants/nav.ts
```

Controls:

- Navbar
- Mobile navigation
- More dropdown

---

## Conference Tracks

```
src/data/tracks.ts
```

Edit:

- Track names
- Topics
- Research areas

---

## Important Dates

```
src/data/dates.ts
```

Update:

- Submission deadlines
- Acceptance dates
- Registration dates
- Conference dates

---

## Committee

```
src/data/committee.ts
```

Contains:

- Patrons
- Organizing Committee
- National Advisory Committee
- International Advisory Committee

---

## Speakers

```
src/data/speakers.ts
```

Update:

- Speaker name
- Designation
- Affiliation
- Photograph

Speaker images are stored inside:

```
public/assets/images/speakers/
```

---

## Gallery

```
src/data/gallery.ts
```

Images:

```
public/assets/images/gallery/
```

---

## FAQ

```
src/data/faq.ts
```

Add or edit:

- Questions
- Answers

---

# Customization

## Hero Background

Replace

```
public/assets/images/hero-campus.jpg
```

with the latest Vardhaman College campus image.

---

## ICAMS Logo

Replace

```
public/assets/images/icams-logo.jpg
```

with the latest official conference logo.

---

## Speaker Photos

Replace images inside

```
public/assets/images/speakers/
```

while keeping the same filenames.

---

## Gallery Photos

Simply replace images inside

```
public/assets/images/gallery/
```

---

## Brochure

Replace

```
public/brochure-icams-2026.pdf
```

---

## Paper Template

Replace

```
public/templates/paper-template.docx
```

---

## Copyright Form

Replace

```
public/templates/copyright-form.pdf
```

---

# Dark Mode

Dark mode is managed automatically using

```
src/hooks/useTheme.ts
```

Features:

- Light theme
- Dark theme
- Saves user preference
- Respects system preference

---

# Smooth Scrolling

The project uses **Lenis**.

Location:

```
src/hooks/useLenis.ts
```

Features:

- Smooth scrolling
- Scroll animations
- Route scroll reset

---

# Animations

Animations are built using

- Framer Motion
- GSAP

Used throughout:

- Hero
- Cards
- Committee
- Speakers
- Statistics
- Sections

---

# SEO

Every page includes:

- Title
- Meta Description
- Canonical URL
- Open Graph Tags

Component:

```
src/components/SEO.tsx
```

Additional files:

```
public/

robots.txt
sitemap.xml
site.webmanifest
```

Before deployment update:

- Domain
- Sitemap URL
- Canonical URLs

---

# Browser Support

Tested on:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

Responsive support:

- Desktop
- Laptop
- Tablet
- Mobile

---

# Deployment

## Deploy to Vercel

1. Push the project to GitHub.
2. Login to Vercel.
3. Click **Add New Project**.
4. Import the GitHub repository.
5. Vercel will automatically detect **Vite**.

Build Settings

```
Framework : Vite
Build Command : npm run build
Output Directory : dist
```

Click **Deploy**.

---

## Deploy using Vercel CLI

```bash
npm install -g vercel
```

```bash
vercel
```

Follow the CLI instructions.

---

## Deploy to Netlify

1. Push the repository to GitHub.
2. Login to Netlify.
3. Import the repository.
4. Configure

```
Build Command

npm run build
```

```
Publish Directory

dist
```

Deploy.

---

## React Router Configuration

Since this project uses **React Router**, configure rewrites.

### Vercel

Create

```
vercel.json
```

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

### Netlify

Create

```
public/_redirects
```

```
/*    /index.html    200
```

---

# Production Checklist

Before deployment verify the following:

## Website

- Hero image loads correctly
- Navbar works
- Mobile menu works
- Scroll to top works
- Route scroll reset works
- Theme toggle works
- Countdown works
- Gallery images load
- Speaker images load
- Google Maps works
- Contact page works
- Downloads work

---

## SEO

Verify

- Title
- Meta description
- Open Graph tags
- Canonical URL
- robots.txt
- sitemap.xml

---

## Performance

Run

```bash
npm run build
```

Then

```bash
npm run preview
```

Test

- Desktop
- Tablet
- Mobile

---

## Lighthouse

Recommended Scores

```
Performance     90+
Accessibility   100
Best Practices  100
SEO             100
```

---

# Future Updates

The following items can be updated later without changing the project structure.

## Conference Details

```
src/constants/site.ts
```

Update

- Contact details
- Registration details
- Bank account
- IFSC
- SWIFT
- Email
- Phone number

---

## Committee

```
src/data/committee.ts
```

Update

- Organizing Committee
- Advisory Committee
- New members

---

## Speakers

```
src/data/speakers.ts
```

Update

- Speaker names
- Affiliations
- Speaker photographs

---

## Gallery

Replace images inside

```
public/assets/images/gallery
```

---

## Sponsors

Replace placeholder sponsors with

- Platinum Sponsor
- Gold Sponsor
- Silver Sponsor
- Industry Partner

---

## Brochure

Replace

```
public/brochure-icams-2026.pdf
```

---

## Paper Template

Replace

```
public/templates/paper-template.docx
```

---

## Copyright Form

Replace

```
public/templates/copyright-form.pdf
```

---

# Repository Maintenance

Whenever conference information changes:

1. Update the corresponding data file.
2. Run

```bash
npm run build
```

3. Test locally.

```bash
npm run preview
```

4. Commit changes.

```bash
git add .
git commit -m "Update conference information"
```

5. Push.

```bash
git push
```

---

# Recommended Git Workflow

Clone

```bash
git clone <repository-url>
```

Create a branch

```bash
git checkout -b feature-name
```

Commit

```bash
git add .
git commit -m "Describe your changes"
```

Push

```bash
git push origin feature-name
```

Merge using Pull Request.

---

# Contributing

If you wish to contribute to the project:

- Follow the existing project structure.
- Maintain consistent coding style.
- Run lint before committing.
- Test the production build before creating a Pull Request.

---

# Acknowledgements

Developed for

**Department of Mechanical Engineering**

**Vardhaman College of Engineering**

Hyderabad, Telangana, India

for the

**7th International Congress on Advances in Mechanical Sciences (ICAMS 2026)**

---

# License

This project was developed exclusively for the Department of Mechanical Engineering, Vardhaman College of Engineering, Hyderabad, for use in connection with **ICAMS 2026**.

The source code and assets are intended for official conference use. Redistribution or commercial reuse should be done only with permission from the organizers.

---

## Version

Current Version

```
v1.0.0
```

Release

```
July 2026
```

---

## Contact

Department of Mechanical Engineering

Vardhaman College of Engineering

Hyderabad, Telangana, India

**Website:** <https://www.icams2026.org>

**Email:** <conference@icams2026.org>

---

# Webmaster

This website was designed and developed by **Sai Vadlakonda**.

🔗 **LinkedIn:** <https://www.linkedin.com/in/sai-vadlakonda/>

For technical support, website maintenance, or future enhancements, feel free to connect on LinkedIn.

---

**Thank you for using the ICAMS 2026 Conference Website.**