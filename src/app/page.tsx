import HeroSection from "@/components/home/HeroSection";
import ProjectSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
      <main className="container-fluid">
          <HeroSection />
          <ProjectSection />
      </main>
  );
}
