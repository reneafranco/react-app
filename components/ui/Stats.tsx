"use client";

import { Cousine } from "next/font/google";
import CountUp from "react-countup";

const stats = [
    {
        num: 5,
        text: "Years of experience",
    },
    {
        num: 26,
        text: "Projects completed",
    },
    {
        num: 10,
        text: "Technologies mastered",
    },
    {
        num: 1010,
        text: "Code commits",
    }
]

const Stats = () => {
  return (
    <section>
    <div className="container mx-auto 2xl:py-20 xl:pb-40 pb-20">
      <div className="flex flex-wrap gap-6 max-w-[80vw] 
        mx-auto xl:max-w-none">
      {stats.map((item, index) => {
        return <div className="flex-1 flex gap-4 items-center
          justify-center xl:justify-start" key={ index }>
          <CountUp end={item.num} duration={5} delay={2}
            className="text-4xl xl:text-6xl font-extrabold"/>
          <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
            {item.text}
          </p>
        </div>
      })}
      </div>
    </div>
    </section>
  )
}

export default Stats


// "use client";

// import { useState, useEffect } from 'react';
// import CountUp from "react-countup";

// const Stats = () => {
//   const [stats, setStats] = useState([
//     { num: 0, text: "Years of experience" },
//     { num: 0, text: "Projects completed" },
//     { num: 0, text: "Technologies mastered" },
//     { num: 0, text: "Code commits" }
//   ]);

//   useEffect(() => {
//     const fetchGitHubData = async () => {
//       try {
//         const username = 'reneafranco'; // Reemplaza con tu nombre de usuario de GitHub
        
//         // Llama a la API para obtener datos del usuario
//         const userResponse = await fetch(`https://api.github.com/users/${username}`);
//         const userData = await userResponse.json();

//         // Llama a la API para obtener los repositorios
//         const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=1`);
//         const reposData = await reposResponse.json();
        
//         // Log para verificar los datos obtenidos
//         console.log('User Data:', userData);
//         console.log('Repos Data:', reposData);
        
//         // Cambia los datos de stats según los datos de la API
//         setStats([
//           { num: 0, text: "Years of experience" }, // Placeholder para los años de experiencia
//           { num: userData.public_repos, text: "Projects completed" }, // Número de repositorios
//           { num: 0, text: "Technologies mastered" }, // Placeholder para las tecnologías dominadas
//           { num: userData.public_gists, text: "Code commits" } // Número de gists
//         ]);
//       } catch (error) {
//         console.error('Error fetching data from GitHub:', error);
//       }
//     };

//     fetchGitHubData();
//   }, []);

//   return (
//     <section>
//       <div className="container mx-auto 2xl:py-20 xl:pb-40 pb-20">
//         <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
//           {stats.map((item, index) => (
//             <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
//               <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
//               <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
//                 {item.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Stats;

