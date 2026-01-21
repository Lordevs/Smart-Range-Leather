import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const DEFAULT_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We discuss your requirements, design preferences, and production timelines.",
  },
  {
    number: "02",
    title: "Quote & Agreement",
    description: "Receive a detailed quote with pricing, MOQs, and lead times.",
  },
  {
    number: "03",
    title: "Design & Pattern Making",
    description:
      "Our expert team develops patterns based on your specifications.",
  },
  {
    number: "04",
    title: "Sampling",
    description:
      "We create samples for your approval with necessary adjustments.",
  },
  {
    number: "05",
    title: "Material Sourcing",
    description:
      "We source premium leather according to your quality standards.",
  },
  {
    number: "06",
    title: "Production",
    description:
      "Full-scale manufacturing begins with rigorous quality control.",
  },
  {
    number: "07",
    title: "Quality Inspection",
    description: "Every piece undergoes thorough inspection before packing.",
  },
  {
    number: "08",
    title: "Delivery & Logistics",
    description: "We handle global shipping to ensure on-time delivery.",
  },
];

interface ManufacturingProcessProps {
  badge?: string;
  title?: React.ReactNode;
  steps?: ProcessStep[];
  className?: string;
}

export function ManufacturingProcess({
  badge = "PROCESS",
  title = (
    <>
      Our <span className="text-accent-foreground">Manufacturing</span> Process
    </>
  ),
  steps = DEFAULT_STEPS,
  className,
}: ManufacturingProcessProps) {
  return (
    <section className={cn("w-full py-24", className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <p className="border-b-accent-foreground inline-block border-b px-4 pb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#B8641A]/50 mb-8">
            {badge}
          </p>
          <h2 className="font-serif text-5xl leading-[1.1] text-foreground md:text-6xl lg:text-7xl mx-auto max-w-5xl">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-transparent border-none shadow-none p-0">
              <span className="text-6xl md:text-7xl font-serif text-primary/30 block mb-8 font-light">
                {step.number}
              </span>
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-bold text-foreground leading-snug tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-[14px] leading-relaxed font-medium opacity-80 max-w-[260px]">
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
