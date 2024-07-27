import React from 'react'
import MagicButton from "@/components/ui/MagicButton";
import { FiDownload } from 'react-icons/fi';
import Social from "@/components/Social";
import Photo from "@/components/ui/Photo";


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
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9
              border border-purple rounded-full flex 
              justify-center items-center text-purple text-base hover:bg-purple hover:text-primary
              hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        {/* photo*/}
        <div>
        <Photo />
        </div>
      </div>
    </section>
  )
}

export default About
