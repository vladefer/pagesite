import { RiArrowRightUpLine } from 'react-icons/ri'
import { Link as Scrollink } from 'react-scroll'
import Logo from './Logo'
import NavMobile from './NavMobile'


const links = [
  {
    id: "home",
    name: "home",
    path: "home",
  },
  {
    id: "about",
    name: "about",
    path: "about",
  },
  {
    id: "services",
    name: "services",
    path: "services",
  },
  {
    id: "projects",
    name: "projects",
    path: "projects",
  },
  {
    id: "contact",
    name: "contact",
    path: "contact",
  },
]

const Header = () => {
  return (
    <header className='bg-primary py-4'>

      <div className='container mx-auto'>

        <div className='flex items-center justify-between'>

          {/* Logo */}
          <Logo />

          {/* nav principal */}
          <nav className='hidden xl:flex items-center gap-12'>
            <ul className='flex'>
              {links.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="text-white text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-accent">
                    <Scrollink
                      to={link.path}
                      smooth={true}
                      spy={true}
                      className='cursor-pointer'
                      activeClass='text-accent' >
                      {link.name}
                    </Scrollink>

                  </li>
                )
              })}
            </ul>
            <button className='w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] bg-white group'>
              <div className='flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase'>
                Get a quote
              </div>
              <div className='w-11 h-11 bg-primary flex items-center justify-center'>
                <RiArrowRightUpLine className='text-white text-xl group-hover:rotate-45 transition-all duration-200' />
              </div>
            </button>
          </nav>

          {/* nav mobile */}
          <div className='xl:hidden '>
            <NavMobile />
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header