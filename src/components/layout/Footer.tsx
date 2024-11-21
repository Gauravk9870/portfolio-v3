import React from 'react'
import { AiFillGithub, AiOutlineInstagram, AiOutlineCodepen } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={`py-12 md:py-24 px-2 md:px-10 bg-[#000000]`}>
            <div className={``}>
                <div className={`text-white flex flex-col items-center justify-center gap-5 border-b border-white/40 pb-5 md:flex-row md:justify-between`}>
                    <div className={`text-4xl font-bold uppercase`} >
                        <Link href="/">
                            Gaurav
                            <span className={`text-[#fa671f] text-5xl`}>
                                .
                            </span>
                        </Link>
                    </div>
                    <div className={`w-full md:w-1/2 flex flex-row justify-between`}>
                        <ul className=' flex items-start flex-col justify-start gap-1'>
                            <li className=' text-xs sm:text-base'>
                                <Link href="/projects#featured">
                                    Featured
                                </Link>
                            </li>
                            <li className=' text-xs sm:text-base'> <Link href="/projects#recent">
                                Recent
                            </Link> </li>
                            <li className=' text-xs sm:text-base'>
                                <Link href="/projects#misc-projects">
                                    Miscellaneous
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className=' text-xs sm:text-base'>
                                <Link href="/#experience">
                                    Experience
                                </Link>
                            </li>
                            <li className=' text-xs sm:text-base'>
                                <Link href="/#education">
                                    Education
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className=' text-xs sm:text-base'>
                                <Link href="/#skills">
                                    Skills
                                </Link>
                            </li>
                            <li className=' text-xs sm:text-base'>
                                <Link href={"https://drive.google.com/file/d/1VtgK9ACx5Hx5e1vJrIK-cpu17SfjcXBN/view?usp=drive_link"}>
                                    Download CV
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <ul className={`flex items-center justify-center gap-5 md:gap-1 md:flex-col md:items-start`}>
                        <li className=' text-xs sm:text-base'>

                            <Link href="/">
                                Home
                            </Link> </li>
                        <li className=' text-xs sm:text-base'>About</li>
                        <li className=' text-xs sm:text-base'>
                            <Link href="/projects">
                                Projects
                            </Link>
                        </li>
                        <li className=' text-xs sm:text-base'>  <a href="https://www.linkedin.com/in/gauravk9870/" target='_blank'>Contact</a></li>
                    </ul>
                </div>
                <ul className={`pt-10 pb-5 text-white flex items-center justify-center gap-5 text-base md:text-xl`}>
                    <li>
                        <a href="https://github.com/TrippyGaurav" target='_blank'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/gauravk9870/">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/gaurav.k__/">
                            <AiOutlineInstagram />
                        </a>
                    </li>

                </ul>
                <ul className={`text-white flex items-center justify-center p-5 md:text-base`}>
                    <li className=' text-center'>© {new Date().getFullYear().toString()} Gaurav. All rights reserved</li>
                </ul>
            </div>
        </div>
    )
}


export default Footer