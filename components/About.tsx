import React from 'react'
import MagicButton from "@/components/ui/MagicButton";
import { FiDownload } from 'react-icons/fi';
import Social from "@/components/Social";

const About = () => {
  return (
    <section className="h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between
      xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-left">
          <span text-xl>Software Developer</span>
          <h1 className="h1 mb-6">
            Hello I'm <br /> <span className="text-purple">Rene Franco</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80"> excel at crafting elegant digital experiences and I am proficent in 
          various programming languajes and technologies.
          </p>
          {/* btn and social */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <MagicButton 
              title="Download CV"
              icon={<FiDownload className="text-xl"/>}
              position="right"
              />
            <div className="mb-8 xl:mb-0">
              <Social />
            </div>
          </div>
        </div>
        {/* photo*/}
        <div>photo</div>
      </div>
    </section>
  )
}

export default About
