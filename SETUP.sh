# 1) Create app
pnpm dlx create-next-app@latest aeropulse --ts --eslint --tailwind --app --src-dir=false --import-alias "@/*"
cd aeropulse

# 2) Replace project with this codebase (copy files over). Then install deps:
pnpm add next@14.2.10 react@18.3.1 react-dom@18.3.1 tailwindcss postcss autoprefixer @next/mdx@15.0.0-canary.8 \
clsx tailwind-merge class-variance-authority lucide-react framer-motion recharts react-hook-form zod sonner zustand \
gray-matter next-mdx-remote @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-dropdown-menu \
@radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-separator @radix-ui/react-switch \
@radix-ui/react-tabs @radix-ui/react-tooltip

pnpm add -D typescript @types/node @types/react @types/react-dom eslint-config-next

# 3) (Optional) Initialize shadcn (components.json already included)
# pnpm dlx shadcn-ui@latest init -y

# 4) Dev
pnpm dev

# 5) Build & Start
pnpm build && pnpm start
