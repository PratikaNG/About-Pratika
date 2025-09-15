import ProjectCard from '@/components/ui/projectCard'
import React from 'react'

function ProjectsPage() {
  const deployedProjects = [
  {
    id: 1,
    name: "Next JS Auth",
    html_url: "https://github.com/PratikaNG/React-router6",
    deployments_url: "https://next-js-jade-ten-27.vercel.app",
    image_url: "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"
  },
  {
    id: 2,
    name: "React Router6",
    html_url: "https://github.com/PratikaNG/React-router6",
    deployments_url: "https://authenticate-react.netlify.app",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    id: 3,
    name: "Expense Tracker",
    html_url: "https://github.com/PratikaNG/expense-tracker-react",
    description: "A react app to track the expenses",
    deployments_url: "https://track-transactions-react.netlify.app",
    image_url: "https://images.pexels.com/photos/28763701/pexels-photo-28763701.jpeg"
  },
  // {
  //   id: 4,
  //   name: "Emoji Interpreter",
  //   html_url: "https://github.com/PratikaNG/emoji-interpreter",
  //   description: "Created with CodeSandbox",
  //   deployments_url: "https://codesandbox.io/p/sandbox/github/PratikaNG/emoji-interpreter",
  //   image_url: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg"
  // }
];

const learningProjects = [
  {
    id: 1,
    name: "React practice",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    id: 2,
    name: "React movies",
    html_url: "https://github.com/PratikaNG/react-movies",
    image_url: "https://img.icons8.com/color/96/popcorn.png"
  },
  {
    id: 3,
    name: "React Drag Drop",
    html_url: "https://github.com/PratikaNG/react-drag-drop",
    image_url: "https://img.icons8.com/color/96/drag-and-drop.png"
  },
  {
    id: 4,
    name: "React AddDelete Blogs",
    html_url: "https://github.com/PratikaNG/react-addDelete-blogs",
    image_url: "https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg"
  },
  {
    id: 5,
    name: "QR generator",
    html_url: "https://github.com/PratikaNG/QRgenerator",
    description: "A mini Node JS project to generate QR code.",
    image_url: "https://img.icons8.com/ios-filled/100/qr-code.png"
  },
  {
    id: 6,
    name: "Python Practice",
    html_url: "https://github.com/PratikaNG/pythonPractice",
    description: "basic python projects",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    id: 7,
    name: "HTML CSS JS",
    html_url: "https://github.com/PratikaNG/HTML-CSS-JS",
    description: null,
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    id: 8,
    name: "Fullstack Revisions",
    html_url: "https://github.com/PratikaNG/Fullstack-revisions",
    description: null,
    image_url: "https://www.rlogical.com/wp-content/uploads/2023/05/why-choose-mern-stack-for-developing-web-apps.webp"
  },
  {
    id: 9,
    name: "First Express Server",
    html_url: "https://github.com/PratikaNG/First-Express-Server",
    description: "Learning Express",
    image_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    id: 10,
    name: "EJS Partials",
    html_url: "https://github.com/PratikaNG/EJS-Partials",
    description: null,
    image_url: "https://img.icons8.com/color/96/ejs.png" // placeholder
  }
];

  return (
     <div className='w-full min-h-screen flex flex-col'>
      <div className="mt-5 mx-8">
      <h1 className='text-4xl mb-[4rem] border-b-2 w-fit border-b-pink-600'>Deployed projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-center">
          {deployedProjects.map((item, index) => (
            <div key={index} className="flex justify-center">
              <ProjectCard item={item} /></div>))}
        </div>
      </div>
      <div className="mt-10 mx-8">
        <h1 className='text-3xl m-2 p-2 border-b-2 w-fit border-b-pink-600'>Learning projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-center">
            {learningProjects.map((item, index) => (
              <div key={index} className="flex justify-center">
                <ProjectCard item={item} /></div>))}
          </div>
      </div>
    </div>
  )
}

export default ProjectsPage