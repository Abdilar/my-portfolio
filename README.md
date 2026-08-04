
# Frontend Engineering Portfolio

My professional portfolio as a Senior Frontend Engineer, built with Next.js and TypeScript.

The website presents selected projects, production engineering experience, and technical case studies covering frontend architecture, performance optimization, testing, and engineering leadership.

## Live Website

[View the portfolio](YOUR_DEPLOYMENT_URL)

## Purpose

This project is designed to provide more technical depth than a traditional personal portfolio.

Instead of presenting only screenshots and technology lists, each case study explains:

- The product and engineering context
- The technical problem
- Constraints and trade-offs
- The solution and architecture
- My responsibilities
- The measurable or observable result
- Lessons and possible improvements

## Featured Case Studies

### High-Traffic E-commerce Performance

A case study about reducing redundant API requests through client-side caching and improving frontend performance in a product serving more than one million monthly users.

### Frontend Monorepo Architecture

A case study covering the design of a Webpack-based frontend monorepo used across multiple banking applications.

### Frontend Testing Strategy

A case study explaining how unit, integration, and end-to-end testing practices can be introduced into an existing frontend codebase without significantly slowing delivery.

### Engineering Leadership

A case study about technical decision-making, mentoring, onboarding documentation, code reviews, and improving team engineering practices.

## Tech Stack

- Next.js
- React
- TypeScript
- CSS Modules or Tailwind CSS
- Jest
- React Testing Library
- Playwright
- Vercel
- GitHub Actions

## Architecture

```Text
src/
├── app/
├── components/
│   ├── ui/
│   └── sections/
├── features/
│   ├── case-studies/
│   ├── projects/
│   └── contact/
├── content/
│   ├── case-studies/
│   └── projects/
├── lib/
├── styles/
└── tests/
```

Content should be separated from presentation components so that case studies can be maintained without modifying UI code.

## Performance Goals

* Lighthouse Performance score above 95
* Accessibility score above 95
* Minimal client-side JavaScript
* Optimized fonts and images
* Static generation for project and case-study pages
* No unnecessary third-party scripts

## Accessibility

The website should include:

* Semantic HTML
* Keyboard navigation
* Visible focus styles
* Accessible form labels
* Sufficient color contrast
* Reduced-motion support
* Automated accessibility checks

## Testing

### Unit and Integration Tests

* Navigation
* Project filtering
* Case-study rendering
* Contact form validation
* Content parsing

### End-to-End Tests

* Browse projects
* Open a case study
* Download the resume
* Submit the contact form
* Navigate using the keyboard

## Local Development

```bash
git clone https://github.com/Abdilar/frontend-engineering-portfolio.git
cd frontend-engineering-portfolio
npm install
npm run dev
```

## Quality Checks

```bash
npm run typecheck
npm run lint
npm test
npm run test:e2e
npm run build
```

## Deployment

The project is deployed on Vercel.

Each pull request should receive a preview deployment, while merges to the main branch should trigger the production deployment.

## Roadmap

* [ ] Complete professional homepage
* [ ] Add selected experience
* [ ] Add four technical case studies
* [ ] Add project detail pages
* [ ] Add downloadable resume
* [ ] Add accessibility tests
* [ ] Add Playwright tests
* [ ] Add Lighthouse CI
* [ ] Add analytics without invasive tracking
* [ ] Deploy production version

## License

The source code is available under the MIT License.

The written case-study content and personal information may not be reused without permission.

