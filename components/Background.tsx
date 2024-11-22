import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { IconSignature } from "@tabler/icons-react";
import { CertificationsDemo } from "./ui/Certifications";
import { InfiniteSliderHoverSpeed } from "./InfitiSlidingSkills";
import { InfiniteSliderBasic } from "./ui/InfinitiSliderBasic";
import Image from "next/image";
import { GlobeDemo } from "./ui/GlobeGrid";

export function BentoGridSecondDemo() {
  return (
    <main>
      <div className="pt-20">
        <h1 className="heading text-white">
          Background <span className="text-purple"> & Education</span>
        </h1>
      </div>
      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[29rem] py-20">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </main>
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-dot-white/[0.2]
    [mask-image:radial-gradient(ellipse_at_center,black,black)]  border border-white/[0.2] bg-black-200"
  ></div>
);

const SkeletonGlove = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-dot-white/[0.2]
    [mask-image:radial-gradient(ellipse_at_center,black,black)]  border border-white/[0.2] bg-black-200"
  >
    <GlobeDemo />
  </div>
);
const SkeletonTwo = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   bg-dot-white/[0.2]
    [mask-image:radial-gradient(ellipse_at_center,black,black)]  border border-white/[0.2] bg-black-200"
  >
    {" "}
    <CertificationsDemo />
  </div>
);

const SkeletonThree = () => (
  <div
    className="rounded-xl  bg-dot-white/[0.2]
    [mask-image:radial-gradient(ellipse_at_center,black,black)]  border border-white/[0.2] bg-black-200"
  >
    {" "}
    <div>
      {" "}
      <InfiniteSliderHoverSpeed />
    </div>
    <div className="pt-16">
      <InfiniteSliderBasic />
    </div>
  </div>
);

const SkeletonFive = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2]
    [mask-image:radial-gradient(ellipse_at_center,black,black)] border border-white/[0.2] t bg-black-200"
  >
    <Image
      src="/assets/test.png"
      alt="Descripción de la imagen"
      width={500}
      height={500}
      className="rounded-xl object-cover w-full object-top  "
    />
  </div>
);
const items = [
  {
    title: "B.S. in Software Engineering",
    description: "Western Governors University - United States",
    header: <SkeletonFive />,
    className: "md:col-span-2 text-3xl",
  },
  {
    title: "Software Skills",
    description: "Dive into the transformative power of technology.",
    header: <SkeletonThree />,
    className: "md:col-span-1 text-2xl",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <SkeletonGlove />,
    className: "md:col-span-1 ",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: <SkeletonTwo />,
    className: "md:col-span-2 text-xl ",
    title: "Certifications",
  },
];
