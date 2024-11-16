import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { CertificationsDemo } from "./ui/Certifications";
import { InfiniteSliderHoverSpeed } from "./InfitiSlidingSkills";

export function BentoGridSecondDemo() {
  return (
    <main>
      <div className="pt-20">
        <h1 className="heading text-white">
          Background <span className="text-purple"> & Education</span>
        </h1>
      </div>
      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[28rem] py-20">
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
    [mask-image:radial-gradient(ellipse_at_center,black,black)]  border border-white/[0.2] bg-black"
  ></div>
);
const SkeletonTwo = () => (
  <div
    className="flex flex-1 w-full h-full rounded-xl  bg-dot-white/[0.2]
    [mask-image:radial-gradient(ellipse_at_center,black,black)]  border border-white/[0.2] bg-black"
  >
    {" "}
    <CertificationsDemo />
  </div>
);

const SkeletonThree = () => (
  <div
    className="flex flex-1 w-full h-full rounded-xl  bg-dot-white/[0.2]
    [mask-image:radial-gradient(ellipse_at_center,black,black)]  border border-white/[0.2] bg-black"
  >
    {" "}
    <InfiniteSliderHoverSpeed />
  </div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: <SkeletonTwo />,
    className: "md:col-span-2",
  },
];
