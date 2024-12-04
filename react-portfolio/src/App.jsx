import React from 'react'
import { useNavigate } from 'react-router-dom'
import headShot from './images/IMG_1879.jpg'
import linkedInLogo from './images/linkedInLogo.png'
import emailLogo from './images/emailLogo.png'
import githubLogo from './images/githubLogo.png'

function App() {
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

      {/* about me section */}
      <div className='flex justify-center  text-white bg-gradient-to-r from-neutral to-secondary'>
        <img src={headShot} alt='portrait' className='object-contain h-96 w-96 m-20'></img>
      </div>
      <div className='flex justify-center text-6xl font-black pt-10  text-white bg-gradient-to-r from-neutral to-secondary'>
        About Me
      </div>

      <div className='flex justify-center  text-white bg-gradient-to-r from-neutral to-secondary'>

        {/* edit text here */}
        <div className='flex justify-center text-justify text-5xl font-thin pt-20 pr-20 pl-20 pb-16'>  Hi guys! I'm Deja Moore. A software developer based in Richmond, VA that works to "Design with the User in Mind." 
         I've helped developed various projects and applications. 
         Being able to collabrate with a team in creating real-life applications has been extremely benefitcal to the start of my career. 
         My eagerness in continuing to grow as a developer as pushed me to learn more within the field as I work hands on.  
         The foundation of most of the applications I've developed have been the use of HTML & CSS, Javascript, React JS, & Python. 
         Some additional tools I had experience with include daisyUI, Tailwind CSS, Express JS, node JS, and Mongoose/MongoDB.
         </div>
      </div>

      

      {/* contact section */}
      <div className='flex justify-center text-6xl font-black pt-10 navContact  text-white bg-gradient-to-r from-neutral to-secondary'>
        Contact Me
      </div>
      {/* links to contact info  */}
      <div className='flex justify-evenly p-20  text-white bg-gradient-to-r from-neutral to-secondary'>
        {/* link to linkedIn */}
        <div>
          <a href='https://www.linkedin.com/in/deja-moore' target='_blank'><img src={linkedInLogo} alt='linkedIn logo'></img></a>
        </div>
        {/* link to email */}
        <div>
          <a href='mailto:deja.moore2018@gmail.com' target='_blank'><img src={emailLogo} alt='email logo'></img></a>
        </div>
      </div>

      <footer className='flex justify-center pt-20  text-white bg-gradient-to-r from-neutral to-secondary'>Copyright© 2024 Deja's Portfolio, All Right Reserved.</footer>

    </div>
  )
}
export default App
