import React from 'react';
import { useState } from 'react';
import headShot from './images/IMG_1879.jpg';
import mathLogo from './images/mathLogo.png';
import sephoraLogo from './images/sephoraLogo.jpg';
import ultaLogo from './images/ultaLogo.jpg';
import linkedInLogo from './images/linkedInLogo.png';
import emailLogo from './images/emailLogo.png';
import githubLogo from './images/githubLogo.png';

function App() {

  return (
    <div>
      {/* nav bar */}
      <div className="navbar bg-gradient-to-r from-neutral to-secondary text-white">
        <div className="flex-none">
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost rounded-full text-xl font-bold">Deja's Portfolio</a>
        </div>
        <div className="flex-2">
          <a className="btn btn-ghost rounded-full text-xl font-bold">Projects</a>
        </div>
        <div className="flex-3">
          <a className="btn btn-ghost rounded-full text-xl font-bold">Experience</a>
        </div>
        <div className="flex-4">
          <a className="btn btn-ghost rounded-full text-xl font-bold">About Me</a>
        </div>
        <div className="flex-4">
          <a className="btn btn-ghost rounded-full text-xl font-bold">Aspirations</a>
        </div>
        <div className="flex-4">
          <a className="btn btn-ghost rounded-full text-xl font-bold">Contact Me</a>
        </div>
      </div>
      {/* project section */}
      <div>
        <div className='flex justify-center text-6xl font-black pt-10 p-20 text-white bg-gradient-to-r from-neutral to-secondary'>
          Projects
        </div>

        <div className='flex justify-around pt-10'>
          {/* link to project 1 */}
          <div className='flex'>
            <a href='https://www.coolmathgames.com/' target='_blank'><img src={mathLogo} alt='cool math games website logo'></img></a>
          </div>
          {/* link to project 2 */}
          <div className='flex'>
            <a href='https://www.sephora.com/' target='_blank'><img src={sephoraLogo} alt='sephora logo'></img></a>
          </div>
          {/* link to project 3 */}
          <div className='flex'>
            <a href='https://www.ulta.com/' target='_blank'><img src={ultaLogo} alt='ulta logo'></img></a>
          </div>
          {/* link to project 4 */}
          <div className='flex'>
            <a href='https://github.com/DejaM24' target='_blank'><img src={githubLogo} alt='github logo'></img></a>
          </div>
        </div>
      </div>
      {/* experience section */}
      <div>
        <div className='flex justify-center text-6xl font-black pt-10  text-white bg-gradient-to-r from-neutral to-secondary'>
          Experience
        </div>

        <div className='flex content-center text-5xl font-thin  p-28  text-white bg-gradient-to-r from-neutral to-secondary'>
          I've experinece most my professional career in medicine. pharmaceuticals to be specific. Lorem ipsum dolor sit amet. Ut dolores dolor eum voluptatem voluptatem eum molestiae error est quaerat enim ea impedit deserunt ut nisi labore id tenetur quaerat? Qui dolores similique qui corporis reiciendis sit enim sequi sit facilis dolores aut vero cumque rem quae illum ut voluptatem architecto.
        </div>
      </div>
      {/* about me section */}
      <div className='flex justify-center text-6xl font-black pt-10  text-white bg-gradient-to-r from-neutral to-secondary'>
        About Me
      </div>

      <div className='flex justify-center  text-white bg-gradient-to-r from-neutral to-secondary'>
        <img src={headShot} alt='portrait' width='35%' height='35%' className='flex justify-start rounded-full ml-7 p-28'></img>
        {/* edit text here */}
        <div className='flex justify-end text-5xl font-thin ml-20 pt-20'>Welcome! I'm Deja Moore. Based in Richmond, VA. Designs with the user in mind. Lorem ipsum dolor sit amet. Ut dolores dolor eum voluptatem voluptatem eum molestiae error est quaerat enim ea impedit deserunt ut nisi labore id tenetur quaerat? Qui dolores similique qui corporis reiciendis sit enim sequi sit facilis dolores aut vero cumque rem quae illum ut voluptatem architecto.
        </div>
      </div>
      {/* ambitions section */}
      <div className='flex justify-center text-6xl font-black pt-10  text-white bg-gradient-to-r from-neutral to-secondary'>
      Aspirations
      </div>

      <div className='flex justify-end text-5xl font-thin p-28  text-white bg-gradient-to-r from-neutral to-secondary'>
        I've always had a passion for helping people. Even inspiring little kids that look like me. Lorem ipsum dolor sit amet. Ut dolores dolor eum voluptatem voluptatem eum molestiae error est quaerat enim ea impedit deserunt ut nisi labore id tenetur quaerat? Qui dolores similique qui corporis reiciendis sit enim sequi sit facilis dolores aut vero cumque rem quae illum ut voluptatem architecto.
      </div>
      {/* contact section */}
      <div className='flex justify-center text-6xl font-black pt-10 navContact  text-white bg-gradient-to-r from-neutral to-secondary'>
        Contact Me
      </div>
      {/* links to contact info  */}
      <div className='flex justify-evenly p-20  text-white bg-gradient-to-r from-neutral to-secondary'>
        {/* link to linkedIn */}
        <div>
          {/* why is the link not working??? */}
          <a href='www.linkedin.com/in/deja-moore/' target='_blank'><img src={linkedInLogo} alt='linkedIn logo'></img></a>
        </div>
        {/* link to email */}
        <div>
          <img src={emailLogo} alt='email logo'></img>
        </div>
      </div>

      <footer className='flex justify-center pt-20  text-white bg-gradient-to-r from-neutral to-secondary'>Copyright© 2024 Deja's Portfolio, All Right Reserved.</footer>

    </div>
  )
}

export default App