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
         <div className='flex content-center text-5xl font-thin pt-20 pr-20 pl-20 pb-16 text-center'> 
         Hi guys! I'm Deja Moore. A software developer based in Richmond, VA that works to "Design with the User in Mind." 
         I've helped developed various projects and applications. 
         Being able to collabrate with a team in creating real-life applications has been extremely benefitcal to the start of my career. 
         My eagerness in continuing to grow as a developer as pushed me to learn more within the field as I work hands on.  
         The foundation of most of the applications I've developed have been the use of HTML & CSS, Javascript,& React JS. 
         Some additional tools I had experience with include daisyUI, Tailwind CSS, Express JS, Node JS, and Mongoose/MongoDB.
         </div>
       
       </div>

       <footer className='flex justify-center pt-20  text-white bg-gradient-to-r from-neutral to-secondary'>Copyright© 2024 Deja's Portfolio, All Right Reserved.</footer>
        </div>
    )
}