import {
  ShoppingBag,
  BookOpen,
  Clock,
  Palette,
  Factory,
  CircleCheck,
  LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const DEFAULT_FEATURES: Feature[] = [
  {
    icon: ShoppingBag,
    title: "Low Minimum Order Quantities",
    description:
      "Flexible production runs designed to support startups, growing brands, and test collections.",
  },
  {
    icon: BookOpen,
    title: "Extensive Design Library",
    description:
      "Hundreds of ready-to-produce patterns and styles to accelerate development.",
  },
  {
    icon: Clock,
    title: "Fast & Reliable Lead Times",
    description:
      "Streamlined manufacturing processes that deliver faster turnaround times.",
  },
  {
    icon: Palette,
    title: "Full Material Customisation",
    description:
      "Source, process, or custom finish any leather type, lining, hardware, or trim.",
  },
  {
    icon: Factory,
    title: "Vertically Integrated",
    description:
      "Greater quality control, cost efficiency, and production transparency.",
  },
  {
    icon: CircleCheck,
    title: "Quality Assurance",
    description:
      "Rigorous inspection processes ensuring the highest standards of craftsmanship.",
  },
];

interface WhyChooseUsProps {
  badge?: string;
  title?: React.ReactNode;
  features?: Feature[];
  className?: string;
}

export function WhyChooseUs({
  badge = "WHY CHOOSE US",
  title = (
    <>
      Why Brands Choose <br />
      <span className="text-accent-foreground">Smart Range Leather</span>
    </>
  ),
  features = DEFAULT_FEATURES,
  className,
}: WhyChooseUsProps) {
  return (
    <section className={cn("w-full py-24 bg-card", className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <p className="border-b-accent-foreground inline-block border-b px-4 pb-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground mb-6">
            {badge}
          </p>
          <h2 className="font-serif text-xl leading-[1.1] text-foreground md:text-5xl lg:text-7xl mx-auto max-w-5xl">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group rounded-[2.5rem] gap-0 border-border/50 bg-background p-10 shadow-[0px_2px_8px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-black/5 hover:shadow-xl">
              <CardHeader className="mb-1 p-0">
                <div className="bg-primary/40 flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-primary/80">
                  <feature.icon
                    className="text-primary-foreground h-6 w-6"
                    strokeWidth={1.5}
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-0">
                <CardTitle className="text-foreground text-2xl font-semibold leading-tight tracking-tight">
                  {feature.title}
                </CardTitle>
                <p className="text-muted-foreground text-[15px] font-medium leading-relaxed opacity-90">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
