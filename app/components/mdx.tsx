import { ReactNode } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return <section className={`space-y-4 ${className}`}>{children}</section>;
}

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

export function Header({ children, className = "" }: HeaderProps) {
  return <h2 className={`text-2xl font-semibold ${className}`}>{children}</h2>;
}

interface ProjectLinksProps {
  githubRepo?: string;
  liveSite?: string;
}

export function ProjectLinks({
  githubRepo = "",
  liveSite = "",
}: ProjectLinksProps) {
  if (!githubRepo && !liveSite) return null;

  return (
    <div className="flex flex-wrap gap-4 pt-4 ">
      {liveSite && (
        <a
          href={liveSite}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium px-8 py-2 rounded-full bg-primary text-white hover:bg-primary/90"
        >
          View Live Site <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        </a>
      )}

      {githubRepo && (
        <a
          href={githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium px-8 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 hover:dark:bg-zinc-900"
        >
          View Source <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

function CustomH1({ children }: { children: ReactNode }) {
  return <h1 className="text-4xl font-bold">{children}</h1>;
}
function CustomP({ children }: { children: ReactNode }) {
  return <p className="text-muted dark:text-muted-dark">{children}</p>;
}
function CustomUl({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc list-inside space-y-2 text-muted dark:text-muted-dark">{children}</ul>
  );
}

export const overrideComponents = {
  h1: CustomH1,
  p: CustomP,
  ul: CustomUl,
};
