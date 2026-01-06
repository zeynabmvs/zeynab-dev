import Link from "next/link";
import { headerLinks } from "@/app/lib/data";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Navigation() {
  return (
    <div className="flex justify-end items-center gap-4">
      <nav>
        <ul className="text-sm flex flex-wrap gap-x-2 border border-zinc-200 dark:border-zinc-700 px-4 rounded-full card-shadow">
          {headerLinks.map((link) => (
            <li key={link.href}>
              {link.target === "_blank" ? (
                <a
                  href={link.href}
                  className="block text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors font-medium py-2 px-2"
                  target={link.target}
                  rel={link.rel}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="block text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors font-medium py-2 px-2"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  );
}
