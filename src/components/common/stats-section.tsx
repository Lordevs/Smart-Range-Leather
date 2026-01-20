import { TrendingUp, Package, Clock, BookOpen } from "lucide-react";

const stats = [
    {
        icon: TrendingUp,
        value: "20+",
        label: "Years in Leather Manufacturing",
    },
    {
        icon: Package,
        value: "100,000+",
        label: "Items Produced Annually",
    },
    {
        icon: Clock,
        value: "98%",
        label: "On-Time Delivery Rate",
    },
    {
        icon: BookOpen,
        value: "500+",
        label: "Designs Available In-House",
    },
];

export function StatsSection() {
    return (
        <div className="w-full px-4 py-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 rounded-[2.5rem] bg-foreground p-12 md:grid-cols-2 lg:grid-cols-4 lg:p-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:scale-105"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <stat.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-5xl font-normal tracking-tight text-white md:text-6xl">
                                    {stat.value}
                                </h3>
                                <p className="text-sm font-medium text-white leading-relaxed mx-auto">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
