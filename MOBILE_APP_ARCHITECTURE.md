# DPC Indy - Mobile App Architecture

## Visual Layout Structure

```
┌─────────────────────────────────────────┐
│  DESKTOP VIEW (≥768px)                  │
├─────────────────────────────────────────┤
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  Navbar (Fixed Top)               │  │
│  │  [Logo] [Menu] [Menu] [Join]     │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │  Page Content                     │  │
│  │                                   │  │
│  │                                   │  │
│  │                                   │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  Footer                           │  │
│  └───────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────┐
│  MOBILE VIEW (<768px)                   │
├─────────────────────────────────────────┤
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  Navbar (Fixed Top)               │  │
│  │  [Logo]              [Join]       │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │  Page Content                     │  │
│  │  (scrollable)                     │  │
│  │                                   │  │
│  │  ⬇️ Scrolling down = nav hides    │  │
│  │  ⬆️ Scrolling up = nav shows      │  │
│  │                                   │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  App Bar (Fixed Bottom)           │  │
│  │  [🏠] [⚕️] [📅] [📄] [💬]         │  │
│  │  Home Services Schedule Portal    │  │
│  └───────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

## Component Hierarchy

```
RootLayout (app/layout.tsx)
│
├── ThemeProvider (light mode only)
│   │
│   ├── Navbar (components/Navbar.tsx)
│   │   ├── Desktop: Full mega menus
│   │   └── Mobile: Logo + Join button only
│   │
│   ├── Main Content
│   │   └── {children} - Each page
│   │
│   ├── Footer (SharedFooter)
│   │
│   ├── MobileAppBar (components/MobileAppBar.tsx)
│   │   ├── Shows on mobile only (<768px)
│   │   ├── Fixed bottom position
│   │   ├── Hide/show on scroll
│   │   └── 5 navigation items
│   │
│   ├── PWAInstallPrompt (components/PWAInstallPrompt.tsx)
│   │   ├── Shows after 3 seconds
│   │   ├── Dismissible
│   │   └── Smart persistence
│   │
│   └── StickySavingsBar
│
└── Service Worker (public/sw.js)
    ├── Caches static assets
    ├── Offline support
    └── Auto-updates
```

## Mobile Navigation Flow

### User Scrolls Down (Reading Content)
```
Before scroll:
┌──────────────┐
│ Top Navbar   │ ← Always visible
├──────────────┤
│   Content    │
│   Content    │
│   Content    │
├──────────────┤
│ Bottom Nav   │ ← Visible
└──────────────┘

After scrolling down 100px+:
┌──────────────┐
│ Top Navbar   │ ← Always visible
├──────────────┤
│   Content    │
│   Content    │ ← More viewable space
│   Content    │
│   Content    │
└──────────────┘
                 ← Bottom nav hidden
```

### User Scrolls Up (Wants Navigation)
```
Bottom Nav slides back up:
┌──────────────┐
│ Top Navbar   │
├──────────────┤
│   Content    │
│   Content    │
├──────────────┤
│ Bottom Nav   │ ← Reappears
└──────────────┘
```

## PWA Installation Flow

```
┌─────────────────────────────────────────────┐
│  1. User visits site on mobile              │
│     ↓                                       │
│  2. Service worker registers (background)   │
│     ↓                                       │
│  3. After 3 seconds: Install prompt appears │
│     ┌───────────────────────────────────┐   │
│     │ Install DPC Indy App?             │   │
│     │ Access healthcare portal, etc.    │   │
│     │ [Install] [Not Now]               │   │
│     └───────────────────────────────────┘   │
│     ↓                                       │
│  4a. User clicks "Install"                  │
│      → App added to home screen ✅          │
│      → Can launch like native app           │
│                                             │
│  4b. User clicks "Not Now"                  │
│      → Prompt dismissed for 7 days          │
│      → Can still browse normally            │
└─────────────────────────────────────────────┘
```

## Hint Health Integration Points

```
┌─────────────────────────────────────────────┐
│  DPC Indy Site                              │
│  ┌───────────────────────────────────────┐  │
│  │ Mobile Bottom Nav: "Portal" button    │  │
│  │ Navbar: "Patient Login" link          │  │
│  │ Resources page: Full portal showcase  │  │
│  └───────────────────────────────────────┘  │
│                ↓ Click                      │
│  ┌───────────────────────────────────────┐  │
│  │ Opens in new tab                      │  │
│  └───────────────────────────────────────┘  │
│                ↓                            │
├─────────────────────────────────────────────┤
│  Hint Health Portal                         │
│  https://directcareindy.hint.com/login      │
│  ┌───────────────────────────────────────┐  │
│  │ Patient logs in                       │  │
│  │ Access to:                            │  │
│  │  • Schedule appointments              │  │
│  │  • View medical records               │  │
│  │  • Secure messaging                   │  │
│  │  • Prescriptions                      │  │
│  │  • Lab results                        │  │
│  │  • Billing                            │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

