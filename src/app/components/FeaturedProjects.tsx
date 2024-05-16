"use client"

import React from 'react'
import Image from 'next/image'
import { projects } from '../utils/data'


const FeaturedProjects = () => {
    const featuredProjects = projects.filter((project) => project.category === 'recent' || project.category === 'featured')
    return (
        <div className={`flex items-center justify-start flex-col flex-wrap `}>
            {
                featuredProjects.map((project, index) => (
                    <div className={`w-full `} key={project.id} id={project.category}>
                        <div className={` w-full grid grid-cols-1 md:grid-cols-2 `}>
                            <div className={`w-full h-full py-12 px-5 flex items-center justify-center flex-col text-center gap-5 sm:items-start sm:justify-start sm:text-left`}>
                                <span className={`py-2 px-5 rounded-3xl bg-[#fa571f] text-base  mb-4 capitalize`} >
                                    {project.category} Project
                                </span>
                                <h4 className=' text-2xl'>{project.name}</h4>
                                <ul className={`w-[80%] flex items-center justify-center flex-wrap gap-2 sm:items-start sm:justify-start`}>
                                    {project.techology.map((tech, index) => (
                                        <li key={index} className='border border-white/45 py-1 px-2 rounded-3xl text-xs uppercase'>{tech}</li>
                                    ))}
                                </ul>
                                <div className={`flex items-start justify-start flex-col text-left`}>
                                    <span className={`text-xl font-semibold my-5`}>Role</span>
                                    <ul className=' flex items-start justify-start flex-col gap-2 ml-4'>
                                        {project.desc.map((desc, index) => (
                                            <li key={index} className=' text-base list-disc'>{desc}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={`flex items-center justify-center gap-2`}>
                                    {project.links.find(link => link.name === 'github') && (
                                        <a href={project.links.find(link => link.name === 'github')?.link} target="_blank" rel="noopener noreferrer">
                                            <button className='flex items-center justify-center border-0 bg-[#fa571f] text-white py-1 px-2 rounded-3xl text-xs gap-1 cursor-pointer'>
                                                Github
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                            </button>
                                        </a>
                                    )}
                                    {project.links.find(link => link.name === 'preview') && (
                                        <a href={project.links.find(link => link.name === 'preview')?.link} target="_blank" rel="noopener noreferrer">
                                            <button className='flex items-center justify-center border-0 bg-[#fa571f] text-white py-1 px-2 rounded-3xl text-xs gap-1 cursor-pointer'>
                                                Preview
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" /></svg>
                                            </button>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className={`w-full h-full pt-12 pr-5 pl-5 overflow-hidden md:flex md:items-start md:justify-center`} >
                                <div className={`w-full h-[80%] min-h-96 overflow-hidden relative border border-white/45 rounded-2xl sm:-mr-24`}>
                                    <Image src={project.laptopImg} fill={true} className={`object-cover object-left w-full h-auto transition-all duration-200 ease-in-out`} alt={project.laptopImg} />
                                </div>
                            </div>
                        </div>
                        <div className={`flex items-center justify-center flex-col`}>
                            <div className={`pt-10  pb-5`}>
                                <h4 className='text-white flex flex-col text-3xl md:text-4xl'><span className=' uppercase text-xl text-center text-[#fa571f]'>Crafting for</span> Mobile Excellence</h4>
                            </div>
                            {project.mobileImgs.map((img, index) => (
                                <div className={`w-[90%] overflow-hidden relative`} key={index}>
                                    <Image src={img} width={1000} height={1000} className={`object-contain w-full relative`} alt={img} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default FeaturedProjects