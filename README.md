# Project Insanity - K.H. Strategy

[ [繁體中文](README.zh-TW.md) ]

> **Last Updated:** December 8, 2025

**Project Insanity** is an advanced Single Page Application (SPA) portfolio website designed to demonstrate the fusion of Software Engineering discipline with Business Strategy insights. 

Unlike traditional portfolios that use a static template for all case studies, this project features a **Dynamic Layout Engine**. This engine architecturally rearranges the user interface and content presentation in real-time to match the specific mental model of the selected industry or project type (e.g., a "Visual Designer" profile looks like a creative agency site, while a "SaaS" profile looks like a software landing page).

## 🚀 Key Features

*   **Dynamic Layout Engine**: Instantly switches React components and CSS frameworks based on the selected content category.
*   **Multi-Industry Simulation**: Supports 5 distinct categories with 5 unique sub-themes each (25 total variations):
    *   **Portfolio**: Personal branding (Visual, Engineering, Photography).
    *   **E-Commerce**: Retail layouts (Fashion, Tech, Food, Subscription).
    *   **Corporate**: B2B & Service layouts (Law, Manufacturing, Medical).
    *   **Content/News**: Editorial layouts (Magazines, Recipes, Travel).
    *   **Software/SaaS**: Conversion-focused layouts (Freemium, Enterprise, Mobile App).
*   **Bilingual Support (i18n)**: Full support for English and Traditional Chinese (TW), managed via a custom React hook.
*   **Dark Mode**: System-aware dark mode with manual toggle, fully integrated with Tailwind CSS.
*   **Atomic Design System**: Organized component architecture for scalability:
    *   **Atoms**: Basic building blocks (Buttons, Inputs, Badges).
    *   **Molecules**: Functional groups (Cards, Selectors, Menus).
    *   **Organisms**: Complex UI sections (Headers, Theme Explorer Headers).
    *   **Layouts**: Full-page conceptual templates.

## 🛠 Technology Stack

*   **Frontend**: React 19, TypeScript
*   **Styling**: Tailwind CSS (Runtime/CDN for speed, Configurable)
*   **Routing**: React Router DOM v6
*   **Build Tool**: Vite
*   **Icons**: Heroicons / Custom SVG

## 📂 Project Structure

```
src/
├── components/
│   ├── atoms/          # Smallest units (Button, Badge, Input, ScrollToTopButton)
│   ├── molecules/      # Compound components (PortfolioCard, FeatureCard, ExplorerSelectors)
│   ├── organisms/      # Complex sections (ThemeExplorerHeader)
│   ├── layouts/        # Industry-specific page templates (The "Engines")
│   └── utilities/      # Renderer logic (PortfolioLayoutRenderer)
├── core/
│   ├── data/           # JSON/TS configuration for themes and translations
│   ├── hooks/          # Custom hooks (useThemeSwitcher, useLanguage, useDarkMode)
│   └── types/          # TypeScript interfaces (ISubThemeDetail, IContentFocus)
├── sections/           # Landing page specific sections (Hero, About, Contact)
└── pages/              # Route views (ThemeExplorer)
```

## 🧠 The "Project Insanity" Engine

The core logic resides in `src/components/utilities/PortfolioLayoutRenderer.tsx` and `src/core/hooks/useThemeSwitcher.ts`.

1.  **Data Definition**: Themes are defined in `src/core/data/*.ts`. Each theme object contains:
    *   `id`: Unique identifier.
    *   `layoutComponent`: A string string referencing a specific React component (e.g., `'WaterfallGridLayout'`).
    *   `contentFocus`: Configuration object controlling feature flags (e.g., `displayCodeBlocks`, `showPlanComparison`).
2.  **State Management**: `useThemeSwitcher` manages the active category and sub-theme state using URL slugs and internal state.
3.  **Rendering**: `PortfolioLayoutRenderer` receives the active theme object, maps the `layoutComponent` string to the actual import, and renders it with the specific data.

### Example Data Structure

```typescript
{
    "id": "SoftwareEngineer",
    "layoutComponent": "StandardDividedLayout", // Maps to <StandardDividedLayout />
    "contentFocus": {
        "title": "Technical Projects",
        "displayCodeBlocks": true, // Toggles code snippets in the layout
        "metadataPriority": ["Stack", "Solution"]
    }
}
```

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/project-insanity.git
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🎨 Adding a New Layout

1.  Create a new component in `src/components/layouts/MyNewLayout.tsx`.
2.  Define the interface `interface LayoutProps { theme: ISubThemeDetail; }`.
3.  Import the component in `src/components/utilities/PortfolioLayoutRenderer.tsx`.
4.  Add a case to the switch statement:
    ```typescript
    case 'MyNewLayout': return MyNewLayout;
    ```
5.  Add a new theme entry in `src/core/data/*.ts` referencing `'MyNewLayout'`.

## 📄 License

The source code for this project is available under the [MIT License](LICENSE).

The content, design, and creative assets are licensed under a [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nc-nd/4.0/) (CC BY-NC-ND 4.0).