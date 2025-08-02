import { Link } from "react-scroll"

import {
  RiFacebookFill,
  RiYoutubeFill,
  RiTwitterFill,
  RiInstagramFill
} from "react-icons/ri"

const socials = [
  {
    icon: <RiFacebookFill />,
    path: "",
  },
  {
    icon: <RiYoutubeFill />,
    path: "",
  },
  {
    icon: <RiTwitterFill />,
    path: "",
  },
  {
    icon: <RiInstagramFill />,
    path: "",
  },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return <Link href={item.path} key={index} className={`${iconStyles}`}>{item.icon}</Link>
      })}
    </div>
  )
}

export default Social
