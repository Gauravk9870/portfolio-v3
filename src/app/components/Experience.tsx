const Experience = () => {

    return (
        <div className={` py-24 bg-[#111111]`} >
            <div className={`h-full py-0 px-1rem md:py-10 md:px-5 flex flex-col gap-10`}>
                <div className={`flex items-center justify-center flex-col`}>
                    <h3 className=" text-center font-semibold text-base text-[#fa571f] uppercase">My Qualification</h3>
                    <h2 className=" text-center font-semibold text-5xl">Awesome Journey</h2>
                </div>
                <div className={`flex items-center justify-start flex-col`}>
                    <div className={`flex items-center justify-center flex-col`} id='experience'>
                        <div className={`p-5`}>
                            <h4 className=" text-center text-base uppercase text-[#fa571f]">Experience</h4>
                            <h2 className=" text-center font-semibold text-xl capitalize">Full Stack Developer</h2>
                            <h3 className=" text-center text-base">Underpin Services</h3>
                        </div>
                        <span className={` text-xs`}>June 2023 - Present</span>
                        <span className={` w-5 h-5 bg-[#fa571f] border border-white rounded-[50%]`}></span>
                    </div>

                    <div className={` w-full flex flex-row`}>
                        <div className={` relative flex-1 flex flex-col items-end text-right`}>
                            <div className={` p-5 h-52 flex flex-col items-end justify-center`}>
                            </div>
                            <div className={` border-r border-white p-5 h-52 flex flex-col items-end justify-center`}>
                                <span className={` text-xs`}>Jan 2023 - May 2023</span>
                                <span className={`w-5 h-5 bg-[#fa571f] absolute border border-white rounded-[50%] -right-[0.625rem]`}></span>
                            </div>
                            <div className={` p-5 h-52 flex flex-col items-end justify-center`}>
                                <h4 className=" text-base uppercase text-[#fa571f]">Experience</h4>
                                <h2 className=" font-semibold text-xl capitalize">Web Development Intern </h2>
                                <h3 className=" text-base">The Sparks Foundation</h3>
                            </div>
                            <div className={` border-r border-white p-5 h-52 flex flex-col items-end justify-center`}>
                                <span className={`text-xs`}>Sep 2020 - July 2023</span>
                                <span className={`w-5 h-5 bg-[#fa571f] absolute border border-white rounded-[50%] -right-[0.625rem]`}></span>

                            </div>
                            <div className={` p-5 h-52 flex flex-col items-end justify-center`}>
                                <h4 className=" text-base uppercase text-[#fa571f]">Education</h4>
                                <h2 className=" font-semibold text-xl capitalize">Class XII - Commerce</h2>
                                <h3 className=" text-base">Government Boys Senior Secondary School</h3>
                            </div>
                            <div className={` border-r border-white p-5 h-52 flex flex-col items-end justify-center`}>
                            </div>

                        </div>
                        <div className={` flex-1 flex flex-col items-start text-left relative`}>
                            <div className={`p-5 h-52 flex flex-col items-start justify-center border-l border-white -ml-[1px]`}>
                            </div>
                            <div className={`p-5 h-52 flex flex-col items-start justify-center`}>
                                <h4 className=" text-base uppercase text-[#fa571f]">Experience</h4>
                                <h2 className=" font-semibold text-xl capitalize">Java FullStack Development Trainee </h2>
                                <h3 className=" text-base">JSpiders</h3>
                            </div>
                            <div className={`p-5 h-52 flex flex-col items-start justify-center border-l border-white -ml-[1px]`}>
                                <span className={`w-5 h-5 absolute bg-[#fa571f] border border-white rounded-[50%] -left-[0.625rem]`}></span>

                                <span className={`text-xs`}>Jan 2023 - Jan 2023</span>
                            </div>
                            <div className={`p-5 h-52 flex flex-col items-start justify-center`} id='education'>
                                <h4 className=" text-base uppercase text-[#fa571f]">Education</h4>
                                <h2 className=" font-semibold text-xl capitalize">bachelors of computer applications </h2>
                                <h3 className=" text-base">St. Andrews Institute of Technology And Management</h3>
                            </div>
                            <div className={`p-5 h-52 flex flex-col items-start justify-center border-l border-white -ml-[1px]`}>
                                <span className={`w-5 h-5 absolute bg-[#fa571f] border border-white rounded-[50%] -left-[0.625rem]`}></span>

                                <span className={`text-xs`}>April 2019 - March 2020</span>
                            </div>
                            <div className={`p-5 h-52 flex flex-col items-start justify-center`}>
                            </div>
                        </div>
                    </div>
                    <div className={` flex items-center justify-center flex-col text-center`}>
                        <span className={`w-5 h-5 bg-[#fa571f] border border-white rounded-[50%]`}></span>
                        <span className={`text-xs`}>April 2017 - March 2018</span>
                        <div className={`p-5`}>
                            <h4 className=" text-base uppercase text-[#fa571f]">Education</h4>
                            <h2 className=" font-semibold text-xl capitalize">Class X</h2>
                            <h3 className=" text-base">Gyan Jyoti Public School</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience