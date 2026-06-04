import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Hero from "@/components/Hero";
import RecenProjectsTest from "@/components/RecenProjectsTest";
import { BentoGridSecondDemo } from "@/components/Background";
import LaserFlow from "@/components/LaserFlow";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center
    items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Experience />
        <BentoGridSecondDemo />
        <RecenProjectsTest />
        <Client />
        <Footer />
      </div>
    </main>
  );
}
