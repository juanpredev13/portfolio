import Image from "next/image";
import Navbar from './layouts/nav';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
          <h1>Welcome to my website</h1>
          {/* El resto de tu contenido */}
      </main>
    </div>
  );
}
