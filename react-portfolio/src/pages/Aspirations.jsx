import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Aspirations() {
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
        <div className="flex-4">
          <a onClick={() => navigateContactMe()} className="btn btn-ghost rounded-full text-xl font-bold">Contact Me</a>
        </div>
      </div>
      
      {/* ambitions section */}
      <div className='flex justify-center text-6xl font-black pt-10  text-white bg-gradient-to-r from-neutral to-secondary'>
         Aspirations
       </div>

      <div className='flex justify-end text-5xl text-center font-thin p-28  text-white bg-gradient-to-r from-neutral to-secondary'>
      I think about the impact I want to have on the world. I’ve come to realize that I truly want to make a lasting impression on the lives of our future generation. I've always had a passion for helping people. Through years of volunteering at food banks, schools, and retirement homes, I've come to understand that it's our duty as a society to take care of each other. Furthermore, I want to inspire little kids that look like me. Whether that's through outreach, innovation, or collaboration, I want to showcase the importance of community. So that, future generations will grasp what it truly means to work towards something bigger than themselves.
       </div>

       <footer className='flex justify-center pt-20  text-white bg-gradient-to-r from-neutral to-secondary'>Copyright© 2024 Deja's Portfolio, All Right Reserved.</footer>
        </div>
    )
}