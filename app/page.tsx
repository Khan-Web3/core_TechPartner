// Core Tech Partner site file
import HomeSection from "@/views/sections/homeSection";
import WhyChooseUsSection from "@/views/sections/whyChooseUsSection";
import SubHomeSection from "@/views/sections/subHomeSection";
import ProcessSection from "@/views/sections/teamSection";
import ProjectsSection from "@/views/sections/projectsSection";
import StatsSection from "@/views/sections/testimonialSection";
import BlogsSection from "@/views/sections/blogsSection";
import ContactSection from "@/views/sections/contactSection";

export default function Home() {
  return (
    <>
      {/* 1. Hook: who we are in one line */}
      <HomeSection />
      {/* 2. What we do */}
      <WhyChooseUsSection />
      {/* 3. Who we are */}
      <SubHomeSection />
      {/* 4. How we work */}
      <ProcessSection />
      {/* 5. Proof: selected work */}
      <ProjectsSection />

      {/* 6. Numbers that back it up */}
      <StatsSection />
      {/* 7. Insights */}
      <BlogsSection />
      {/* 8. Final call to action */}

      <ContactSection />
    </>
  );
}
