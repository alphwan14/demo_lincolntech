# Quick Setup Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=re_9rwRTcSp_NfV3vztmAW84gzhkCVcB3Ctz
TO_EMAIL=alphwan14@gmail.com
```

**Note:** 
- `RESEND_API_KEY` is already configured with the provided key
- `TO_EMAIL` is where demo requests will be sent. If not set, emails will be sent to the form submitter's email address.

## 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 4. Build for Production

```bash
npm run build
npm start
```

## Features Overview

### ✅ Implemented Features

- **Homepage** - Floating hero with animated text, parallax background, 3D elements
- **Capabilities Page** - Hover playground, scroll animations, animation sandbox, tech stack
- **Showcase Page** - Page transitions, micro-interactions, floating cards, text morphing
- **About Page** - Animated timeline, floating info cards
- **Request Demo** - Premium form with Resend email integration
- **Navigation** - Responsive navigation with mobile menu
- **Custom Cursor** - Interactive cursor (desktop only)
- **Smooth Scroll** - Lenis-powered smooth scrolling
- **Page Transitions** - Framer Motion page transitions
- **Responsive Design** - Fully responsive across all devices

### 🎨 Design System

- Dark futuristic theme
- Neon gradient accents (cyan, purple, pink)
- Glassmorphism cards
- Smooth animations throughout
- Professional typography (Inter + Orbitron)

## Troubleshooting

### Email Not Sending

1. Verify `RESEND_API_KEY` is set in `.env.local`
2. Check that the Resend API key is valid
3. Ensure `TO_EMAIL` is set if you want emails sent to a specific address
4. Check browser console and server logs for errors

### Animations Not Working

- Ensure all dependencies are installed: `npm install`
- Check browser console for errors
- Verify JavaScript is enabled

### Build Errors

- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run lint`

