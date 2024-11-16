import React from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ className }) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 opacity-5"></div>
    </div>
  );
};

export default Card;
