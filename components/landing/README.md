# Landing Page Components

This directory contains all the components for the main landing page of the Zyka application.

## Component Structure

The landing page is built with a modular component architecture, with each section isolated into its own component for maintainability and reusability.

### Components Overview

1. **Hero** (`hero.tsx`)
   - The main hero section with animated phone mockups
   - Features the primary headline "AI that creates ads that work"
   - Includes floating animation effects on phone mockups
   - Primary CTA button

2. **TrustBar** (`trust-bar.tsx`)
   - Displays company logos and social proof
   - Shows key statistics (10M+ ads, 500K+ users, 98% satisfaction)
   - Dark background for contrast

3. **AdExamples** (`ad-examples.tsx`)
   - Grid showcase of example ads
   - Interactive phone mockups with play button overlays
   - Displays various ad types and categories

4. **Testimonials** (`testimonials.tsx`)
   - Three-column testimonial cards
   - Features thought leader recommendations
   - Includes metrics and success stats

5. **VideoDemo** (`video-demo.tsx`)
   - Two-column layout with content and video
   - Lists key features with checkmarks
   - Video placeholder with play button
   - Floating stats card

6. **Features** (`features.tsx`)
   - Highlights UGC (User Generated Content) ads
   - Dark background with white text
   - Product showcase with phone mockups
   - Floating rating badge

7. **CreatorExamples** (`creator-examples.tsx`)
   - Grid of creator examples
   - Phone mockups with engagement metrics
   - Creator profiles and statistics

8. **AIAgent** (`ai-agent.tsx`)
   - Showcases AI Agent creation feature
   - Isometric illustration design
   - Lists key benefits
   - Dark theme section

9. **AvatarShowcase** (`avatar-showcase.tsx`)
   - Grid of 240+ avatars
   - Animated fade-in effects
   - Statistics about avatar library
   - Support for multiple languages

10. **CTASection** (`cta-section.tsx`)
    - Primary call-to-action section
    - Gradient background (purple/pink/blue)
    - Multiple CTA buttons
    - Trust indicators and social proof

11. **FounderSupport** (`founder-support.tsx`)
    - Showcases founder-level support
    - Displays founder avatars with tooltips
    - Three support feature cards
    - Customer testimonial

12. **Footer** (`footer.tsx`)
    - Comprehensive footer with multiple link sections
    - Newsletter signup form
    - Social media links
    - Legal and trust badges

## Design Principles

- **Modular**: Each section is self-contained and reusable
- **Responsive**: All components are mobile-first and fully responsive
- **Accessible**: Semantic HTML and proper ARIA labels
- **Performant**: Optimized animations and lazy loading where applicable
- **Consistent**: Uses Tailwind CSS for consistent styling

## Color Scheme

- **Primary**: Black (#000000)
- **Backgrounds**: White, Gray-50, Black
- **Accents**: Purple, Pink, Blue gradients
- **Text**: Gray-600, Gray-700, White

## Typography

- **Primary Font**: Geist Sans
- **Monospace**: Geist Mono
- **Heading Sizes**: 5xl, 6xl, 7xl for major headings
- **Body Text**: lg, xl for readability

## Animations

- **Float**: Subtle floating animation for phone mockups
- **Fade In Up**: Entry animations for content
- **Hover Effects**: Scale and shadow transitions
- **Smooth Scroll**: Smooth scrolling between sections

## Usage

Import all components through the index file:

```typescript
import {
  Hero,
  TrustBar,
  AdExamples,
  // ... other components
} from "@/components/landing";
```

## Future Enhancements

- [ ] Add intersection observer for scroll animations
- [ ] Implement lazy loading for images
- [ ] Add video support for demo sections
- [ ] Implement A/B testing variants
- [ ] Add analytics tracking
- [ ] Optimize for Core Web Vitals

