import Link from "next/link";
import Image from "next/image";

interface VeripathBrandProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function VeripathBrand({ size = "md", className = "", onClick }: VeripathBrandProps) {
  // We map size presets to physical dimensions and responsive tailwind classes.
  // The official logo file is 2048x2048 (1:1 aspect ratio).
  // Because it has transparent padding of ~22-23%, we use slightly larger layout
  // sizes than typical logos to ensure the core emblem/wordmark displays at an
  // equivalent visual size.
  const dims = {
    sm: { width: 56, height: 56, class: "h-14 w-14" },
    md: { width: 72, height: 72, class: "h-18 w-17 md:h-18 md:w-18" },
    lg: { width: 96, height: 80, class: "h-20 w-20 md:h-24 md:w-24" },
  };

  const current = dims[size];

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring rounded-md transition-opacity hover:opacity-90 ${className}`}
      aria-label="Veripath AI — home"
    >
      <Image
        src="/media/veripath-logo.png"
        alt="Veripath AI logo"
        width={current.width}
        height={current.height}
        priority={size !== "lg"}
        className={`${current.class} object-contain`}
      />
    </Link>
  );
}
