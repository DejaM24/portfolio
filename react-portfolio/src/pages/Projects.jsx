import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
    const navigate = useNavigate();

    function navigateHome() {
        navigate('/')
    }

    function navigateProjects() {
        navigate('/projects')
    }

    function navigateExperience() {
        navigate('/experience')
    }

    function navigateAboutMe() {
        navigate('/aboutme')
    }

    return (
        <div>
            {/* nav bar */}
            <div className="navbar bg-gradient-to-r from-neutral to-secondary text-white">
                <div className="flex-none">
                </div>
                <div className="flex-1">
                    <a onClick={() => navigateHome()} className="btn btn-ghost rounded-full text-xl font-bold ">Deja's Portfolio</a>
                </div>
                <div className="flex-2">
                    <a onClick={() => navigateProjects()} className="btn btn-ghost rounded-full text-xl font-bold">Projects</a>
                </div>
                <div className="flex-3">
                    <a onClick={() => navigateExperience()} className="btn btn-ghost rounded-full text-xl font-bold">Experience</a>
                </div>
                <div className="flex-4">
                    <a onClick={() => navigateAboutMe()} className="btn btn-ghost rounded-full text-xl font-bold">About Me</a>
                </div>
            </div>

            {/* project header */}
            <div>
                <div className='flex justify-center text-6xl font-black pt-10 p-20 text-white bg-gradient-to-r from-neutral to-secondary'>
                    Projects
                </div>
            </div>

            {/* create links */}
            <div className='flex justify-center text-white bg-gradient-to-r from-neutral to-secondary'>
                <div className='flex flex-col bg-transparent shadow-2xl text-2xl text-center font-thin p-14 text-white mr-20 ml-20 rounded-3xl bg-gradient-to-r from-neutral to-secondary'>
                    <div className="mb-10">
                        <h1 className='text-5xl font-bold underline'>Project Overview</h1>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-4xl font-bold hover:underline'>React ChitChat App</h2>
                        <p>A real-time chat application built with React JS and MongoDB, allowing users to communicate instantly.</p>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-4xl font-bold hover:underline'>Juice Press</h2>
                        <p>An intranet platform for a juice company, featuring a user-friendly interface with the intentions to offer a more seemless way of connecting various staff throughout the company.</p>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-4xl font-bold hover:underline'>Socialbook</h2>
                        <p>A social networking platform where users can create profiles, post updates, and connect with friends.</p>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-4xl font-bold hover:underline'>Jeopardy Board</h2>
                        <p>An interactive Jeopardy game board built with HTML, CSS, and JavaScript, perfect for educational purposes.</p>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-4xl font-bold hover:underline'>Ni</h2>
                        <p>An upcoming marketplace that promotes black-owned businesses, financial literacy, products, and investments.</p>
                    </div>
                </div>
            </div>

            {/* reword so github and project links are separate */}
            <div>
                <div className="flex justify-center text-3xl font-black pt-10 p-20 text-white bg-gradient-to-r from-neutral to-secondary">
                    Scroll below to see projects through GitHub
                </div>
            </div>

            {/* project carousel */}
            <div className='flex flex-col carousel carousel-vertical h-96 text-2xl font-bold text-white bg-gradient-to-r from-neutral to-secondary'>
                <div className="carousel-item h-full flex justify-center m-96 ">{/* link to project 1 */}
                    <div className='bg-transparent shadow-2xl p-10 hover:underline grid h-full w-full place-content-center rounded-box animate-bounce'>
                        <a href='https://juicepress-capstone-project-client-side.onrender.com/' target='_blank' className='text-4xl'>Juice Press</a>
                    </div>
                </div>
                <div className="carousel-item h-full flex justify-center m-96"> {/* link to project 2 */}
                    <div className='bg-transparent shadow-2xl p-10 hover:underline grid h-full w-full place-content-center rounded-box'>
                        <a href='https://github.com/DejaM24' target='_blank' className='text-4xl'>Upcoming Project #2</a>
                    </div>
                </div>
                <div className="carousel-item h-full flex justify-center m-96">{/* link to project 3 */}
                    <div className='bg-transparent shadow-2xl p-10 hover:underline grid h-full w-full place-content-center rounded-box'>
                        <a href='https://github.com/DejaM24' target='_blank' className='text-4xl'>Upcoming Project #3</a>
                    </div>
                </div>
                <div className="carousel-item h-full flex justify-center m-96"> {/* link to project 4 */}
                    <div className='bg-transparent shadow-2xl p-10 hover:underline grid h-full w-full place-content-center rounded-box'>
                        <a href='https://github.com/DejaM24' target='_blank' className='text-4xl'>Upcoming Project #4</a>
                    </div>
                </div>
                <div className="carousel-item h-full flex justify-center m-96">{/* link to project 5 */}
                    <div className='bg-transparent shadow-2xl p-10 hover:underline grid h-full w-full place-content-center rounded-box'>
                        <a href='https://github.com/DejaM24' target='_blank' className='text-4xl'>Upcoming Project #5</a>
                    </div>
                </div>
            </div>

            <footer className='flex justify-center pt-20  text-white bg-gradient-to-r from-neutral to-secondary'>Copyright© 2024 Deja's Portfolio, All Right Reserved.</footer>
        </div>
    )
}