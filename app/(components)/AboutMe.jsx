import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <content className='flex items-center h-full'>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col'>
          <p className='text-[1.5rem]'>{`<About />`}</p>
          <h3 className='text-[5rem] font-bold'>HUNTER TRAN</h3>
          <h4 className='text-[2rem] font-semibold'>Full Stack Web Developer</h4>
          <p className='text-lg'>Hey there! I'm a Full Stack Web Developer dedicated to crafting stunning and high-performance websites for a seamless online experience. With a commitment to both aesthetics and speed, I take pride in building digital solutions that captivate users and elevate the online presence of businesses.</p>
        </div>
        <div>
          {/* put an image or something here */}

        </div>
      </div>
    </content>
  )
}

export default AboutMe
