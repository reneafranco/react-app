import Image from "next/image";
import { InfiniteSlider } from "./InfinityAnimation";

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse>
      <Image
        src="/assets/icons/spring-icon.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/python.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/java.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/docker-icon.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/postgresql.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/git-icon.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/archlinux.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/aws.svg"
        alt="Dean Blunt - Black Metal 2"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
    </InfiniteSlider>
  );
}
