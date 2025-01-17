import React from 'react';
import { useNavigate } from 'react-router-dom';
import headShot from './images/IMG_1879.jpg';
import linkedInLogo from './images/3536569.png';
import emailLogo from './images/542689.png';
import './App.css';

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
      </div>

      {/* slogan banner */}
      {/* <div className='textEdit'>Let's Start Designing with the User in Mind!
      </div> */}

      {/* test block */}
      {/* <div className='bg-gradient-to-r from-neutral to-secondary'>
        <div className="rounded-md p-10 bg-white mr-32 ml-32 shadow-2xl text-violet-950 font-thin text-5xl">Let's Start Designing with the User in Mind!</div>
      </div> */}

      {/* about me section */}
      <div className='flex justify-center  text-white bg-gradient-to-r from-neutral to-secondary'>
        <img src={headShot} alt='portrait' className='object-contain h-96 w-96 m-20 '></img>
      </div>
      <div className='flex justify-center text-6xl font-black pt-10 pb-20 text-white bg-gradient-to-r from-neutral to-secondary'>
      Introduction
      </div>

      <div className='flex justify-center  text-white bg-gradient-to-r from-neutral to-secondary'>

        {/* edit text here */}
        <div className='rounded-3xl p-10 bg-transparent mr-32 ml-32 shadow-2xl text-white font-thin text-5xl text-center'>  Hi guys! I'm Deja Moore. A software developer based in Richmond, VA that works to "Design with the User in Mind."
          I've worked on developing multiple real-life projects and applications.
          Collabrating with others has definitely contribute to my growth in blossoming into the developer I am today.
          My eagerness to grow as a developer has pushed me to learn more within the field as I continue to work on more real-life projects.
          {/* The foundation of most applications I've developed have been the use of HTML & CSS, & Javascript. */}
          {/* Some additional tools I've utilized include daisyUI, Tailwind CSS, React JS, Express JS, Node JS, and Mongoose/MongoDB. */}
        </div>
      </div>



      {/* contact section */}
      <div className='flex justify-center text-6xl font-black pt-20 navContact text-white bg-gradient-to-r from-neutral to-secondary'>
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
