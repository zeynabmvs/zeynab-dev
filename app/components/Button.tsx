import React from "react";

type ButtonProps = { label: string; href: string };
const Button: React.FC<ButtonProps> = ({ label, href }) => (
  <a
    href={href}
    target="_blank"
    role="button"
    className="relative overflow-hidden shiny-hover-btn
      inline-flex items-center justify-center w-full
      rounded-full
      text-sm font-semibold
      bg-primary text-white
      dark:bg-primary-dark dark:text-zinc-950
      hover:bg-primary/90 hover:dark:bg-primary-dark/90
      px-4 py-2
      transition-colors
    "
  >
    {label}
  </a>
);

export default Button;
