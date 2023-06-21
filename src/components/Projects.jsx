import React from "react"
import { projects } from "../data"

export default function Projects() {
    
    return (
        <section id="projects" className="text-gray-400 bg-gray-900">
            <div className="mt-12 container px-5 py-10 text-center mx-auto">
                <div className="flex flex-col w-full">
                    <svg className="h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 
                    39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 
                    256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 
                    0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 
                    112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 
                    256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                    <h1 className="text-3xl mt-4 font-medium title-font text-white">
                        Apps I've Built
                    </h1>
                    <p className="mt-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-16 my-16 mx-8 md:mx-32 cursor-pointer projects">
                    {projects.map((project) => {
                      return  <a 
                            href={project.link}
                            key={project.image}
                        >
                            <div className="relative">
                                <img src={project.image} 
                                    className="project-img absolute inset-0 w-full h-full object-cover 
                                    object-center rounded-lg" 
                                />
                                <div className="border-4 border-gray-800 bg-gray-900 w-full h-full py-12 px-6 relative 
                        opacity-0 hover:opacity-100 z-50 project-tile">
                                    <p className="text-green-400">{project.title}</p>
                                    <p className="font-bold text-white">{project.subtitle}</p>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </a>
                    })}
                </div>
            </div>
        </section>
    )
}