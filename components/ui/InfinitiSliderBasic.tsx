import { InfiniteSlider } from "./InfinityAnimation";

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse>
      <img
        src="/assets/arch.svg"
        alt="Arch Linux OS"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="/assets/aws.svg"
        alt="Amazon Web Services"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="/assets/spring.svg"
        alt="Spring Boot - Backend Frameork"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="/assets/python.svg"
        alt="Python - Programing Languaje"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="/assets/java.svg"
        alt="Java - Programing Languaje"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="/assets/typeScript.svg"
        alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
        className="aspect-square w-[120px] rounded-[4px]"
      />{" "}
    </InfiniteSlider>
  );
}
