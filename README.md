# MalingaTech Website

Professional website for MalingaTech - A South African technology investment and development portfolio connecting African innovation with global opportunities.

## Overview

This website showcases MalingaTech's portfolio of technology ventures across fintech, e-commerce, and business services sectors. Built with modern web technologies and optimized for performance and user experience.

## Technology Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Build Tool**: Vite
- **Hosting**: Firebase Hosting

## Portfolio Companies

- **Nickle** (nickle.co.za) - Fintech platform
- **Coupin** (coupin.co.za) - Digital coupon and deals platform
- **Operiva** (operiva.co.za) - Business operations platform
- **Wetyca** (wetyca.com) - Technology consulting services

## Development

### Prerequisites

- Node.js 22.x
- pnpm package manager

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The development server will start at `http://localhost:3000`

### Build for Production

```bash
# Build the project
pnpm build

# Preview production build
pnpm preview
```

## Firebase Deployment

### Prerequisites

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

### Deploy to Firebase Hosting

1. Build the project:
```bash
pnpm build
```

2. Deploy to Firebase:
```bash
firebase deploy --only hosting
```

Your site will be deployed to: `https://malingatech-55a9a.web.app`

### Firebase Configuration

The project is configured to deploy to Firebase project `malingatech-55a9a`. Configuration files:

- `firebase.json` - Firebase hosting configuration
- `.firebaserc` - Firebase project settings

## Project Structure

```
client/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ui/      # shadcn/ui components
│   ├── pages/       # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Portfolio.tsx
│   │   └── Contact.tsx
│   ├── contexts/    # React contexts
│   ├── hooks/       # Custom hooks
│   ├── lib/         # Utility functions
│   ├── App.tsx      # Main app component with routing
│   └── main.tsx     # Entry point
```

## Features

- **Responsive Design**: Mobile-first approach with seamless experience across devices
- **Dark/Light Theme**: Switchable theme with system preference detection
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Performance**: Optimized assets and code splitting for fast load times
- **Accessibility**: WCAG compliant with keyboard navigation support

## Investment Thesis

MalingaTech focuses on four key areas:

1. **African Market Focus** - Deep understanding of South African business needs
2. **Technology-Driven Solutions** - Digital innovation for traditional sectors
3. **Scalable Business Models** - Platforms designed to grow across African markets
4. **Practical Impact** - Solutions improving lives in underserved communities

## Leadership

Led by **Phathizwe Malinga**, Group CIO at PG Group:

- UCT Executive MBA & Adjunct Lecturer
- Singularity University Faculty Candidate
- R700M National IoT Network Project Leader
- 10+ years corporate leadership experience

## Contact

- **Email**: contact@malingatech.com
- **Location**: Cape Town, South Africa
- **GitHub**: [github.com/Phathizwe/MalingaTech](https://github.com/Phathizwe/MalingaTech)

## License

© 2025 MalingaTech. All rights reserved.

