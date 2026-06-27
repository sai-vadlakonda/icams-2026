import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  target?: string;
}

const VARIANT_CLASS: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

/**
 * Universal CTA button. Renders as a router Link, an anchor, or a button
 * depending on which props are supplied.
 */
export function Button({ children, to, href, onClick, variant = 'primary', className, icon, target }: ButtonProps) {
  const classes = cn(VARIANT_CLASS[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} type="button">
      {children}
      {icon}
    </button>
  );
}
