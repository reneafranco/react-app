"use client";

import React from "react";
import MagicButton from "@/components/ui/MagicButton";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";
import LogoLoop from "@/components/LogoLoop";
import ElectricBorder from "./ElectricBorder";
import Image from "next/image";

const About = () => {
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

  return (
    <section className="h-full w-full" id="about">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-12">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none mb-8">
            <span className="text-xl text-white/65">Software Developer</span>
            <h1 className="h1 mb-6 text-white">
              Hello I&apos;m <br />{" "}
              <span className="text-purple">Rene Franco</span>
            </h1>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mb-8">
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
            <ElectricBorder
              color="#b276e6"
              speed={1}
              chaos={0.17}
              borderRadius={16}
              style={{ borderRadius: 16 }}
            >
              <div className="w-[270px] xl:w-[340px] relative overflow-hidden rounded-2xl">
                {/* Photo */}
                <div className="w-full h-[360px] xl:h-[450px] relative overflow-hidden">
                  <Image
                    src="/assets/image-okok.png"
                    priority
                    quality={100}
                    fill
                    alt="Rene Franco"
                    sizes="(max-width: 768px) 270px, 340px"
                    className="object-cover"
                  />
                </div>
              </div>
            </ElectricBorder>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Stats />
      </div>
        {/* Logo Loop */}
        <div className="w-full mt-8">
          <LogoLoop
            logos={[
              { src: "/assets/typeScript.svg", alt: "TypeScript" },
              { src: "/assets/react.svg", alt: "React" },
              { src: "/assets/java.svg", alt: "Java" },
              { src: "/assets/spring.svg", alt: "Spring Boot" },
              { src: "/assets/python.svg", alt: "Python" },
              { src: "/assets/lua.svg", alt: "Lua" },
              { src: "/assets/postgresql.svg", alt: "PostgreSQL" },
              { src: "/assets/docker.svg", alt: "Docker" },
              { src: "/assets/arch.svg", alt: "Linux" },
              { src: "/assets/aws.svg", alt: "AWS" }
            ]}
            speed={200}
            direction="left"
            pauseOnHover
            logoHeight={96}
            gap={80}
          />
        </div>
    </section>
  );
};


export default About;
