import { RiPhoneFill, RiMailFill } from 'react-icons/ri'
import Social from './Social'

const Topbar = () => {
  return (
    <section id="home" className='py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#ffc221] to-[#ffd76e] flex items-center'>

      <div className="container mx-auto">

        {/* phone, mail & socials */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>

          <div className=' hidden xl:flex items-center gap-8'>

            {/* phone */}
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-primary text-white flex items-center justify-center'>
                <RiPhoneFill />
              </div>
              <p className='font-medium text-primary'>+1 (555) 000-0000</p>
            </div>

            {/* mail */}
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-primary text-white flex items-center justify-center'>
                <RiMailFill />
              </div>
              <p className='font-medium text-primary'>email@gmail.com</p>
            </div>

          </div>

          {/* Socials */}
          <Social containerStyles="flex items-center gap-8 mx-auto xl:mx-0" iconStyles="text-primary" />
        </div>

      </div>
    </section>
  )
}

export default Topbar
