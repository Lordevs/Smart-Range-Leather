import { TextWithImageSection } from "@/components/common/text-with-image-section";

export function ApproachSection() {
    return (
        <TextWithImageSection
            tag="Our Approach"
            title={
                <>
                    <span className="text-[#6C3403]">Vertically Integrated </span> <br />
                    Excellence
                </>
            }
            description={[
                "Our vertically integrated production system gives us complete control over every stage of manufacturing. From carefully selecting premium hides to the final stitch, we oversee each detail to ensure uncompromising quality.",
                "This integrated approach allows us to maintain consistent standards, respond quickly to client needs, and deliver products that exceed expectations in craftsmanship, durability, and aesthetic appeal.",
            ]}
            buttonText="Request a Quote"
            imageSrc="/images/sections/approach-section.png"
            imageAlt="Approach Section"
            accentColor="#6C3403"
            circleColor="#ffcc80"
        />
    );
}
