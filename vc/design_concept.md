# Landing Page Design Concept for PE and VC Audience

## Overview
A minimalist, impactful landing page that reveals new text content as the user scrolls down. Each section will display a single sentence centered on the screen with large typography, maintaining the dark background and accent colors from the main website.

## Key Design Elements

### Visual Style
- **Background**: Dark gradient background (--color-dark to --color-darker)
- **Typography**: Large, bold Montserrat font for all text
- **Text Color**: White (--color-light) with accent words in gold (--color-accent-gold) or blue (--color-accent-blue)
- **Text Size**: Extra large (3-4rem) for maximum impact
- **Text Alignment**: Centered both horizontally and vertically in the viewport

### Scroll Behavior
- Each "screen" takes up 100vh (full viewport height)
- Text fades in as it enters the viewport
- Text fades out as it exits the viewport
- Smooth scrolling between sections

### Navigation
- Minimal header with just the logo/name
- No traditional navigation menu
- Small scroll indicator at the bottom of each screen
- Final screen includes a link back to the main website

## Content Structure

### Screen 1 (Initial View)
- Bold headline: "Private Equity & Venture Capital"
- Subtitle: "Leadership insights for investment professionals"

### Screens 2-7
- Each screen contains a single, impactful sentence focused on PE/VC leadership challenges and opportunities
- Key words highlighted in accent colors
- Each sentence occupies the center of the screen

### Final Screen
- Call to action
- Link back to main website
- Contact information

## Technical Implementation

### HTML Structure
- Simple structure with sections for each screen
- Each section has 100vh height
- Text elements centered within each section

### CSS Features
- CSS variables matching the main site
- Intersection Observer API for scroll-based animations
- Smooth transitions between sections
- Responsive design that works on all devices

### JavaScript Functionality
- Detect scroll position
- Trigger fade in/out animations
- Smooth scroll behavior

## Mobile Considerations
- Text size adjusts for smaller screens
- Touch-friendly scrolling
- Maintains same visual impact on mobile devices

This design concept creates a visually striking, focused experience specifically for PE and VC professionals while maintaining consistency with the main website's design language.
