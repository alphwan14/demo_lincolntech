# Demo Portal - Lincoln Tech

A futuristic, visually impressive demo website showcasing advanced UI/UX and animation capabilities.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** - Page transitions and animations
- **GSAP** - Advanced motion effects
- **Lenis** - Smooth scrolling
- **Three.js** - 3D effects (ready for implementation)
- **Resend** - Email service

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=re_9rwRTcSp_NfV3vztmAW84gzhkCVcB3Ctz
TO_EMAIL=your-email@example.com
```

The `TO_EMAIL` is optional. If not set, demo requests will be sent to the form submitter's email.

## Features

### Pages

- **Homepage** (`/`) - Floating hero section with animated headlines, parallax effects, and 3D elements
- **Capabilities** (`/capabilities`) - Hover playground, scroll animations, animation sandbox, and tech stack showcase
- **Showcase** (`/showcase`) - Page transitions, micro-interactions, floating cards, text morphing, and staggered grids
- **About** (`/about`) - Animated timeline and floating info cards
- **Request Demo** (`/request-demo`) - Premium form with Resend email integration

### Animation Features

- ✅ Smooth scroll animations (Lenis)
- ✅ Floating UI elements with 3D tilt
- ✅ Advanced page transitions
- ✅ Interactive custom cursor (desktop only)
- ✅ Text animations (letter-by-letter, morphing)
- ✅ Parallax effects
- ✅ Glassmorphism design
- ✅ Magnetic buttons
- ✅ Fully responsive

## Project Structure

```
demo_lincolntech/
├── app/
│   ├── api/
│   │   └── send-email/     # Resend API route
│   ├── capabilities/       # Capabilities page
│   ├── showcase/          # Showcase page
│   ├── about/             # About page
│   ├── request-demo/      # Demo request form
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── AnimatedText.tsx   # Text animation component
│   ├── CustomCursor.tsx   # Custom cursor effect
│   ├── FloatingCard.tsx  # 3D floating card
│   ├── Footer.tsx         # Footer component
│   ├── MagneticButton.tsx # Magnetic button effect
│   ├── Navigation.tsx     # Navigation bar
│   ├── PageTransition.tsx # Page transition wrapper
│   └── SmoothScroll.tsx  # Lenis smooth scroll
└── lib/
    └── animations.ts      # Reusable animation variants
```

## Build

```bash
npm run build
npm start
```

## License

MIT

