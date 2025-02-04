
import HeroSection  from "../components/heroSection";
import ProjectSection  from "../components/projectsSection";


export default function Home() {
  return (
      <main className="container-fluid">
          <HeroSection />
          <ProjectSection />
      </main>
  );
}
