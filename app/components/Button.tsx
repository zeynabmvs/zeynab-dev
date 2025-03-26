
// Button Component
type ButtonProps = { label: string; href: string };
const Button: React.FC<ButtonProps> = ({ label, href }) => (
  <a
    href={href}
    target="_blank"
    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full font-semibold"
  >
    {label}
  </a>
);

export default Button;