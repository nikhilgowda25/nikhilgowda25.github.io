import React from "react"

export default function About() {
    return (
        <section id="about">
            <div className="container p-8 flex flex-col items-center justify-center md:flex-row gap-8">
                <div>
                    <h1 className="mt-8 text-2xl text-center font-bold text-white">
                        Hi, I'm Nikhil H M.
                        <br/>
                        I love to build amazing apps.
                    </h1>
                    <p className="mt-4 text-center">
                    4+ years of overall IT experience and 2+ years of experience as React Developer with 
                    hands- on experience in identifying web-based user interactions along with designing & 
                    implementing highly-responsive user interface components by deploying React concepts.
                    Proficient in writing application interface code via Java script and React JS workflows. 
                    Adept at monitoring & maintaining frontend performance and troubleshooting & debugging 
                    the same to bolster overall performance.
                    </p>
                    <div className="mt-6 flex flex-row justify-center items-center gap-4">
                        <a href="#contact"
                        className="bg-green-500 text-white px-4 py-2 text-lg rounded hover:bg-green-600 cursor-pointer">
                            Work With Me
                        </a>
                        <a href="#projects"
                        className="bg-gray-800 text-gray-400 hover:bg-gray-700 px-4 py-2 rounded cursor-pointer text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                    
                <div>
                    <img 
                        src="./profileLogo.jpeg"
                        alt="Nikhil H M"
                        className="w-64 mt-8 md:w-full md:h-full rounded-2xl"
                    />
                </div>
            </div>
        </section>
    )
}