import Button from "@/components/Button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
}

export default function HeroSection({
  title = "Título principal do negócio",
  subtitle = "Uma frase curta que descreve o valor que você entrega para o seu cliente. Direto ao ponto.",
  ctaPrimaryLabel = "Fale conosco",
  ctaPrimaryHref = "#contato",
  ctaSecondaryLabel = "Saiba mais",
  ctaSecondaryHref = "#sobre",
}: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="w-full bg-gradient-to-br from-brand-light to-white py-20 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={ctaPrimaryHref} size="lg">
            {ctaPrimaryLabel}
          </Button>
          <Button href={ctaSecondaryHref} variant="outline" size="lg">
            {ctaSecondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
