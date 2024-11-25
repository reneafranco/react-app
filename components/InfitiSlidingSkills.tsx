import Image from "next/image";
import { InfiniteSlider } from "./ui/InfinityAnimation";

export function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider durationOnHover={75} gap={24}>
      <Image
        src="/assets/icons/react.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/typescript-icon.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/angular-icon.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/javascript.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/nextjs-icon.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/tailwindcss-icon.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
    </InfiniteSlider>
  );
}
