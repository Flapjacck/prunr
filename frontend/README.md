# Prunr Frontend

```text
Standard Frontend Structure

/
├── node_modules/
├── public/
│   └── …                     # Images, fonts, static assets
├── src/
│   ├── assets/               # Images, icons, global CSS
│   ├── components/           # Reusable UI components
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Page-level / route components (or `views/`)
│   ├── utils/                # Helper and utility functions
│   ├── types/                # Global TypeScript types & interfaces
│   ├── App.tsx               # Root application component
│   ├── index.tsx             # Application entry point
│   └── styles.css            # Global styles (or `styles/`)
├── .gitignore
├── package.json
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
