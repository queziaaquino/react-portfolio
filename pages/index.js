import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {BiCopyright} from 'react-icons/bi';
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/perfil.png';
import code from '../public/code.png';
import ft1 from '../public/ft1.png';
import ft2 from '../public/ft2.png';
import ft3 from '../public/ft3.png';
import ft4 from '../public/ft4.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Quezia Aquino Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
         <nav className='py-10 mb-12 flex justify-between dark:text-white'>
          <h1 className='text-lg font-burtons flex gap-2'><BiCopyright /> queziaaquino</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' />
            </li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
          </ul>
         </nav>
         <div className='text-center p-10 py-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400 '>Quezia Aquino</h2>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>FullStack developer</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl mx-w-lg mx-auto dark:text-gray-200'>Internet systems student, currently working as a intern at Avanade Brazil and doing my best to learn everyday 
            with people around me.</p>
         </div>
         <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
          <AiFillInstagram />
          <AiFillLinkedin />
          <AiFillGithub />
         </div>
         <div className='relative mx-auto bg-gradient-to-b  from-teal-300 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image alt ="foto" src={deved} layout='fill' objectFit='cover'/>
         </div>
        </section>
      <section>
        <div>
          <h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I started my journey as a developer in august 2021 and since then, I have been learning and working hard
              to improve my <span className="text-teal-500"> skills </span>.
              My main interest is in Front End. I am always looking for ideas to create dinamic and functional
               <span className="text-teal-500"> websites</span>.
              
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My interests and skills go from designing and building projects, to team management and agile solutions.
            </p>
        </div>
        <div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200'>
            <Image src={code} alt="foto2" width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Code your dream project</h3>
            <p className='py-2'>Do you have an idea for your next great website? Let??s make it a reality</p>
            <h4 className='text-teal-600 py-4'>Languages and Frameworks I often use:</h4>
            <p className='text-gray-800 py-1'>HTML/CSS/JS</p>
            <p className='text-gray-800 py-1'>React</p>
            <p className='text-gray-800'>Bootstrap</p>
            
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            You can find all of my projects on my 
              <span className="text-teal-500"> GitHub </span>(@queziaaquino).
              I am still in the learning process, but I invite you to see my evolution through my 
              <span className="text-teal-500"> repositories </span> .
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
             Here is some of my recent work:
            </p>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1'><Image src={ft2} alt='foto3' className='rounded-lg object cover' width={'100%'} height={'100%'} layout='responsive' /></div>
          <div className='basis-1/3 flex-1'><Image src={ft3} alt='foto4' className='rounded-lg object cover' width={'100%'} height={'100%'} layout='responsive' /></div>
          <div className='basis-1/3 flex-1'><Image src={ft4} alt='foto5' className='rounded-lg object cover' width={'100%'} height={'100%'} layout='responsive' /></div>
          <div className='basis-1/3 flex-1'><Image src={ft1} alt='foto6' className='rounded-lg object cover' width={'100%'} height={'100%'} layout='responsive' /></div>
        </div>
      </section>
      </main>
    </div>
  )
}
