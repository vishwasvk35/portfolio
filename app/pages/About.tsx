import React from 'react'
import { CardSpotlight } from '@/components/ui/card-spotlight'

const About = () => {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full px-4 py-8">
      <CardSpotlight className=" w-full max-w-3xl bg-zinc-900">
        <p className="text-5xl font-primary relative z-20 mt-2 text-white">
          About Me
        </p>
        <div className="text-3xl font-secondary text-neutral-200 mt-4 relative z-20">
          I am a B.Tech Computer Science Student from ABV-IIITM Gwalior with passion for software development and
          a keen interest in web development. I am proficient in JavaScript, React, Node.js, and have experience with
          various web technologies. I am always eager to learn and explore new technologies to enhance my skills.
        </div>
      </CardSpotlight>
    </div>
  )
}

export default About