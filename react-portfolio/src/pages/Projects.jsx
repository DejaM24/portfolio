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

    function navigateAspirations() {
        navigate('/aspirations')
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
                <div className="flex-4">
                    <a onClick={() => navigateAspirations()} className="btn btn-ghost rounded-full text-xl font-bold">Aspirations</a>
                </div>
            </div>

            {/* project header */}
            <div>
                <div className='flex justify-center text-6xl font-black pt-10 p-20 text-white bg-gradient-to-r from-neutral to-secondary'>
                    Projects
                </div>
            </div>

            <div>
               <div className="flex justify-center text-3xl font-black pt-10 p-20 text-white bg-gradient-to-r from-neutral to-secondary">
                Scroll through to see upcoming projects through GitHub
               </div>
            </div>

            {/* project carousel */}
            <div className='flex flex-col carousel carousel-vertical h-96 text-2xl font-bold text-white bg-gradient-to-r from-neutral to-secondary'>
                <div className="carousel-item h-full flex justify-center m-60">{/* link to project 1 */}
                    <div className='bg-red-900 p-10 hover:underline grid h-full w-full place-content-center rounded-box'>
                        <a href='https://github.com/DejaM24' target='_blank'>Upcoming Project #1</a>
                    </div>
                </div>
                <div className="carousel-item h-full flex justify-center m-60"> {/* link to project 2 */}
                    <div className='bg-orange-900 p-10 hover:underline grid h-full w-full place-content-center rounded-box'>
                        <a href='https://github.com/DejaM24' target='_blank'>Upcoming Project #2</a>
                    </div>
                </div>
                <div className="carousel-item h-full flex justify-center m-60">{/* link to project 3 */}
                    <div className='bg-yellow-900 p-10 hover:underline grid h-full w-full place-content-center rounded-box'>
                        <a href='https://github.com/DejaM24' target='_blank'>Upcoming Project #3</a>
                    </div>
                </div>
                <div className="carousel-item h-full flex justify-center m-60"> {/* link to project 4 */}
                    <div className='bg-green-900 p-10 hover:underline grid h-full w-full place-content-center rounded-box'>
                        <a href='https://github.com/DejaM24' target='_blank'>Upcoming Project #4</a>
                    </div>
                </div>
                <div className="carousel-item h-full flex justify-center m-60">{/* link to project 5 */}
                    <div className='bg-blue-900 p-10 hover:underline grid h-full w-full place-content-center rounded-box'>
                        <a href='https://github.com/DejaM24' target='_blank'>Upcoming Project #5</a>
                    </div>
                </div>
            </div>

            <footer className='flex justify-center pt-20  text-white bg-gradient-to-r from-neutral to-secondary'>Copyright© 2024 Deja's Portfolio, All Right Reserved.</footer>
        </div>
    )
}