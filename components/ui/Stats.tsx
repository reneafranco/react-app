// components/ui/Stats.tsx

"use client"; // Esto asegura que el componente es un Componente de Cliente

import { useEffect, useState } from "react";
import CountUp from "react-countup";

type StatsData = {
  projectsCompleted: number;
  codeCommits: number;
  yearsOfExperience: number;
  technologiesMastered: number;
};

const Stats = () => {
  const [stats, setStats] = useState<StatsData>({
    projectsCompleted: 26, // Datos estáticos
    codeCommits: 0,
    yearsOfExperience: 12, // Datos estáticos
    technologiesMastered: 8, // Datos estáticos
  });

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        console.log("Fetching commits...");
        const response = await fetch("/api/github-commits");
        const data = await response.json();
        console.log("Fetched data:", data);
        setStats(prevStats => ({
          ...prevStats,
          codeCommits: data.codeCommits,
        }));
      } catch (error) {
        console.error("Error fetching commits:", error);
      }
    };

    fetchCommits();
  }, []);

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
            <CountUp
              end={stats.yearsOfExperience}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p className="max-w-[100px] leading-snug text-white/80">Years of experience</p>
          </div>
          <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
            <CountUp
              end={stats.projectsCompleted}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p className="max-w-[100px] leading-snug text-white/80">Projects completed</p>
          </div>
          <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
            <CountUp
              end={stats.technologiesMastered}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p className="max-w-[100px] leading-snug text-white/80">Technologies mastered</p>
          </div>
          <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
            <CountUp
              end={stats.codeCommits}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p className="max-w-[100px] leading-snug text-white/80">Code commits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

