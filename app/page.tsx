import HomeSection from "@/views/sections/homeSection";
import SubHomeSection from "@/views/sections/subHomeSection";
import WhyChooseUsSection from "@/views/sections/whyChooseUsSection";
import ProjectsSection from "@/views/sections/projectsSection";
import TeamSection from "@/views/sections/teamSection";
import TestimonialSection from "@/views/sections/testimonialSection";
import ContactSection from "@/views/sections/contactSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <SubHomeSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      {/* <TeamSection /> */}
      {/* <TestimonialSection /> */}
      <ContactSection />
    </>
  );
}
