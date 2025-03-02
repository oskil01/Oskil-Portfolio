import Link from "next/link";

import {
  FaGithub, 
  FaFacebook, 
  FaYoutube, 
  FaLinkedin, 
  FaDiscord 
} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/oskil01"},
    {icon: <FaDiscord />, path: "https://discord.gg/cSdAFHSQ"},
    {icon: <FaFacebook />, path: "https://www.facebook.com/junior.tambwe.56"},
    {icon: <FaYoutube />, path: "https://www.youtube.com/@juniorjsn"},   
    {icon: <FaLinkedin />, path: `https://www.linkedin.com/in/junior-johnson-aa5763214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`},
  ]
const Socials = ({containerStyles, iconStyles} ) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return (
               <Link
                  key={index}
                  href={item.path}
                  className={iconStyles}
               >{item.icon}
               </Link>
            )        
        })}
    </div>
  )
}

export default Socials