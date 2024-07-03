import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/Manjima.jfif';
import { motion } from "framer-motion"


const container = (delay) => ({ 
    hidden: {x: -100, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay
      },
    },
  });

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={container(0,5)}
                    initial="hidden"
                    animate="visible"
                     className='pb-16 text-5xl font-thin tracking--light lg:mt16 lg:text-5xl '>Hello, I am Manjima Bhusan!</motion.h1>
                    <motion.span
                      variants={container(0.5)}
                      initial="hidden"
                      animate="visible"
                     className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'> Frontend Developer</motion.span>
                    <motion.p 
                      variants={container(1)}
                      initial="hidden"
                      animate="visible"
                    className='my-2 max-w-xl py-4 font-light tracking-lighter'>{HERO_CONTENT}</motion.p>
                </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img 
                        initial={{ x:100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        style={{width: '34rem',position: 'relative',bottom: '1rem'}}
                        src={profilePic} alt='Manjima Bhusan' />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Hero
