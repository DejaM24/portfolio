import React from 'react';
// import mathLogo from './images/mathLogo.png'
// import sephoraLogo from './images/sephoraLogo.jpg'
// import ultaLogo from './images/ultaLogo.jpg'
// import githubLogo from './images/githubLogo.png'
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
                    <a onClick={() => navigateHome()} className="btn btn-ghost rounded-full text-xl font-bold">Deja's Portfolio</a>
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

            {/* project section */}
            <div>
                <div className='flex justify-center text-6xl font-black pt-10 p-20 text-white bg-gradient-to-r from-neutral to-secondary'>
                    Projects
                </div>
            </div>

            <div className='flex flex-col text-2xl font-bold text-white bg-gradient-to-r from-neutral to-secondary'>
                {/* link to project 1 */}
                <div className='flex justify-center p-10 hover:underline'>
                    <a href='https://www.coolmathgames.com/' target='_blank'>Cool Math Games</a>
                </div>
                {/* link to project 2 */}
                <div className='flex justify-center p-10 hover:underline'>
                    <a href='https://www.sephora.com/' target='_blank'>Sephora</a>
                </div>
                {/* link to project 3 */}
                <div className='flex justify-center p-10 hover:underline'>
                    <a href='https://www.ulta.com/' target='_blank'>Ulta</a>
                </div>
                {/* link to project 4 */}
                <div className='flex justify-center p-10 hover:underline'>
                    <a href='https://github.com/DejaM24' target='_blank'>GitHub</a>
                </div>
                {/* link to project 5 */}
                <div className='flex justify-center p-10 hover:underline'>
                    <a href='https://placecats.com/' target='_blank'>Place Cats</a>
                </div>
            </div>
      

         
            <footer className='flex justify-center pt-20  text-white bg-gradient-to-r from-neutral to-secondary'>Copyright© 2024 Deja's Portfolio, All Right Reserved.</footer>
        </div>
    )
}