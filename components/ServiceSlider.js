// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// icons
import {
    RxCrop,
    RxPencil2,
    RxDesktop,
    RxReader,
    RxRocket,
    RxArrowTopRight
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
    {
        icon: <RxCrop/>,
        title: 'Branding',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <RxPencil2/>,
        title: 'Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <RxDesktop/>,
        title: 'Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <RxReader/>,
        title: 'Copywriting',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <RxRocket/>,
        title: 'SEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

const ServiceSlider = () => {
    return <Swiper
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        }}
        freeMode={true}
        pagination={{
            clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className="h-[240] sm:h-[340px]"
    >
        {serviceData.map((service, index) => (
            <SwiperSlide
                key={index}
                className="flex flex-col items-center gap-y-6 px-4 sm:px-0">
                <div
                    className='group bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8
                    flex sm:flex-col gap-x-6 sm:gap-x-0
                    cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                    {/* icon */}
                    <div className='text-4xl text-accent mb-4'>{service.icon}</div>
                    {/* title */} {/* description */}
                    <div className='mb-8'>
                        <div className="text-lg mb-2">{service.title}</div>
                        <p className='max-w-[350px] leading-normal'>{service.description}</p>
                    </div>
                    {/* arrow */}
                    <div className='text-3xl'>
                        <RxArrowTopRight
                            className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>;
};

export default ServiceSlider;
