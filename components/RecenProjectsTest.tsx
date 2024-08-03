"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3DCard";
import Link from "next/link";
import { projects } from "@/data";

const RecentProjectsTest = () => {
  return (
    <section>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
        {projects.map((project) => (
          <CardContainer className="inter-var" key={project.id}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-0">
                <Image
                  src={project.img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600 dark:text-white mt-4"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-lg max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.des}
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <div className="flex space-x-1">
                  {project.iconLists.map((icon, index) => (
                    <CardItem
                      translateZ={20}
                      key={index}
                      as="div"
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <img src={icon} alt={`icon-${index}`} className="p-2" />
                    </CardItem>
                  ))}
                </div>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default RecentProjectsTest;
