'use client'
import React from 'react'
import Image from 'next/image'
import nextjs from '../../../public/next-js.svg'
import mongodb from '../../../public/mongodb-original.svg'
import nodejs from '../../../public/nodejs-plain.svg'
import graphql from '../../../public/graphql-plain.svg'
import tailwind from '../../../public/tailwindcss-plain.svg'
import git from '../../../public/git-plain.svg'

const page = () => {
  const svgLogos = [nextjs, mongodb, nodejs, graphql, tailwind, git]
  return (
    <>
      <div className='grid grid-cols-3 justify-center items-center h-full w-full'>
        {svgLogos.map((logo, index) => {
          return <Image src={logo} alt="svg" className='size-[8rem] mx-auto' />
        })}
      </div>
    </>

  )
}

export default page
