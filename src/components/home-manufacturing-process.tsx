import {
  ManufacturingProcess,
  ProcessStep,
} from "./common/manufacturing-process";

const steps: ProcessStep[] = [
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

export function HomeManufacturingProcess() {
  return (
    <ManufacturingProcess
      tag="PROCESS"
      title={
        <>
          Our <span className="text-accent-foreground">Manufacturing</span>{" "}
          Process
        </>
      }
      steps={steps}
    />
  );
}
