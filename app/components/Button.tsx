type ButtonProps = { label: string; href: string };
const Button: React.FC<ButtonProps> = ({ label, href }) => (
  <a
    href={href}
    target="_blank"
    className="
      inline-flex items-center justify-center w-full
      rounded-full
      text-sm font-semibold
      bg-primary text-white
      hover:bg-primary/90 focus:ring-2 focus:ring-primary/20 focus:outline-none
      px-4 py-2
      transition-colors duration-200
    "
  >
    {label}
  </a>
);

export default Button;
