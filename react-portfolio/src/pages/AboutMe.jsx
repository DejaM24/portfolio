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
      </div>
      
      {/* about me section */}
      <div className='flex justify-center text-6xl font-black pt-10 pb-10 text-white bg-gradient-to-r from-neutral to-secondary'>
         About Me
       </div>
        {/* why doesn't images import? */}
       <div className='flex justify-center  text-white bg-gradient-to-r from-neutral to-secondary'>
        {/* <img src={headShot} alt='portrait' width='24%' height='24%' className='flex rounded-full ml-20 pt-24 pb-24 scale-y-75'></img> */}

         {/* condense text here */}
         <div className='flex flex-col text-5xl font-thin p-14 mr-20 ml-20 bg-gradient-to-r from-neutral to-secondary rounded-3xl text-center bg-transparent shadow-2xl'> 
         <div className="mb-10">
              <h1 className='text-5xl font-bold underline'>My Motto</h1>
              <p>Design with the User in Mind</p>
            </div>
            <div className="mb-10">
              <h1 className='text-5xl font-bold underline'>My Why</h1>
              <p>constant growth, outlet for creativity, problem-solving</p>
            </div>
            <div className="mb-10">
              <h1 className='text-5xl font-bold underline'>Myself</h1>
              <p>multifaceted creative innovative foodie dog-lover </p>
            </div>
            <div className="mb-10">
              <h1 className='text-5xl font-bold underline'>My Aspirations</h1>
              <p>I think about the impact I want to have on the world. I’ve come to realize that I truly want to make a lasting impression on the lives of our future generation. 
                I've always had a passion for helping people. 
                Through years of volunteering at food banks, schools, and retirement homes, I've come to understand that it's our duty as a society to take care of each other. 
                Furthermore, I want to inspire little kids that look like me. 
                Whether that's through outreach, innovation, or collaboration, I want to showcase the importance of community. 
                So that, future generations will grasp what it truly means to work towards something bigger than themselves.</p>
            </div>
         {/* Hi guys! I'm Deja Moore. A software developer based in Richmond, VA that works to "Design with the User in Mind." 
         I've helped developed various projects and applications. 
         Being able to collabrate with a team in creating real-life applications has been extremely benefitcal to the start of my career. 
         My eagerness in continuing to grow as a developer has pushed me to learn more within the field as I work with hands on projects.  
         The foundation of most applications I've developed have been the use of HTML & CSS, & Javascript. 
         Some additional tools I've utilized include daisyUI, Tailwind CSS, React JS, Express JS, Node JS, and Mongoose/MongoDB. */}
         </div>
       
       </div>

       <footer className='flex justify-center pt-20  text-white bg-gradient-to-r from-neutral to-secondary'>Copyright© 2024 Deja's Portfolio, All Right Reserved.</footer>
        </div>
    )
}