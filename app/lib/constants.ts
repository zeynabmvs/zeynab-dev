export interface TechStack {
  id: number;
  label: string;
  icon: string;
}

export interface Language {
  id: string;
  name: string;
  color: string;
  icon: string;
  repo: string;
}

export const techStacks: TechStack[] = [
  { id: 0, label: "HTML", icon: "/tools/html5.svg" },
  { id: 1, label: "CSS", icon: "/tools/css3.svg" },
  { id: 2, label: "JavaScript", icon: "/tools/javascript.svg" },
  { id: 3, label: "TypeScript", icon: "/tools/typescript.svg" },
  { id: 4, label: "React", icon: "/tools/reactjs.svg" },
  { id: 5, label: "Next.js", icon: "/tools/nextjs.svg" },
  { id: 6, label: "React Router DOM", icon: "/tools/react-router.svg" },
  { id: 7, label: "Redux", icon: "/tools/redux.svg" },
  { id: 8, label: "React Query", icon: "/tools/react-query.svg" },
  { id: 9, label: "TailwindCSS", icon: "/tools/tailwindcss.svg" },
  { id: 10, label: "Material UI", icon: "/tools/materialui.svg" },
  { id: 11, label: "Framer Motion", icon: "/tools/framer.svg" },
  { id: 12, label: "Git", icon: "/tools/git.svg" },
  { id: 13, label: "GitHub", icon: "/tools/github-dark.svg" },
  { id: 14, label: "NPM", icon: "/tools/npm.svg" },
  { id: 15, label: "Vite", icon: "/tools/vitejs.svg" },
  { id: 16, label: "Figma", icon: "/tools/figma.svg" },
  { id: 17, label: "Clerk", icon: "/tools/clerk.svg" },
  { id: 18, label: "Convex", icon: "/tools/convex.svg" },
  { id: 19, label: "Vercel", icon: "/tools/vercel-dark.svg" },
  { id: 20, label: "Radix UI", icon: "/tools/radixui.svg" },
  { id: 21, label: "OpenAI", icon: "/tools/openai.svg" },
  { id: 22, label: "Shadcn UI", icon: "/tools/shadcnui.svg" },
  { id: 23, label: "React Hook Form", icon: "/tools/reacthookform.svg" },
  { id: 24, label: "API", icon: "/tools/api.svg" },
  { id: 25, label: "React Router Dom", icon: "/tools/reactrouter.svg" },
  { id: 26, label: "MDX", icon: "/tools/mdx.svg" },
];

export const languages: Language[] = [
  {
    id: "typescript",
    name: "TypeScript",
    color: "#007acc",
    icon: "/tools/typescript.svg",
    repo: "https://github.com/microsoft/TypeScript",
  },
  {
    id: "javascript",
    name: "JavaScript",
    color: "#F7DF1E",
    icon: "/tools/javascript.svg",
    repo: "https://github.com/tc39/ecma262",
  },
  {
    id: "css",
    name: "CSS",
    color: "#800080",
    icon: "/tools/css3.svg",
    repo: "https://github.com/w3c/csswg-drafts",
  },
  {
    id: "html",
    name: "HTML",
    color: "#E34F26",
    icon: "/tools/html5.svg",
    repo: "https://github.com/whatwg/html",
  },
];
