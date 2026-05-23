import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import LiquidEther from "./LiquidEther";

const Hero = () => {
  return (
    <div className="h-screen w-full pb-20 pt-36">
      {/**
       *  UI: Spotlights removed
       */}
      <div>
      </div>

      {/**
       *  UI: LineWaves Background
       */}
      <div
        className="h-screen w-full absolute top-0 left-0 flex items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]"
      >
        <div className="absolute inset-0 w-full h-full">
          <LiquidEther
            mouseForce={25}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            colors={["#5227FF","#FF9FFC","#B497CF"]}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={3.3}
            isBounce={false}
            resolution={0.5}
          />
        </div>
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Ideas into Software Reality"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className=" text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I m a Software Engineer based in United States.
          </p>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

<div className="h-full w-full dark:bg-black-100 bg-white  
      dark:bg-dot-white/[0.3] bg-dot-black/[0.2]  
      flex items-center justify-center absolute top-0 left-0">
  {/* Radial gradient for the container to give a faded look */}
  <div className="absolute pointer-events-none inset-0 flex items-center 
          justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
</div>
