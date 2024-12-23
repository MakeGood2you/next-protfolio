// testimonial data
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


// import required modules
import { Navigation, Pagination } from 'swiper';
//icons
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

// import components
// data
const testimonialData = [
    {
        image: '/ahiya2.jpeg',
        name: 'Achiya Haviv',
        position: 'Full Stack Developer at With (Coing)',
        message: 'קובי בחור עם לב זהב\n' +
            'מפתח מוכשר שדוחף את כל הצוות קדימה ומביא פתרונות טובים ומהירים\n' +
            'מהשבוע הראשון של ההכשרה שעברנו ביחד הוא התחיל לעזור לכל הקבוצה שלנו\n' +
            'לא פלא שבסוף ההכשרה הוא נחטף לעבוד כמדריך בהכשרה\n' +
            'הבנאדם מוכשר ומלא בנתינה',
    },

    {
        image: '/eylon2.jpeg',
        name: 'Eylon Koenig',
        position: 'Full Stack Developer',
        message:
            'I was blown away by Kobi technical skills and problem-solving abilities. They tackled complex integrations, optimized the database, and ensured the website’s performance was lightning fast. From React to Node.js to deployment, everything was handled flawlessly!',
    },

    {
        image: '/ofir.jpeg',
        name: 'Ofir Zukerman',
        position: 'Frontend Developer @ Priority Software | Web & Mobile Specialist | TypeScript Expert | Article Writer on Advanced JS & TS',
        message:
            'Working with Kobi was an absolute game-changer for our project. They not only delivered a fully functional web application on time but also went above and beyond to implement features we hadn’t even considered. Their ability to handle both front-end and back-end seamlessly is truly impressive!',
    },

    {
        image: '/yishai.jpeg',
        name: 'Yishai Brown',
        position: 'Chief Technology Officer at OtailO',
        message:
            'Our website had ongoing issues with performance and user experience until we brought Kobi on board. They identified bottlenecks in the code, refactored critical components, and introduced modern frameworks. Now everything runs smoothly – and our customers love it!'
    },

    {
        image: '/liran.jpeg',
        name: 'Liran Elmaliach',
        position: 'Head-Hunter for StartUps&Tech',
        message:
            'Kobi not only builds exceptional software but also excels at clear communication. They kept me updated at every stage, explaining technical details in a way I could understand. The final product exceeded my expectations and works like a charm.',
    },

    {
        image: '/beni2.jpeg',
        name: 'Beni Levi',
        position: '⚡Senior software developer',
        message:
            'Finding a reliable developer who delivers high-quality work can be tough, but Kobi ticks all the boxes. From setting up a robust backend API to creating a responsive and beautiful UI, they handled it all. They’re the full stack expert you can trust!',
    },

];

const TestimonialSlider = () => {
    return <Swiper
        navigation={true}
        pagination={{
            clickable: true
        }}
        modules={[Navigation, Pagination]}
        className="h-[400px]"
    >
        {testimonialData.map((person, index) => (
            <SwiperSlide key={index}>
                <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                    {/* avatar name position */}
                    <div
                        className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                        <div className='flex flex-col justify-center text-center'>
                            {/* avatar */}
                            <div className='mb-2 mx-auto'>
                                <Image
                                    src={person.image}
                                    alt=''
                                    width={100}
                                    height={100}
                                    className='rounded-full'
                                />
                            </div>
                            {/* name */}
                            <div className='text-lg'>{person.name}</div>
                            {/* position */}
                            <div
                                className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>

                        </div>
                    </div>
                    <div>
                        {/*quote & message */}
                        <div className='flex-1 flex flex-col justify-center before:w-[1px]
                        xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative
                        xl:pl-20
                        '>
                            {/*quote Icon*/}
                            <div className='mb-4'>
                                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
                            </div>
                            {/* message */}
                            <div className='xl:text-lg text-center md:text-left'>
                                {person.message}
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>;
};

export default TestimonialSlider;

