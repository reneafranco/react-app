import Link from 'next/link';

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

const socials = [
  
  {icon: <FaGithub />, path: "https://github.com/reneafranco"},
  {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/rene-adonay/"},
  {icon: <FaYoutube />, path: "https://www.youtube.com/channel/UCUqE95T8WcqfGzPUvKDPIww"},
  {icon: <FaTwitter />, path: ""}
  
];

const Social = ({ containerStyles, iconStyles}) => {

  return (
    <div className={containerStyles}>
      {socials.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      })}

    </div>
  )
}

export default Social
