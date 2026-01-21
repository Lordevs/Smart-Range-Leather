import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ManufacturingProcessProps {
  tag?: string;
  title: React.ReactNode;
  steps: ProcessStep[];
  className?: string;
}

export function ManufacturingProcess({
  tag,
  title,
  steps = [],
  className,
}: ManufacturingProcessProps) {
  return (
    <section className={cn("w-full py-24", className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24 space-y-6">
          {tag && (
            <div className="inline-block border-b border-[#6C3403] pb-1">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C3403]">
                {tag}
              </span>
            </div>
          )}
          <h2 className="font-serif text-5xl leading-[1.1] text-foreground md:text-6xl lg:text-7xl mx-auto max-w-5xl">
            {title}
          </h2>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-transparent border-none shadow-none p-0 max-w-xs">
              <span className="text-6xl md:text-6xl font-serif text-[#B8641A]/40 block font-light">
                {step.number}
              </span>
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl max-w-50 font-medium text-foreground leading-snug tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-[14px] leading-relaxed font-medium opacity-80">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
