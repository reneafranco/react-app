"use client";

import React from "react";
import MagicButton from "@/components/ui/MagicButton";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";
import { AnimatedTooltip } from "./ui/AnimatedTootip";

const About = () => {
  return (
    <section className="h-full w-full" id="about">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-12 2xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-white/65">Software Developer</span>
            <h1 className="h1 mb-6 text-white">
              Hello I&apos;m <br />{" "}
              <span className="text-purple">Rene Franco</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and am proficient
              in various programming languages and technologies.
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <MagicButton
                title="Download CV"
                icon={<FiDownload className="text-xl" />}
                position="right"
                handleClick={handleDownloadCV}
              />
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-purple rounded-full flex justify-center items-center 
                  text-purple text-base hover:bg-purple hover:text-primary hover:transition-all duration-500
                  xl:mt-9"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 flex justify-center items-center">
            <Photo />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-10 xl:py-20 2xl:py-10">
        <AnimatedTooltip items={people} />
      </div>
      <Stats />
    </section>
  );
};

const people = [
  {
    id: 1,
    name: "TypeScript",
    designation: "Programing Language",
    image: "/assets/typeScript.svg",
  },
  {
    id: 2,
    name: "React",
    designation: "Frontend Library",
    image: "/assets/react.svg",
  },
  {
    id: 3,
    name: "Java",
    designation: "Programing Language",
    image: "/assets/java.svg",
  },
  {
    id: 4,
    name: "Spring Boot",
    designation: "Backend Framework",
    image: "/assets/spring.svg",
  },
  {
    id: 5,
    name: "Python",
    designation: "Programing Language",
    image: "/assets/python.svg",
  },
  {
    id: 6,
    name: "Lua",
    designation: "Embedded Language",
    image: "/assets/lua.svg",
  },
  {
    id: 7,
    name: "PostgreSQL",
    designation: "RDBMS",
    image: "/assets/postgresql.svg",
  },
  {
    id: 8,
    name: "Docker",
    designation: "DevOps Language",
    image: "/assets/docker.svg",
  },
  {
    id: 9,
    name: "Linux",
    designation: "Operating System",
    image: "/assets/arch.svg",
  },
  {
    id: 10,
    name: "AWS",
    designation: "Hosting Service",
    image: "/assets/aws.svg",
  },
];

const handleDownloadCV = () => {
  // Reemplaza esta URL con la URL real de tu archivo de CV
  const cvUrl = "/assets/Rene-Adonay-SE.pdf";
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Rene_Franco_CV.pdf"; // Nombre del archivo que se descargará
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default About;
