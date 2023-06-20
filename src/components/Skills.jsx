import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <div id="skills">
            <div className="flex justify-center items-center flex-col gap-4 px-8">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path className="fill-current" d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"/></svg>
                <h1 className="text-3xl font-semibold text-gray-100">Skills & Technologies</h1>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit ipsa delectus eum quo voluptas aspernatur accusantium distinctio possimus est.</p>
            </div>
            <div className="mx-6 my-16 grid lg:grid-cols-2 gap-4">
                {skills.map(skill => (
                    <div className="flex items-center p-4 bg-gray-800 rounded">
                        <div className="text-green-500">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path className="fill-current" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                        </div>
                        <div className="ml-4 text-gray-100 font-semibold">
                            {skill}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}