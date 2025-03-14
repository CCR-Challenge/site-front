import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <div>
      <Link href={href} passHref>
        <button type="button">
          {children}
        </button>
      </Link>
    </div>
  );
}