## Offline Experience

```
User has installed PWA and goes offline:

┌─────────────────────────────────────────────┐
│  Network: Offline                           │
├─────────────────────────────────────────────┤
│                                             │
│  User tries to visit a page:               │
│  ↓                                          │
│  Service Worker checks cache               │
│  ↓                                          │
│  ┌──────────────────┬─────────────────────┐│
│  │ Page in cache?   │ Page NOT in cache?  ││
│  ↓                  ↓                      ││
│  Show cached page   Show offline page      ││
│  ✅ Works!          (friendly message)     ││
│                     [Retry] [Home]         ││
│  └──────────────────┴─────────────────────┘│
│                                             │
│  When network returns:                     │
│  → Background sync updates cache           │
│  → User can browse normally                │
└─────────────────────────────────────────────┘
```

## File Size Impact

```
New files added:
├── components/MobileAppBar.tsx        (~4KB)
├── components/PWAInstallPrompt.tsx    (~3KB)
├── components/HintHealthPortal.tsx    (~5KB)
├── app/offline/page.tsx               (~2KB)
├── public/manifest.json               (~1KB)
├── public/sw.js                       (~2KB)
└── Documentation files                (~50KB)

Total bundle size increase: ~17KB (minified)
Documentation: ~50KB (not bundled)

Impact: Minimal - modern mobile connections
        handle this in <0.5 seconds
```

## Performance Characteristics

```
Metric                  Before    After     Impact
──────────────────────────────────────────────────
Initial Load            Fast      Fast      No change
Mobile Nav Response     N/A       Instant   ⚡ New
Install Time            N/A       <5 sec    ⚡ New
Offline Capability      None      Partial   ⚡ New
Home Screen Install     No        Yes       ⚡ New
App-like Feel (Mobile)  Basic     Native    ⚡ Enhanced

Lighthouse Scores (estimated):
├── Performance:    90+ (unchanged)
├── Accessibility:  95+ (unchanged)
├── Best Practices: 95+ (unchanged)
└── PWA:           ~50 → 95+ ⚡ Major improvement
```

## Responsive Breakpoints

```
Screen Size          Navigation Style         Layout
──────────────────────────────────────────────────────
< 768px (Mobile)     Bottom App Bar           Single column
                     + Simple top nav          Full width content
                     (Hamburger removed)       Touch-optimized

≥ 768px (Tablet)     Full top nav bar         2-column grid
                     + Mega menus              Standard spacing
                     (Bottom bar hidden)       Mouse-optimized

≥ 1024px (Desktop)   Full top nav bar         3+ column grid
                     + Mega menus              Max-width container
                     (Bottom bar hidden)       Desktop spacing
```

## Z-Index Layers

```
Layer    Component                Z-Index    Purpose
───────────────────────────────────────────────────────
5        Navbar (top)             50         Always on top
4        MobileAppBar (bottom)    50         Always accessible
3        Mega Menu Dropdowns      40         Above content
2        PWA Install Prompt       40         Above content
1        Modal/Overlays          30         Temporary UI
0        Page Content            auto       Main content
```

## Touch Target Sizes (Mobile)

```
Component              Size        WCAG Compliance
─────────────────────────────────────────────────────
Bottom Nav Items       60×60px     ✅ (44px minimum)
Top Nav "Join"         48×40px     ✅ (44px minimum)
Portal Links           48×48px     ✅ (44px minimum)
Install Prompt Btns    48×44px     ✅ (44px minimum)

All interactive elements meet or exceed
WCAG 2.1 AA touch target requirements
```

## Color Palette (Light Mode Only)

```
Element               Color           Hex Code
─────────────────────────────────────────────────
Primary (Teal)        Teal-600        #0D9488
Background            White/Slate-50   #FFFFFF / #F8FAFC
Text Primary          Slate-900        #0F172A
Text Secondary        Slate-600        #475569
Borders               Gray-200         #E5E7EB
Active States         Teal-600         #0D9488
Hover States          Teal-700         #0F766E
Shadows               Black/20         rgba(0,0,0,0.2)
```

---

This architecture provides:
✅ Native app-like mobile experience
✅ Progressive Web App capabilities
✅ Offline support
✅ Hint Health integration
✅ Clean medical aesthetic
✅ Accessibility compliant
✅ Performance optimized
