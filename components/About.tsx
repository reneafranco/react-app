import React from 'react'
import MagicButton from "@/components/ui/MagicButton";
import { FiDownload } from 'react-icons/fi';
import Social from "@/components/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const About = () => {
  return (
    <section  className="h-full w-full " id="about">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-purple">Rene Franco</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and am proficient in 
              various programming languages and technologies.
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <MagicButton 
                title="Download CV"
                icon={<FiDownload className="text-xl" />}
                position="right"
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
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default About

