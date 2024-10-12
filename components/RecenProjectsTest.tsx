"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3DCard";
import Link from "next/link";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjectsTest = () => {
  return (
    <section>
      <div className="pt-20 " id="projects">
        <h1 className="heading text-white">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
          {projects.map((project) => (
            <CardContainer className="inter-var rounded-3xl " key={project.id}>
              <CardBody
                className="bg-black-100 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1]
                    border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-3xl p-3 border "
              >
                <CardItem translateZ="100" className="w-full mt-3">
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
                  className="text-2xl font-bold text-white mt-4"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-lg max-w-sm mt-2 text-white/60"
                >
                  {project.des}
                </CardItem>
                <div className="flex justify-between items-center mt-9">
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
                  {/* <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.link}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                        Try now →
                        </CardItem> */}
                  {/* Fav icon live site  */}
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="__blank"
                    className="flex items-center py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow
                      className="ms-3"
                      color="#CBACF9"
                      size={24}
                    />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjectsTest;
