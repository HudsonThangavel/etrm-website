# End Time Revival Mission — Next.js Web Application

A full-fidelity, production-grade recreation of the official [End Time Revival Mission](https://etrmturicorin.com/) web platform. Built with modern web standards, Next.js App Router, TypeScript, Tailwind CSS, Motion animations, and Lucide icons.

---

## 🌟 Key Features

1. **Brand & Visual Identity**:
   - Exact recreation of End Time Revival Mission' visual language, color tokens (`#0B132B`, `#1C2541`, `#E63946`, `#D4AF37`), typography hierarchy, and faith motifs.
   - Distinctive Zechariah 4:6 scripture strip and sticky multi-tier header with smooth backdrop blur.
   - High-fidelity imagery representing worship crusades, Founder Bishop. Dr. J. Sam Selvaraj, and the ~2,500 seat Tabernacle architectural project.

2. **Complete Ministry Architecture**:
   - Dynamic App Router ministry pages for all 8 core divisions:
     - **01 Church**: Spirit-filled worship & fellowship schedules.
     - **02 Media**: Ruah Television & social streaming channels.
     - **03 Nessa**: Compassion and community relief outreach.
     - **04 Prayer Tower**: 24/7 continuous intercession altar.
     - **05 Freedom**: Deliverance conventions and mass revivals.
     - **06 Bible College**: International theological training.
     - **07 Mission**: Reaching North India with indigenous church plants.
     - **08 24×7 Prayer Helpline**: Lifeline for round-the-clock telephone prayer.

3. **Ruah TV & Rhema Word Hub**:
   - Daily bilingual Rhema Word declarations (Tamil & English) with scripture citations.
   - Latest Pulpit Sermon gallery with duration badges and video preview launcher.
   - "KARTHAR UYARTHIDUVAAR!" prophetic song release showcase with video modal.

4. **Multi-Channel Giving Engine (`/give`)**:
   - **Razorpay (India)**: Instant credit/debit card, netbanking, and wallet support.
   - **Scan & Give (UPI)**: Interactive QR code display with one-click UPI ID copying.
   - **PayPal (International)**: Multi-currency support (USD, EUR, GBP, AUD, CAD) with automatic exchange conversion.
   - **Direct Bank Accounts**: HDFC Bank (Domestic) and ICICI Bank (International Wire with SWIFT) with clipboard copy helpers.

5. **24×7 Pastoral Care & Contact (`/contact`)**:
   - Interactive Prayer Request submission form with real-time feedback.
   - Direct-dial mobile and landline helplines (`+91 98849 01777`, `044-22320122`).
   - Detailed physical centers and service times across Vadapalani, Porur, and St. Thomas Mount.

6. **Technical SEO & Performance**:
   - Next.js Metadata API with OpenGraph cards and Twitter summary tags.
   - Dynamic `sitemap.ts` and `robots.ts` generation.
   - Fully accessible semantic HTML structure (WCAG 2.1 AA compliant).
   - Responsive breakpoints from small mobile phones (320px) to ultra-wide displays.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20.x
- npm 9+ or pnpm / yarn

### Installation
```bash
# Unzip the codebase
unzip ruah-ministries-nextjs.zip
cd ruah-ministries

# Install dependencies
npm install
```

### Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### Running Locally
```bash
# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📁 Project Architecture

```
etrm-mission/
├── app/
│   ├── about/
│   │   └── page.tsx           # About Us, Leadership & Statement of Faith
│   ├── contact/
│   │   └── page.tsx           # Prayer request form, helplines & locations
│   ├── give/
│   │   └── page.tsx           # Multi-channel giving & bank transfers
│   ├── ministries/
│   │   ├── [slug]/
│   │   │   └── page.tsx       # Dynamic deep-dive for each ministry
│   │   └── page.tsx           # Ministries directory overview
│   ├── globals.css            # Tailwind directives and utility classes
│   ├── layout.tsx             # Root layout, metadata & shell
│   ├── not-found.tsx          # Custom 404 error page
│   ├── page.tsx               # Homepage with 7 rich sections
│   ├── robots.ts              # Search engine crawler directives
│   └── sitemap.ts             # XML sitemap generator
├── components/
│   ├── layout/
│   │   ├── Footer.tsx         # Comprehensive footer with quick links
│   │   ├── HelplineBanner.tsx # Persistent 24/7 call CTA strip
│   │   └── Navbar.tsx         # Sticky responsive header with flyout
│   └── sections/
│       ├── AboutOverview.tsx  # Statistical highlights and founder intro
│       ├── HeroSection.tsx    # Impactful hero with image mosaic & leader badge
│       ├── MinistriesSection.tsx # 8 interactive ministry cards
│       ├── PillarsSection.tsx # Vision, Mission, Values, Faith pillars
│       ├── RuahTvSection.tsx  # Daily Rhema Word & sermons
│       ├── SongReleaseSection.tsx # New song spotlight & video modal
│       └── TabernacleSection.tsx # 2,500-seat building expansion project
├── lib/
│   └── constants.ts           # Centralized structured data & constants
├── public/
│   └── images/                # Optimized photographic & architectural assets
├── types/
│   └── index.ts               # Strict TypeScript interfaces
├── next.config.js             # Image optimization & compilation config
├── tailwind.config.ts         # Custom palette, shadows & fonts
└── tsconfig.json              # Strict TypeScript compiler options
```

---

## 🎨 Design Tokens

- **Navy Primary**: `#0B132B`
- **Dark Indigo**: `#1C2541`
- **Royal Blue**: `#1F3A60`
- **Crimson Red**: `#E63946`
- **Warm Gold**: `#D4AF37`
- **Gold Tint**: `#F3E5AB`
- **Off-White Sand**: `#F8F9FA`
- **Text Body**: `#1C2541`
- **Muted Subtext**: `#6C757D`

---

## 📜 License
Original code implementation created for End Time Revival Mission recreation.
