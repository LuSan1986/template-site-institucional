import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "brand";
}

export default function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    brand: "bg-brand text-white",
  };

  return (
    <section
      id={id}
      className={cn("w-full py-16 md:py-24", backgrounds[background], className)}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">{children}</div>
    </section>
  );
}
