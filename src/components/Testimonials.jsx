import React from "react";
import { TerminalIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
    return (
        <div id="testimonials" className="flex flex-col justify-center items-center mt-24">
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path className="fill-current" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
            <h1 className="font-semibold text-3xl text-gray-100 mt-4">Client Testimonials</h1>
            <div className="grid lg:grid-cols-2">
                {testimonials.map(test => (
                    <div key={test.image} className="bg-gray-800 m-12 p-8 rounded-lg">
                            <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                            <p className="text-center">{test.quote}</p>
                            <div className="flex justify-center items-center mt-6">
                                <div>
                                    <img src={test.image} className="rounded-full h-12 w-12"/>
                                </div>
                                <div className="ml-4 flex flex-col items-center">
                                    <p>{test.name}</p>
                                    <p>{test.company}</p>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}