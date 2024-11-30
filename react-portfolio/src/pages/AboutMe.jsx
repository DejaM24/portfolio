import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AboutMe() {
    const navigate = useNavigate();

    function navigateHome() {
      navigate('/')
    }
  
    function navigateProjects() {
      navigate('/projects')
    }
  
    function navigateExperience(){
      navigate('/experience')
    }
  
    function navigateAboutMe(){
      navigate('/aboutme')
    }
  
    function navigateAspirations(){
      navigate('/aspirations')
    }
  
    function navigateContactMe(){
      navigate('/contactme')
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
          <a onClick={() => navigateExperience()}className="btn btn-ghost rounded-full text-xl font-bold">Experience</a>
        </div>
        <div className="flex-4">
          <a onClick={() => navigateAboutMe()}className="btn btn-ghost rounded-full text-xl font-bold">About Me</a>
        </div>
        <div className="flex-4">
          <a onClick={() => navigateAspirations()} className="btn btn-ghost rounded-full text-xl font-bold">Aspirations</a>
        </div>
      </div>
      
      {/* about me section */}
      <div className='flex justify-center text-6xl font-black pt-10  text-white bg-gradient-to-r from-neutral to-secondary'>
         About Me
       </div>
        {/* why doesn't images import? */}
       <div className='flex justify-center  text-white bg-gradient-to-r from-neutral to-secondary'>
        {/* <img src={headShot} alt='portrait' width='24%' height='24%' className='flex rounded-full ml-20 pt-24 pb-24 scale-y-75'></img> */}

         {/* edit text here */}
         <div className='flex content-center text-justify text-5xl font-thin pt-20 pr-20 pl-20 pb-16'> Hi guys! I'm Deja Moore. A software developer based in Richmond, VA that works to "Designing with the user in mind." I spend most of my time being a loving auntie to a sweet, adorable, little Maltipoo by the name of Leo. Who's personality resembles an energized bunny but mimics a spirit of an old soul. I tend to spend my spare time in nature and exploring nature trails. I also find  joy in traveling and experiencing different cultures. Most of my family and friends will tell you, if I'm not working, I'm planning my next trip. I've been able to experienced different places like Puerto Rico, Mexico, and the Dominican Republic.  
         </div>
         {/* <img src={leo} alt='picture of a dog' width='20%' height='20%' className='flex rounded-full m-7 p-28'></img> */}
       </div>

       <footer className='flex justify-center pt-20  text-white bg-gradient-to-r from-neutral to-secondary'>Copyright© 2024 Deja's Portfolio, All Right Reserved.</footer>
        </div>
    )
}