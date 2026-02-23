# Modern Professional Portfolio

## 1. Overview
**Product Name**: Modern Professional Portfolio  
**Vision**: A clean, high-performance, and responsive single-page portfolio designed to showcase a software engineer's professional identity, technical expertise, and project history.  
**Target Audience**: Recruiters, potential clients, and technical collaborators.

## 2. Core Features
### 2.1. Responsive Layout
- **Desktop (≥768px)**: A two-column layout. The left column (40%) is fixed and contains the Bio and Skills cards. The right column (60%) is scrollable and contains Projects, Contact, and Footer.
- **Mobile (<768px)**: A single-column stacked layout (Bio → Skills → Projects → Contact → Footer).

### 2.2. Bio Section (`BioCard`)
- Displays profile image, name, professional title, and a short biography.
- Includes social media links (GitHub, LinkedIn, Email) with hover effects.
- Entrance animations using `motion`.

### 2.3. Technical Arsenal (`SkillsCard`)
- Categorized or tagged list of technical skills.
- Uses a badge-based UI for high scannability.

### 2.4. Project Showcase (`ProjectCard`)
- A grid/list of project cards.
- Each card includes:
    - Project thumbnail image.
    - Title and detailed description.
    - Tech stack tags (monospaced).
    - Links to GitHub repository and live demo.
- Hover effects for image scaling and border highlights.

### 2.5. Interactive Contact Form (`ContactForm`)
- Fields: Name, Email, and Message.
- Real-time validation (via HTML5 attributes).
- Simulated submission with loading spinner and success state feedback.

### 2.6. Navigation & Utility
- Smooth scrolling to sections.
- "Back to Top" button in the footer.
- Dynamic copyright year.

## 3. Technical Specifications
- **Framework**: React 19 (Functional Components, Hooks).
- **Language**: TypeScript (Strict typing for data structures).
- **Styling**: Tailwind CSS v4 (Utility-first, custom theme for Inter and JetBrains Mono fonts).
- **Animations**: `motion` (formerly Framer Motion) for entrance and scroll-reveal effects.
- **Icons**: `lucide-react`.
- **SEO**: `react-helmet-async` for meta tags and document titles.
- **Build Tool**: Vite.

## 4. Design Guidelines
- **Color Palette**: Zinc-based neutrals (`zinc-50` background, `zinc-900` text) for a professional, "Apple-esque" aesthetic.
- **Typography**: 
    - Sans-serif: Inter (UI and body text).
    - Monospace: JetBrains Mono (Technical tags and data).
- **Spacing**: Generous padding (`p-6` to `p-12`) and section gaps (`space-y-24`) to ensure content "breathes".
- **Interactions**: Subtle transitions on buttons and links; glass-morphism effects where applicable.

