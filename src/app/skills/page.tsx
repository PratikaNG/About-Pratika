import Card from '@/components/ui/card';
import React from 'react'

function SkillsPage() {

  const skills = [
  {
    name: "HTML",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "Node.js",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Express.js",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
   {
    name: "React.js",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Next.js",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  
  
];

const otherSkills = [
  {
    name: "Python",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "Django",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
  },
  {
    name: "SQL",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "Linux",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
  },
  {
    name: "Git",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    name: "GitHub",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    name: "Docker",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  }
];

  return (
    <div className='w-full min-h-screen flex flex-col'>
      <div className="mt-5 mx-8">
      <h1 className='text-4xl mb-[4rem] border-b-2 w-fit border-b-pink-600'>Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 md:gap-16 justify-center">
          {skills.map((item, index) => (
            <div key={index} className="flex justify-center">
              <Card item={item} /></div>))}
        </div>
      </div>
      <div className="mt-10 mx-8">
        <h1 className='text-3xl m-2 border-b-2 w-fit border-b-pink-600'>Other basics</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 md:gap-16 justify-center">
            {otherSkills.map((item, index) => (
              <div key={index} className="flex justify-center">
                <Card item={item} /></div>))}
          </div>
      </div>
    </div>
  )
}

export default SkillsPage
