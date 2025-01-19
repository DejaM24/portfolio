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

      {/* experience section */}
      <div className='bg-gradient-to-r from-neutral to-secondary'>
        <div className='flex justify-center text-6xl font-black pt-10 pb-10 text-white bg-gradient-to-r from-neutral to-secondary'>
          Experience
        </div>


        <div className='flex flex-row justify-evenly'>
          <div className='flex text-white pt-20'>
            <div className='flex flex-col bg-transparent shadow-2xl text-2xl text-center font-thin p-14 text-white rounded-3xl bg-gradient-to-r from-secondary to-neutral hover:scale-110'>
              <div className=" text-black font-black">JavaScript/React JS</div>
              <progress className="progress  w-56 " value="80" max="100"></progress>
            </div>
          </div>

          <div className='flex text-white pt-20'>
            <div className='flex flex-col bg-transparent shadow-2xl text-2xl text-center font-thin p-14 text-white rounded-3xl bg-gradient-to-r from-secondary to-neutral hover:scale-110'>
              <div className=" text-black font-black">HTML</div>
              <progress className="progress  w-56 " value="70" max="100"></progress>
            </div>
          </div>

          <div className='flex text-white pt-20'>
            <div className='flex flex-col bg-transparent shadow-2xl text-2xl text-center font-thin p-14 text-white rounded-3xl bg-gradient-to-r from-secondary to-neutral hover:scale-110'>
              <div className=" text-black font-black">CSS</div>
              <progress className="progress  w-56 " value="70" max="100"></progress>
            </div>
          </div>

          <div className='flex text-white pt-20'>
            <div className='flex flex-col bg-transparent shadow-2xl text-2xl text-center font-thin p-14 text-white rounded-3xl bg-gradient-to-r from-secondary to-neutral hover:scale-110'>
              <div className=" text-black font-black">Python</div>
              <progress className="progress  w-56 " value="10" max="100"></progress>
            </div>
          </div>
        </div>




        <div className='flex justify-center text-white bg-gradient-to-r from-neutral to-secondary pt-20'>
        <div className='flex flex-row bg-transparent shadow-2xl text-2xl text-center font-thin p-14 text-white mr-20 ml-20 rounded-3xl bg-gradient-to-r from-secondary to-neutral'>
            <div className="flex flex-col">
            <div className="mb-10">
              <h1 className='text-5xl font-bold underline'>Skills</h1>
            </div>
            <ul>
              <div className=" space-y-10">
                <li className='text-4xl font-thin list-disc '>Web Development</li>
                <li className='text-4xl font-thin list-disc '>Analytical</li>
                <li className='text-4xl font-thin list-disc '>Problem-Solving</li>
                <li className='text-4xl font-thin list-disc '>Organized</li>
                <li className='text-4xl font-thin list-disc '>Resourceful</li>
                <li className='text-4xl font-thin list-disc '>Adaptable</li>
                <li className='text-4xl font-thin list-disc '>Detail-Oriented</li>
                <li className='text-4xl font-thin list-disc '>Responsive Design</li>
                <li className='text-4xl font-thin list-disc '>Front-End</li>
                <li className='text-4xl font-thin list-disc '>Collaboration</li>  
                </div>
            </ul>
          </div>
            </div>

          <div className='flex flex-row bg-transparent shadow-2xl text-2xl text-center font-thin p-14 text-white mr-20 ml-20 rounded-3xl bg-gradient-to-r from-secondary to-neutral'>
            <div className="flex flex-col">
            <div className="mb-10">
              <h1 className='text-5xl font-bold underline'>Competencies/Tools</h1>
            </div>
            <ul>
              <div className="mb-10 space-y-4">
                <li className='text-4xl font-thin list-disc '>Agile Framework & Methodologies</li>
                <li className='text-4xl font-thin list-disc '>Software Development Lifecycle</li>
                <li className='text-4xl font-thin list-disc '>RESTful API/JSON</li>
                <li className='text-4xl font-thin list-disc '>Debugging</li>
                <li className='text-4xl font-thin list-disc '>Troubleshooting</li>
                <li className='text-4xl font-thin list-disc '>GitHub</li>
                <li className='text-4xl font-thin list-disc '>VS Code</li>
                <li className='text-4xl font-thin list-disc '>Postman</li>
                <li className='text-4xl font-thin list-disc '>MongoDB</li>
                <li className='text-4xl font-thin list-disc '>Express</li>
                <li className='text-4xl font-thin list-disc '>Node.js</li>
                <li className='text-4xl font-thin list-disc '>AI</li>
                <li className='text-4xl font-thin list-disc '>Tailwind CSS</li>
                <li className='text-4xl font-thin list-disc '>daisy UI</li>
              </div>
            </ul>
          </div>
            </div>
            
        </div>



        <div className='flex justify-center text-white bg-gradient-to-r from-neutral to-secondary pt-20'>
          <div className='flex flex-col bg-transparent shadow-2xl text-2xl text-center font-thin p-14 text-white mr-20 ml-20 rounded-3xl bg-gradient-to-r from-neutral to-secondary'>
            <div className="mb-10">
              <h1 className='text-5xl font-bold underline'>Work History</h1>
            </div>
            <ul>
              <div className="mb-10">
                <li className='text-4xl font-bold list-disc'>Upright Education</li>
                <p>Explored the SDLC while learning full stack web development that led into an intership through Juice Press where an user-responsive and friendly intranet was developed</p>
              </div>
              <div className="mb-10">
                <li className='text-4xl font-bold list-disc'>Self-Taught</li>
                <p>Courses through YouTube, MDN Web Docs, Codecademy, W3Schools, freeCodeCamp, JS Hero, JSchallenger, pychallenger, & building web applications</p>
              </div>
              <div className="mb-10">
                <li className='text-4xl font-bold list-disc'>Pharmacy</li>
                <p>Prepared, dispensed, and labeled medications through many setting such as compounding, tele-health, retail, and long-term care facilities</p>
              </div>
            </ul>
          </div>
        </div>

        <div className='flex justify-center text-white bg-gradient-to-r from-neutral to-secondary pt-20'>
          <div className='flex flex-col bg-transparent shadow-2xl text-2xl text-center font-thin p-14 text-white mr-20 ml-20 rounded-3xl bg-gradient-to-r from-neutral to-secondary'>
            <div className="mb-10">
              <h1 className='text-5xl font-bold underline'>Education</h1>
            </div>
            <ul>
              <div className="mb-10">
                <li className='text-4xl font-bold list-disc '>Old Dominion University</li>
                <p>Full-Stack JavaScript Software Development Certificate through Upright Education</p>
              </div>
              <div className="mb-10">
                <li className='text-4xl font-bold list-disc'>John Tyler College</li>
                <p>Cum Laude Honors | Health Science A.S.</p>
              </div>
              <div className="mb-10">
                <li className='text-4xl font-bold list-disc'>J.T Pharmacy Tech School</li>
                <p> National Certified Pharmacy Technican | VA State Certified Pharmacy Technican </p>
              </div>
              <div className="mb-10">
                <li className='text-4xl font-bold list-disc'>Monacan High</li>
                <p>Health Professions & Therapies Specialty Center </p>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <footer className='flex justify-center pt-20  text-white bg-gradient-to-r from-neutral to-secondary'>Copyright© 2024 Deja's Portfolio, All Right Reserved.</footer>
    </div>
  )
}