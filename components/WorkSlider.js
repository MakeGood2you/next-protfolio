// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'


// import required modules
import { Pagination } from 'swiper';
//icons
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

// import components
// data
const workSlides = {
    slides: [
        {
            images: [
                {
                    title: 'PayPlus',
                    path: '/PayPlus.png',
                    link: 'https://www.payplus.co.il/'
                },
                {
                    title: 'OtailO',
                    path: '/OtailO.png',
                    link: 'https://otailo.com/'
                },
                {
                    title: 'picpic',
                    path: '/picpic2.png',
                    link: 'https://osher-project-d38da.web.app/#/'
                },
                {
                    title: 'Collaborative-Whiteboard',
                    path: '/Whiteboard.png',
                    link: 'https://github.com/MakeGood2you/Collaborative-Whiteboard'
                },
            ],
        },
        {
            images: [
                {
                    title: 'shared-components-vue2',
                    path: '/shared-components-vue2.webp',
                    link:'https://github.com/MakeGood2you/shared-components-vue2/'
                },

                // {
                //     title: 'title',
                //     path: '/thumb1.jpg',
                // },
                // {
                //     title: 'title',
                //     path: '/thumb2.jpg',
                // },
                // {
                //     title: 'title',
                //     path: '/thumb3.jpg',
                // },
            ],
        },
    ],
};

const WorkSlider = () => {
    return <Swiper
        spaceBetween={10}
        pagination={{
            clickable: true
        }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]"
    >
        {workSlides.slides.map((slide, index) => (
            <SwiperSlide key={index}>
                <div className='grid grid-cols-2 gap-4 cursor-pointer'>
                    {slide.images.map((image, imageIndex) => {
                        return <div
                            onClick={() => location.replace(image.link)}
                            key={imageIndex}
                            className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                            <div className='group flex items-center justify-center relative overflow-hidden'>
                                {/* image */}
                                <Image className='sm:h-[200px] h-[100px]'  src={image.path} width={460} height={200}/>
                                {/* overlay gradient */}
                                <div
                                    className='text-black font-extrabold absolute inset-8 bg-gradient-to-l from-transparent via-[#e838cc]
                                     to-[#a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'
                                >{image.title}</div>
                                {/* title */}
                                <div className='absolute bottom-0 translate-y-full
                                group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                                transition-all duration-300'>
                                    <div className='text-black flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                                        {/* title part 1 */}
                                        <div className='delay-100'> TO </div>

                                        {/* title part 2 */}
                                        <div className='translate-y-[500%] group-hover:translate-y-0
                                         transition-all duration-300 delay-150'>PROJECT</div>

                                        {/* icon */}
                                        <div className='text-xl translate-y-[500%]
                                        group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                            <BsArrowRight className=''/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    })}
                </div>
            </SwiperSlide >
        ))}
    </Swiper>;
};

export default WorkSlider;

