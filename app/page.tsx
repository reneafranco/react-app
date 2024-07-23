import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Image from "next/image";
import  { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5" >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{name: 'Home', link:'/', icon: <FaHome />}]} /> 
        <Hero/>
        <Experience />
        <RecentProjects />
        <Approach />
        <Client />
        <Grid />
      </div>
   </main>
  );
}
