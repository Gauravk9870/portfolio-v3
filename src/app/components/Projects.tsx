
"use client"
import React from 'react'
import { FollowerPointerCard } from '../ui/FollowingPointer'
import Image from 'next/image'
import Skills from './Skills'
import { projects } from '../utils/data'
import FeaturedProjects from './FeaturedProjects'
import { FaGithub } from 'react-icons/fa'
import { CiGlobe } from "react-icons/ci";

const skillsData = [

    {
        name: "nextjs",
        icon: "/skills/next.svg"
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
        name: "postgresql",
        icon: "/skills/sql.svg"
    },
    {
        name: "tailwind",
        icon: "/skills/tailwind.svg"
    },


]




const Projects: React.FC = () => {
    const miscProjects = projects.filter((project) => project.category === 'misc')

    return (
        <>

            <section className=' py-12 md:py-24 px-4 md:px-8 bg-[#000000] flex items-center md:items-start flex-col'>
                <button className='py-2 px-5 rounded-3xl bg-[#fa571f] text-base  mb-4'>
                    Projects
                </button>
                <h2 className=' text-5xl font-bold font-sans text-center md:text-left text-white'>Some Things I’ve Built</h2>


                <div className=" mt-24 flex flex-col gap-10">
                    {/* Featured project  */}
                    <div className="overflow-hidden flex flex-col gap-10" >
                        <FollowerPointerCard className=' overflow-hidden' title={
                            <TitleComponent
                                title={'Bulk Messenger'}
                                avatar={'/profile.png'}
                            />

                        }>
                            <video className=" w-full h-full object-cover rounded-xl md:rounded-3xl" autoPlay muted loop>
                                <source src="/projects/fbm/demo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </FollowerPointerCard>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            <FollowerPointerCard title={
                                <TitleComponent
                                    title={'Bulk Messenger'}
                                    avatar={'/profile.png'}
                                />

                            }>
                                <div className=" relative flex flex-col gap-4 p-8 md:p-10 rounded-3xl" style={{ background: 'linear-gradient(144deg, rgba(41,31,162,1) 0%, rgba(7,5,102,1) 30%, rgba(3,3,57,1) 58%)' }}>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" absolute w-1/4 bottom-0 right-0 opacity-10 "><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>

                                    <h3 className=' text-4xl font-bold font-sans z-10 text-white'>Bulk Messenger</h3>
                                    <p className=' text-base z-10 text-white'>Developed a robust backend system using Node.js, Express.js
                                        and PostgreSQL to facilitate bulk messenger capabilities and
                                        CRM functionalities.</p>
                                    <p className=' text-base z-10 text-white'>
                                        Designed and deployed RESTful APIs to handle user
                                        authentication, agents’ management, and message sending
                                        ensuring scalability and efficiency.
                                    </p>
                                </div>
                            </FollowerPointerCard>


                            <div className=" relative flex flex-col justify-between p-10 gap-10 rounded-3xl border border-white/[.4] cursor-pointer" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" absolute w-1/4 bottom-0 right-0 opacity-10 "><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>


                                <Skills data={skillsData} padding={0} />
                                <h4 className=' text-3xl font-bold font-sans z-10 text-white'>Development Tools</h4>
                            </div>
                        </div>
                    </div>

                    <FeaturedProjects />


                    {/* Some more Projects  */}
                    <div className=' flex flex-col gap-10'>

                        <h3 className=' text-4xl font-bold font-sans z-10 text-white'>Some others worthy projects</h3>

                        <div className='others grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                            {miscProjects.map((project, idx) => (
                                <div className="border border-white/[.4] p-4 cursor-pointer rounded-3xl" key={project.id} >
                                    <div className="w-full h-60 relative overflow-hidden border border-white/[.4] transition-all duration-200 ease-in-out rounded-xl  ">
                                        <Image src={project.laptopImg} fill={true} className="object-cover w-full h-auto transition-all duration-200 ease-in-out transform hover:scale-110" alt={project.laptopImg} />
                                    </div>
                                    <div className=" pt-4 flex flex-col space-y-2  relative">

                                        <div className=' flex items-center justify-between gap-5'>
                                            <h4 className=" text-xl font-bold">{project.name}</h4>

                                            <ul className='flex flex-row items-center justify-end gap-2 '>
                                                {project.links.find(link => link.name === 'github') && (
                                                    <a href={project.links.find(link => link.name === 'github')?.link} target="_blank" rel="noopener noreferrer">
                                                        <li><FaGithub /></li>
                                                    </a>
                                                )}

                                                {project.links.find(link => link.name === 'preview') && (
                                                    <a href={project.links.find(link => link.name === 'preview')?.link} target="_blank" rel="noopener noreferrer">
                                                        <li><CiGlobe /></li>
                                                    </a>
                                                )}
                                            </ul>
                                        </div>
                                        <ul className="w-full flex items-center justify-start flex-wrap gap-2">
                                            {project.techology.map((tech, index) => (
                                                <li key={index} className="uppercase py-1 px-4 rounded-3xl text-xs border  border-white/[.4]">{tech}</li>
                                            ))}
                                        </ul>

                                        <div className="flex items-center justify-start gap-4">


                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}



const TitleComponent = ({
    title,
    avatar,
}: {
    title: string;
    avatar: string;
}) => (
    <div className="flex space-x-2 items-center">
        <Image
            src={avatar}
            height="20"
            width="20"
            alt="thumbnail"
            className="rounded-full border-2 border-white"
        />
        <p>{title}</p>
    </div>
);
export default Projects