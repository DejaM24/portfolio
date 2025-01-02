import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Experience() {
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

  function navigateContactMe() {
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
          <a onClick={() => navigateExperience()} className="btn btn-ghost rounded-full text-xl font-bold">Experience</a>
        </div>
        <div className="flex-4">
          <a onClick={() => navigateAboutMe()} className="btn btn-ghost rounded-full text-xl font-bold">About Me</a>
        </div>
        <div className="flex-4">
          <a onClick={() => navigateAspirations()} className="btn btn-ghost rounded-full text-xl font-bold">Aspirations</a>
        </div>
      </div>

      {/* experience section */}
      <div className='bg-gradient-to-r from-neutral to-secondary'>
        <div className='flex justify-center text-6xl font-black pt-10 pb-10 text-white bg-gradient-to-r from-neutral to-secondary'>
          Experience
        </div>

        <div className='flex justify-center  text-white bg-gradient-to-r from-neutral to-secondary'>
          <div className='flex content-center bg-transparent shadow-2xl text-5xl text-center font-thin p-14 text-white mr-20 ml-20 rounded-3xl bg-gradient-to-r from-neutral to-secondary'>
            I've been a developer for roughly 12 months.
            Constantly buliding my knowledge and experinece on reading, writing and debugging code.
            I'm always seeking to gain a broader understanding of the coding languages I already know, while also learning new ones.
            My niche lies within front-end development, creating user friendly applications that are responsive and aesthetically pleasing.
            I want users to be able to maximize a product's functionality that contributes to the overall user experience.
            My hope is to expand my professional career by improving user experience through the use of technology.
          </div>
        </div>

      </div>

      <footer className='flex justify-center pt-20  text-white bg-gradient-to-r from-neutral to-secondary'>Copyright© 2024 Deja's Portfolio, All Right Reserved.</footer>
    </div>
  )
}