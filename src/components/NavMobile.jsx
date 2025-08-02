import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import { RiMenu3Fill } from 'react-icons/ri'
import Logo from './Logo'
import Social from './Social'

import { Link as Scrollink } from 'react-scroll'
import { useState } from 'react'


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

const NavMobile = () => {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <Sheet open={isOpen} onOpenChange={setIsOpen} >
         <SheetTrigger className="text-white flex items-center justify-center text-2xl"
            onClick={() => setIsOpen(true)}>
            <RiMenu3Fill />
         </SheetTrigger>
         <SheetContent className="bg-primary border-none text-white">
            <div className='flex flex-col pt-16 pb-8 items-center justify-between h-full'>
               <SheetHeader>
                  <SheetTitle>
                     <Logo />
                  </SheetTitle>
                  <SheetDescription className='sr-only'>
                     Navegaciob Menu
                  </SheetDescription>
               </SheetHeader>
               <ul className='w-full flex flex-col gap-10 justify-center text-center'>
                  {links.map((link) => {
                     return (
                        <li
                           key={link.id}
                           className='text-white uppercase font-primary font-medium tracking-[1.2px]'
                        >
                           <Scrollink
                              to={link.path}
                              smooth
                              spy
                              duration={500}
                              className='cursor-pointer'
                              activeClass='text-accent'
                              onClick={() => setIsOpen(false)}                                    >
                              {link.name}
                           </Scrollink>
                        </li>
                     )
                  })}
               </ul>

               {/* socials */}
               <Social containerStyles='text-white text-xl flex dap-6' />

            </div>


         </SheetContent>
      </Sheet>
   )
}

export default NavMobile
