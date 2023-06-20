import React from 'react'

export default function Navbar() {
    return (
        <header className='bg-gray-800 p-6'>
            <div className='flex flex-col justify-center items-center gap-4 md:flex-row'>
                <div>
                    <a href='#about' className='text-white text-xl font-bold '>Nikhil H M</a>
                </div>
                <div className='text-gray-400 flex gap-4 md:mr-auto'>
                    <a href='#projects'>Past Work</a>
                    <a href='#skills'>Skills</a>
                    <a href='#testimonials'>Testimonials</a>
                </div>
                <div className='text-gray-400'>
                    <a href='#contact'>Hire Me →</a>
                </div>
            </div>
        </header>
    )
}