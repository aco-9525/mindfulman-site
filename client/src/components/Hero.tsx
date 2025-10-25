interface HeroProps {
  title: string;
  subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl opacity-95">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
