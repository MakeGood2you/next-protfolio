// next image
import Image from 'next/image'

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '../variants'

const Home = () => {
    return (
        <div className='bg-primary/60 h-full'>
            {/*text*/}
            <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
                <div
                    className='text-center sm:text-xs flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
                    {/*title*/}
                    <motion.h1
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h1'>
                        Fullstack Developer <br/>
                        Transforming Ideas <br/> into{' '}
                        <span className='text-accent'>Digital Reality</span>
                    </motion.h1>
                    {/*subtitle*/}
                    <motion.p
                        variants={fadeIn('down', 0.3)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="text-sm md:text-base lg:text-lg xl:text-2xl max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
                    >
                        <strong>Specializing in Web Technologies and Custom Solutions</strong>
                        I am a Fullstack Developer with 3 years of experience in the tech industry, dedicated to crafting
                        innovative and tailored solutions. My expertise lies in web application development, designing intuitive
                        interfaces, and leveraging advanced technologies to bring creative ideas to life.
<br/>
                        In my free time, I enjoy playing frisbee, dancing, and taking relaxing walks with my dog, Motek.
                    </motion.p>
                    {/*btn*/}
                    <div className='mb-12 flex justify-center xl:hidden relative'>
                        <ProjectsBtn/>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='hidden xl:flex'
                    >
                        <ProjectsBtn/>
                    </motion.div>
                </div>
            </div>
            {/*image*/}
            <div className='w-[1200px] h-full absolute right-0 bottom-0 '>
                {/*bg img*/}
                <div
                    className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>

                </div>
                {/*particles*/}
                <ParticlesContainer/>
                {/*avatar img*/}
                <motion.div
                    className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
                    variants={fadeIn('up', 0.5)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    <Avatar/>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;