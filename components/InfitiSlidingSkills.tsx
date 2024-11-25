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
      <img
        src="/assets/icons/javascript.svg"
        alt="Lana Del Rey - Ultraviolence"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="/assets/icons/nextjs-icon.svg"
        alt="A$AP Rocky - Tailor Swif"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="/assets/icons/tailwindcss-icon.svg"
        alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
        className="aspect-square w-[120px] rounded-[4px]"
      />
    </InfiniteSlider>
  );
}
