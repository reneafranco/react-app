import Image from "next/image";
import { InfiniteSlider } from "./InfinityAnimation";

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse>
      <Image
        src="/assets/icons/spring-icon.svg"
        alt="Spring-boot - Backend Framework"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/python.svg"
        alt="Python - Programming Language"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/java.svg"
        alt="Java - Programming Language"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/docker-icon.svg"
        alt="Docker - DevOps"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/postgresql.svg"
        alt="PostgreSQL - Database"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/git-icon.svg"
        alt="Git - Version Control System "
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/archlinux.svg"
        alt="ArchLinux - Operating System"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
      <Image
        src="/assets/icons/aws.svg"
        alt="AWS - Cloud Service"
        width={120}
        height={120}
        className="aspect-square rounded-[4px]"
      />{" "}
    </InfiniteSlider>
  );
}
