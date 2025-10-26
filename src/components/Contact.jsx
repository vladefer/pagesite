import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from 'react-icons/ri'
import Social from './Social'
import Form from './Form'

const Contact = () => {
  return (
    <section id="contact" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className='w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent '>
          <div className='flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px] '>
            {/* infor */}
            <div className='w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px] '>
              <h4 className='text-[26px] font-primary font-bold mb-6'>
                Contact us
              </h4>
              <p className='mb-9'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus harum sint et nisi cupiditate?
              </p>
              {/* comntact itmes */}
              <div className='flex flex-col gap-[40px] mb-16 '>

                {/* contact item */}
                <div className='flex items-start gap-[20px] '>
                  <div>
                    <RiChat1Line className='text-[20px] text-accent ' />
                  </div>
                  <div>
                    <h5 className='text-[22px] font-semibold font-primary leading-none mb-2 '>
                      Chat to us
                    </h5>
                    <p className='mb-4'>Our friendly team is here to help</p>
                    <p className='font-semibold text-primary'>
                      hi@urbabuild.com
                    </p>
                  </div>
                </div>

                {/* contact item */}
                <div className='flex items-start gap-[20px] '>
                  <div>
                    <RiMapPin2Line className='text-[20px] text-accent ' />
                  </div>
                  <div>
                    <h5 className='text-[22px] font-semibold font-primary leading-none mb-2 '>
                      Office
                    </h5>
                    <p className='mb-4'>Come and say hello at our office</p>
                    <p className='font-semibold text-primary'>
                      1250 Brcitors Ave, Dallas, TX , USA 
                    </p>
                  </div>
                </div>

                {/* contact item */}
                <div className='flex items-start gap-[20px] '>
                  <div>
                    <RiSmartphoneLine className='text-[20px] text-accent ' />
                  </div>
                  <div>
                    <h5 className='text-[22px] font-semibold font-primary leading-none mb-2 '>
                      Phone
                    </h5>
                    <p className='mb-4'>Mon-Fri from 8:am to 5pm</p>
                    <p className='font-semibold text-primary'>
                      +1 (555) 0000-00000
                    </p>
                  </div>
                </div>
              </div>

                <div>
                  <Social 
                    containerStyles="flex gap-[40px]"
                    iconStyles="text-primary text-[20px]"
                  />
                </div>

            </div>



            {/* form */}
            <div className='flex-1'>
              <h2 className='h2 mb-3'>Request A Quoete</h2>
              <p className='mb-9'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis aliquam error deleniti quia voluptas odit temporibus quos repellat corporis?
              </p>
              <Form />
            </div>
          </div>
        </div>

      </div>


    </section>
  )
}

export default Contact
