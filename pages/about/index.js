import React, { useState } from 'react'
// counter
import CountUp from 'react-countup';

// icons
import {
    FaFigma,
    FaVuejs,
    FaReact,
    FaNodeJs,
    FaGit,
    FaDocker,
    FaAws,
    FaGoogle,
    FaBitbucket,
    FaJira
} from "react-icons/fa";
import {
    SiRedux,
    SiNextdotjs,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiFirebase,
    SiNestjs,
    SiFastify,
    SiExpress,
    SiPostman,
    SiSlack,
    SiTypescript,
    SiJavascript,
    SiGooglecloud,
    SiNuxtdotjs,
} from "react-icons/si";

// components
import Avatar from "../../components/Avatar"
import Circles from "../../components/Circles"

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Link from 'next/link';
import { navData } from '../../components/Nav';

//  data
const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web Development',
                icons: [
                    { name: "VueJS", icon: <FaVuejs/>, color: "#42b883" },
                    { name: "React", icon: <FaReact/>, color: "#61dafb" },
                    { name: "Redux", icon: <SiRedux/>, color: "#764abc" },
                    { name: "Next.js", icon: <SiNextdotjs/>, color: "#000" },
                    { name: "Nuxt.js", icon: <SiNuxtdotjs/>, color: "#000" },

                    { name: "Firestore", icon: <SiFirebase/>, color: "#ffca28" },
                    { name: "JavaScript", icon: <SiJavascript/>, color: "#f7df1e" },
                    { name: "TypeScript", icon: <SiTypescript/>, color: "#007acc" },

                    { name: "Node.js", icon: <FaNodeJs/>, color: "#3c873a" },
                    { name: "NestJS", icon: <SiNestjs/>, color: "#e0234e" },
                    { name: "Fastify", icon: <SiFastify/>, color: "#000" },
                    { name: "Express", icon: <SiExpress/>, color: "#000" },
                    { name: "MySQL", icon: <SiMysql/>, color: "#00758f" },
                    { name: "Postgres", icon: <SiPostgresql/>, color: "#336791" },
                    { name: "MongoDB", icon: <SiMongodb/>, color: "#47a248" },

                    { name: "AWS", icon: <FaAws/>, color: "#ff9900" },
                    { name: "Google Cloud", icon: <SiGooglecloud/>, color: "#4285f4" },
                    { name: "Docker", icon: <FaDocker/>, color: "#2496ed" },
                    { name: "Jira", icon: <FaJira/>, color: "#2496ed" },
                    { name: "Git", icon: <FaGit/>, color: "#f34f29" },
                    { name: "Bitbucket", icon: <FaBitbucket/>, color: "#0052cc" },

                    { name: "Postman", icon: <SiPostman/>, color: "#ff6c37" },
                    { name: "Slack", icon: <SiSlack/>, color: "#4a154b" },
                    { name: "Figma", icon: <FaFigma/>, color: "#2496ed" },
                ]

            },
        ],
    },

    {
        title: 'experience',
        info: [
            {
                title: 'PayPlus - Wittix',
                city: 'Holon',
                stage: '2022 — 2023',
                role: 'FullStack Developer',
                description: () => (
                    <p>
                        I developed{' '}
                        <a className="text-accent" href="https://www.payplus.co.il" target="_blank" rel="noopener noreferrer">
                            PayPlus
                        </a>{' '}
                        using Nuxt SSR for a responsive, fast-loading website. Integrated Google SEO strategies to boost visibility
                        and rankings. Implemented a payment and refund system on our CRM site using Node.js, TypeScript, Vue.js, and
                        MySQL. Created a robust API with NestJS for scalable back-end architecture. Collaborated cross-functionally to
                        gather requirements, conduct code reviews, and meet project goals.
                    </p>
                ),
            },
            {
                title: 'LS Technology',
                city: 'Petah Tikva',
                stage: '2021 — 2022',
                role: 'FullStack Developer',
                description: () => (
                    <p>
                        Led development of new projects with a team of 3 using agile methodology, Docker, AWS, and CI/CD. Utilized
                        Node.js, TypeScript, Vue.js, MongoDB, and MySQL to build robust, scalable microservices. Completed three
                        large-scale projects in one year, showcasing efficient project management. Applied expertise in JavaScript,
                        Node.js, and frameworks like Fastify, NestJS, and Express. Built a Vue.js web app with Node.js/Express and
                        PostgreSQL. Designed RESTful APIs and developed an Admin back office in React for user management and data
                        analysis.{' '}
                        <a className="text-accent" href="https://otailo.com/" target="_blank" rel="noopener noreferrer">
                            Otailo
                        </a>{' '}
                        was one of the key projects during this tenure. Leveraged JointJS for advanced diagram creation, supporting
                        various shapes, connections, labels, and interactive editing features.
                    </p>
                ),
            },
            {
                title: 'FlashDev',
                city: 'Ramat Gan',
                stage: '2019 — 2021',
                role: 'FullStack Developer & Mentor',
                description: () => (
                    <p>
                        • Mentored students in programming from day one over a three-month duration, covering topics like Vue.js,
                        React, Node.js, Express, MongoDB, Algorithmic principles, Firebase, and Google Cloud.
                        <br />
                        • Delivered lectures on Vue.js, React, Node.js, Express, MongoDB, Algorithmic principles, Firebase, and
                        Google Cloud.
                        <br />
                        • Coached students on overcoming the mental challenges of programming.
                        <br />
                        • Conducted daily NLP lectures to foster personal and professional growth.
                    </p>
                ),
            },
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0)

    return (
        <div className={'h-full bg-primary/30 py-32 text-center xl:text-left '}>
            <Circles/>
            {/*avatar img*/}
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className={'hidden xl:flex absolute bottom-0 -left-[370px]'}>
                <Avatar/>
            </motion.div>
            <div className={'z-50 container mx-auto h-full flex items-center flex-col gap-x-6 '}

            >
                {/*text*/}
                <div className={'flex-1 flex flex-col justify-center'}>
                    <motion.h2
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='lg:h2 text-3xl font-bold '>

                        Turning <span className='text-accent'>Ideas</span> into impactful digital experiences.
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('right', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='text-xs lg:text-[14px] max-w-[600px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
                    >
                        With a passion for crafting innovative solutions, I specialize in building dynamic, user-friendly web applications.
                        Over the last 4 years, I’ve honed my skills in full-stack development, delivering custom solutions that enhance
                        user experiences and drive business success.
                    </motion.p>
                    {/*counters*/}
                    <motion.div
                        variants={fadeIn('right', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
                    >
                        <div className='flex flex-1 xl:gap-x-6'>
                            {/*experience*/}
                            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after: right-0'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={4} duration={10} />
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Years of experience
                                </div>
                            </div>
                            {/*projects*/}
                            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after: right-0'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={10} duration={10} />
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Completed projects
                                </div>
                            </div>
                            {/*clients*/}
                            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after: right-0'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={30} duration={5} />
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Satisfied clients
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>                {/* Info*/}
                <motion.div
                    variants={fadeIn('right', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className={'flex flex-col w-full xl:max-w-[100%] h-[480px]  overflow-auto'}
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'black transparent',
                        padding: '10px',
                        borderRadius: '8px',
                    }}
                >
                    <div className={'flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 z-30 '}>
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`${index === itemIndex && 'text-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            )
                        })}</div>
                    <div
                        className={'py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 justify-center items-center xl:items-start '}>
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex}
                                     className={'flex-row flex md:flex-row max-w-max gap-x-2 text-white/60'}>
                                    <div className='py-3 flex flex-col items-center md:min-w-[200px] xl:min-w-[250px]'>
                                        {/* title */}
                                        <div className='font-bold flex text-md '>
                                            {item.title }
                                        </div>

                                        <div className={' md:flex text-xs '}>{item?.city}</div>
                                        <div className={'text-accent/70 md:flex md: text-sm'}>{item?.role}</div>
                                        <div className={' md:flex'}>{item?.stage}</div>
                                        <hr className='opacity-30 max-w-32'/>
                                    </div>
                                    <div className='hidden md:flex text-xs px-2'>{typeof item.description === 'function' ? item.description() : item.description}</div>
                                    {item.icons && (
                                        <div
                                            className='text-[22px] grid grid-cols-4 gap-4 lg:grid-cols-6 lg:gap-6 w-full items-center justify-between xl:max-w-[300px]'>
                                            {item.icons?.map((iconData, index) => {
                                                return <div
                                                    className={`relative flex items-center group hover:text-accent transition-all duration-300`}
                                                    key={index}
                                                >
                                                    <div
                                                        className={`absolute pr-14 right-0 hidden sm:group-hover:flex`}>
                                                        <div
                                                            className={`bg-white relative flex text-primary items-center p-[6px] `}>
                                                            <div
                                                                className={`text-[12px] leading-none font-semibold capitalize`}>
                                                                {iconData.name}
                                                            </div>
                                                            <div
                                                                className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`color: ${iconData.color}`}>{iconData.icon}</div>
                                                </div>
                                            })}
                                        </div>

                                    )}
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    )
};

export default About;
