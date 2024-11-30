import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Experience() {
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
      
      {/* experience section */}
      <div>
         <div className='flex justify-center text-6xl font-black pt-10  text-white bg-gradient-to-r from-neutral to-secondary'>
           Experience
         </div>

         <div className='flex content-center text-5xl text-center font-thin  p-28  text-white bg-gradient-to-r from-neutral to-secondary'>
           Most of my professional career took place in medicine. I worked in pharmaceuticals to be more specific. Working through challenges throughout my career, I've really valued inquiring intricate skills along the way. I've been coding for roughly about a year now. Continuously buliding on different tools and languages to gain a broader understanding of reading, writing and debugging code. My niche lies within front-end development, creating user friendly applications that are responsive and aesthetically pleasing. I want users to be able to maximize a product's functionality that contributes to their overall user experience. My hope is to expand my career by improving the user experience through the use of technology. The foundation of most of the applications I've developed have been the use of Javascript, React, Vite, daisyUI, and Tailwind CSS.
         </div>
       </div>
       
       <footer className='flex justify-center pt-20  text-white bg-gradient-to-r from-neutral to-secondary'>Copyright© 2024 Deja's Portfolio, All Right Reserved.</footer>
        </div>
    )
}