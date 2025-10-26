import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri"

import Social from "./Social"
import { Link } from "react-scroll"
import { Brush } from "lucide-react"


const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-32 bg-primary">
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30'px] ">
          {/* logo & text */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <img src="./assets/logo.svg" alt="logo" width={230} height={48} />
            </Link>
            <p className="text-border max-w-[270px] ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ut libero pariatur voluptatum porro.
            </p>
          </div>
          {/* contact */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Contact</h4>
            <ul className="flex flex-col gap-6" >
              <li className="flex items-center gap-4">
                <RiMailFill className="text-accent text-xl" />
                <p>1250 Brictos Ave, US </p>
              </li>

              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-accent text-xl" />
                <p>+1 (5555) 000 00000 00 </p>
              </li>

              <li className="flex items-center gap-4">
                <RiMailFill className="text-accent text-xl" />
                <p>email@urbaiul.com </p>
              </li>
            </ul>

          </div>

          {/* newsletter */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Newsletter</h4>
            <p className="mb-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi architecto repudiandae aliquid iusto itaque!
            </p>
            {/* input  */}
            <div className="relative max-w-[370px] ">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-[#222427] h-16 w-full pl-7 rounded-none outline-none flex items-center "
              />
              <button className="bg-accent w-12 absolute right-2 top-2 bottom-2 text-primary text-xl flex items-center justify-center  ">
                <RiArrowRightLine />

              </button>
            </div>



          </div>

        </div>
      </div>
      {/*copyringht */}

      <div className="container mx-auto xl:px-0 py-12 border-t border-border/10 flex flex-col gap-6 xl:flex-row items-center justify-between ">
        <p className="text-border">Copyright &copy; 2025 urbanBuild. All rights reserved. 
        </p>
        <Social 
          containerStyles="flex gap-6 text-white "
          iconStyles="hover:text-accent transition-all"
        />
      </div>

    </footer>
  )
}

export default Footer
