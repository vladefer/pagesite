import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SliderBtns from './SliderBtns';



const Slider = () => {
    return (
        <Swiper className='bg-white shadow-custom w-full max-w-[630px] h-[200px] '>
            {/* slider 1 */}
            <SwiperSlide>
                <div className='px-12 md:pl-[60px] flex items-center gap-9 h-full'>
                    {/* avatar img */}
                    <div className='relative hidden xl:flex w-[90px] h-[90px]'>
                        <img
                            src="/assets/img/testimonials/avatar.jpg"
                            fill
                            className='object-contain'
                            quality={100}
                            alt="" />
                    </div>
                    {/* text */}
                    <div className='flex-1 xl:max-w-[340px] flex flex-col gap-2 '>
                        <p>
                            Exceeded experiences. On time, witin budget and top quality work. High recommend!
                        </p>
                        <p className='font-primary font-semibold text-primary'>Jane Does</p>

                    </div>
                </div>
            </SwiperSlide>

            {/* slider 2 */}
            <SwiperSlide>
                <div className='px-12 md:pl-[60px] flex items-center gap-9 h-full'>
                    {/* avatar img */}
                    <div className='relative hidden xl:flex w-[90px] h-[90px]'>
                        <img
                            src="/assets/img/testimonials/avatar.jpg"
                            fill
                            className='object-contain'
                            quality={100}
                            alt="" />
                    </div>
                    {/* text */}
                    <div className='flex-1 xl:max-w-[340px] flex flex-col gap-2 '>
                        <p>
                            Exceeded experiences. On time, witin budget and top quality work. High recommend!
                        </p>
                        <p className='font-primary font-semibold text-primary'>Jane Does</p>

                    </div>
                </div>
            </SwiperSlide>

            {/* slider 3 */}
            <SwiperSlide>
                <div className='px-12 md:pl-[60px] flex items-center gap-9 h-full'>
                    {/* avatar img */}
                    <div className='relative hidden xl:flex w-[90px] h-[90px]'>
                        <img
                            src="/assets/img/testimonials/avatar.jpg"
                            fill
                            className='object-contain'
                            quality={100}
                            alt="" />
                    </div>
                    {/* text */}
                    <div className='flex-1 xl:max-w-[340px] flex flex-col gap-2 '>
                        <p>
                            Exceeded experiences. On time, witin budget and top quality work. High recommend!
                        </p>
                        <p className='font-primary font-semibold text-primary'>Jane Does</p>

                    </div>
                </div>
            </SwiperSlide>

            {/* slider btns */}
            <SliderBtns />

        </Swiper>
    )
}

export default Slider
