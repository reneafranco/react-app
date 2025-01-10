export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Software Enginner Western Governors University ",
    description: "",
    className: "lg:col-span-3  md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full ",
    titleClassName: "justify-end  ",
    img: "/assets/cerca.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible in organizing meetings and communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Soft Skills",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center text-purple",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Lua based Rederder Engine",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want my email ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Argus - Independent Browser",
    des: "Explore a secure and fast browsing experience with Argus, designed for privacy and efficiency.",
    img: "/images/argus-galaxy.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/assets/java.svg",
      "/assets/svgrepoJs.svg",
    ],
    link: "https://github.com/reneafranco/Argus",
  },
  {
    id: 2,
    title: "Hermes - Render Engine",
    des: "Elevate your video meetings with Hermes, offering top-notch rendering for smooth communication.",
    img: "/images/render-engine.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/reneafranco/Argus",
  },
  {
    id: 3,
    title: "Network Scanner",
    des: "Analyze your network with precision using Network Scanner, powered by advanced technology for detailed insights.",
    img: "/images/network-scaner.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/reneafranco/Network-Scanner",
  },
  {
    id: 4,
    title: "Custom Neovim Configuration",
    des: "Optimize your coding environment with a tailored Neovim setup using Lua for improved development productivity.",
    img: "/images/red-social.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/reneafranco/.dotfiles",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Rene was an exceptional experience. His profound intelligence and enthusiasm for every aspect of the project were truly impressive. Rene's charismatic approach and unwavering commitment to delivering top-quality results made a significant impact. If you want someone who combines expertise with a dynamic presence, Rene is your go-to professional.",
    name: "Marcelino Saez",
    title: "Senior Software Enginner",
    profileImage: "/images/marce.jpeg",
  },
  {
    quote:
      "Rene's passion and intelligence are unparalleled. His charismatic personality and dedication to the project brought a unique energy that propelled our work forward. Rene's ability to tackle challenges with both creativity and professionalism made him a standout collaborator. For a partner who offers both expertise and a vibrant attitude, Rene is highly recommended.",
    name: "Karelys Franco",
    title: "Trilingual Senior Business Analyst",
    profileImage: "/images/marce.jpeg",
  },
  {
    quote:
      "Collaborating with Rene was an outstanding experience. His sharp intellect and enthusiastic approach added tremendous value to our project. Rene's charisma and commitment to achieving exceptional results were evident throughout. His positive energy and professional skills make him a fantastic choice for any development needs.",
    name: "Pino Sestito",
    title: "Ceo of suprares.com and globalmetaverso.com",
    profileImage: "/images/pino.jpeg",
  },
  {
    quote:
      "Rene's blend of intelligence, enthusiasm, and charisma transformed our project. His proactive attitude and dedication to excellence were apparent from the start. Rene's ability to infuse energy and expertise into his work ensures top-notch results. For a collaborator who delivers with both skill and a dynamic presence, Rene stands out.",
    name: "Piero Carcercano",
    title: "Lead Architectural Designe",
    profileImage: "/images/piero.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Enginner - Upwork.com",
    desc: "Contributed to open-source projects on GitHub, specializing in Java Spring Boot, deploying on AWS and Google Cloud.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer/ Backend Developer - Revature",
    desc: "Configured REST API endpoints using Javalin, composed service layer logic, and implemented input validation in TDD.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer - GaoTeck Inc",
    desc: "Developed a bug-tracking system reducing resolution time by 40% and optimized application performance using Angular and Spring Framework.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Engineer - Freelance",
    desc: "Created dynamic interfaces, implemented route management, and ensured data integrity using Django ORM and secure RESTful APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
