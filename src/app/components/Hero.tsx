import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Skills from './Skills'
import { Button } from '../ui/MovingBorder'

const skillsData = [
    {
        name: "javascript",
        icon: "/skills/javascript.svg"
    },
    {
        name: "nextjs",
        icon: "/skills/next.svg"
    },
    {
        name: "reactjs",
        icon: "/skills/react.svg"
    },
    {
        name: "nodejs",
        icon: "/skills/node.svg"
    },
    {
        name: "express",
        icon: "/skills/express.svg"
    },
    {
        name: "mongodb",
        icon: "/skills/mongo.svg"
    },
    {
        name: "postgresql",
        icon: "/skills/sql.svg"
    },
    {
        name: "tailwind",
        icon: "/skills/tailwind.svg"
    },
    {
        name: "sass",
        icon: "/skills/sass.svg"
    },
    {
        name: "git",
        icon: "/skills/git.svg"
    },

]


const Hero: React.FC = () => {
    return (
        <main className='hero relative'>
            <Navbar />
            <div className={` flex items-center justify-center py-10 px-0 z-[2] md:h-screen`} >
                <div className={`flex items-center justify-center`}>
                    <div className={` flex flex-col items-center gap-5 z-[1]`}>
                        <div className={` flex items-center justify-center flex-col md:flex-row md:gap-10 gap-2`}>
                            <div className={` relative w-52 h-52 rounded-full overflow-hidden md:w-64 md:h-64`}>
                                <Image src="/profile.png" fill className={` object-contain w-full grayscale`} alt='Main Logo' />
                            </div>
                            <div className={` flex flex-col items-center md:items-start gap-2`} >
                                

                                <Button
                                    className="hidden uppercase py-2 px-5 rounded-3xl bg-[#fa571f] text-sm md:block border-0 text-white"
                                >
                                    FullStack Developer
                                </Button>

                                <h1 className=' flex items-center gap-1 uppercase text-4xl font-extrabold md:flex-col md:text-7xl lg:text-8xl font-sans text-white'>
                                    <span
                                    >Gaurav</span>
                                    <span className=' md:font-normal md:text-[5rem] lg:text-[6.73rem]'>
                                        Kumar
                                        <span className="dot">.</span>
                                    </span>
                                </h1>
                                <h2 className=' block md:hidden uppercase text-xl text-center text-white'>FullStack Developer</h2>
                            </div>
                        </div>
                        <div className={` flex items-center justify-center`}>
                            <div className={` flex items-center justify-center flex-col`}>
                                <p className=' items-center text-[0.5625rem] md:text-base lg:text-lg text-white'>Crafting Intuitive User Interfaces for Seamless Experiences</p>
                            </div>
                        </div>

                        <div>
                            <div className={` flex gap-5`}>
                                <button className={' uppercase py-2 px-5 flex items-center justify-center text-white rounded-3xl  bg-[#fa571f] border-0 cursor-pointer transition-all duration-200 ease-in-out overflow-hidden'} >
                                    <Link href={"https://drive.google.com/file/d/1VtgK9ACx5Hx5e1vJrIK-cpu17SfjcXBN/view?usp=drive_link"} className='text-base font-bold'>
                                        Download CV
                                    </Link>
                                </button>


                                <button className={` uppercase py-2 px-5 flex items-center justify-center text-white rounded-3xl font-bold bg-transparent border-2 border-white cursor-pointer transition-all duration-200 ease-in-out overflow-hidden`} >
                                    <Link href="https://www.linkedin.com/in/gauravk9870/" className='text-base font-bold'>
                                        Contact me
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Skills data={skillsData} padding={10} />
        </main>
    )
}

export default Hero