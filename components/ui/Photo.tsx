// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const Photo = () => {
//   return (
//     <div className="w-full h-full relative">
//       <motion.div
//         // initial={{ opacity: 0 }}
//         // animate={{
//         //   opacity: 1,
//         //   transition: {
//         //     delay: 2.4,
//         //     duration: 0.4,
//         //     ease: 'easeInOut'
//         //   }
//         // }}
//       >
//         {/* Image */}
//         <motion.div
//           // initial={{ opacity: 0 }}
//           // animate={{
//           //   opacity: 1,
//           //   transition: {
//           //     delay: 1,
//           //     duration: 0.4,
//           //     ease: 'easeIn'
//           //   }
//           // }}
//           className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]
//             mix-blend-lighten relative "
//         >
//           <Image
//             src="/assets/rsz_intro-ok.png"
//             priority
//             quality={100}
//             fill
//             alt=""
//             className="object-contain"
//           />
//         </motion.div>

//         {/* Circle */}
//         <motion.svg
//           className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute top-0 left-1/2 transform -translate-x-1/2"
//           fill="transparent"
//           viewBox="0 0 506 506"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <motion.circle
//             cx="253"
//             cy="253"
//             r="250"
//             stroke="#CBACF9"
//             strokeWidth="4"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             initial={{ strokeDasharray: "24 10 0 0" }}
//             animate={{
//               strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
//               rotate: [120, 360],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           />
//         </motion.svg>
//       </motion.div>
//     </div>
//   );
// }

// export default Photo;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div>
        <motion.div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden relative mix-blend-lighten">
          <Image
            src="/assets/image-okok.png"
            priority
            quality={100}
            fill
            alt=""
            sizes="(max-width: 768px) 298px, (max-width: 1200px) 498px, 498px"
            className="object-cover rounded-full"
          />
        </motion.div>

        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute top-0 left-1/2 transform -translate-x-1/2"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#CBACF9"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
