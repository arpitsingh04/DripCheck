import { cn } from "@/lib/utils";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-0",
        className
      )}
    >
      <div className="flex w-full flex-col items-center gap-4 text-center sm:gap-10">
        <div className="flex flex-col items-center gap-2 px-4 sm:gap-4 mb-2">
          <h2 className="max-w-[820px] text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="text-gradient">{title}</span>
          </h2>
          <p className="text-md max-w-[640px] font-medium text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>

        {/* Row 1 - seamless loop */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group relative flex w-full overflow-hidden py-1 [--gap:1rem] [gap:var(--gap)] [--duration:28s]">
            <div className="flex w-[200%] flex-none flex-row items-center [gap:var(--gap)] animate-marquee-x group-hover:[animation-play-state:paused]">
              {/* Track A */}
              <div className="flex w-1/2 flex-none flex-row items-center justify-around [gap:var(--gap)]">
                {testimonials.map((t, i) => (
                  <TestimonialCard key={`r1-a-${i}`} {...t} />
                ))}
              </div>
              {/* Track B (duplicate) */}
              <div className="flex w-1/2 flex-none flex-row items-center justify-around [gap:var(--gap)]">
                {testimonials.map((t, i) => (
                  <TestimonialCard key={`r1-b-${i}`} {...t} />
                ))}
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>

        {/* Row 2 - seamless loop reverse */}
        <div className="relative -mt-2 flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group relative flex w-full overflow-hidden py-1 [--gap:1rem] [gap:var(--gap)] [--duration:32s]">
            <div className="flex w-[200%] flex-none flex-row items-center [gap:var(--gap)] animate-marquee-x-reverse group-hover:[animation-play-state:paused]">
              {/* Track A */}
              <div className="flex w-1/2 flex-none flex-row items-center justify-around [gap:var(--gap)]">
                {testimonials.map((t, i) => (
                  <TestimonialCard key={`r2-a-${i}`} {...t} />
                ))}
              </div>
              {/* Track B (duplicate) */}
              <div className="flex w-1/2 flex-none flex-row items-center justify-around [gap:var(--gap)]">
                {testimonials.map((t, i) => (
                  <TestimonialCard key={`r2-b-${i}`} {...t} />
                ))}
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
}


