"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="px-2 py-5 border-b border-opacity-10 border-white md:h-20 bg-transparent">
                <div className=" w-full h-full flex items-center justify-between py-0 px-2 md:py-5">
                    <div>
                        <Link href="/">
                            <span className=" text-sm font-bold uppercase">
                                Gaurav
                                <span className=" text-[#fa571f]">.</span>
                            </span>
                        </Link>
                    </div>
                    <ul className="hidden md:flex gap-5">
                        <li className=" cursor-pointer text-sm uppercase text-white hover:text-[#fa571f]">
                            <Link href="/">Home</Link>
                        </li>
                        <li className=" cursor-pointer text-sm uppercase text-white hover:text-[#fa571f]">
                            <Link href="/#experience">About</Link>
                        </li>
                        <li className=" cursor-pointer text-sm uppercase text-white hover:text-[#fa571f]">
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className=" cursor-pointer text-sm uppercase text-white hover:text-[#fa571f]">
                            <a
                                href="https://www.linkedin.com/in/gauravk9870/"
                                target="_blank"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul className=" hidden md:flex gap-5">
                        <li className="cursor-pointer text-sm uppercase text-white hover:text-[#fa571f]">
                            <a href="https://github.com/TrippyGaurav" target="_blank">
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="cursor-pointer text-sm uppercase text-white hover:text-[#fa571f]">
                            <a
                                href="https://www.linkedin.com/in/gauravk9870/"
                                target="_blank"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="cursor-pointer text-sm uppercase text-white hover:text-[#fa571f]">
                            <a href="https://www.instagram.com/gaurav.k__/" target="_blank">
                                <AiOutlineInstagram />
                            </a>
                        </li>
                    </ul>
                    <div className="absolute w-6 h-4 z-50 right-4 transform rotate-0 transition-all duration-200 ease-in-out cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <span className={`absolute block h-[2px] w-full bg-white transform rotate-0 transition-all duration-100 ease-in-out top-0 ${isOpen && " top-[7px] rotate-[135deg]"}`}></span>
                        <span className={`absolute block h-[2px] w-full bg-white transform rotate-0 transition-all duration-100 ease-in-out top-2 ${isOpen && " hidden"}`}></span>
                        <span className={`absolute block h-[2px] w-full bg-white transform rotate-0 transition-all duration-100 ease-in-out top-4 ${isOpen && " top-[7px] rotate-[-135deg]"}`}></span>
                    </div>
                </div>
            </nav>
            {
                isOpen &&
                <div className="p-4 transition-all  border-b border-opacity-10 border-white">
                    <ul className="flex items-center justify-center gap-4">
                        <li className=" hover:text-[#fa571f]">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className=" hover:text-[#fa571f]">
                            <Link href="/#experience">
                                About
                            </Link></li>
                        <li className=" hover:text-[#fa571f]">
                            <Link href="/projects">
                                Projects
                            </Link>
                        </li>
                        <li className=" hover:text-[#fa571f]">
                            <a href="https://www.linkedin.com/in/gauravk9870/" target='_blank'>Contact</a>
                        </li>
                    </ul>
                </div>
            }
        </>
    );
};

export default Navbar;
