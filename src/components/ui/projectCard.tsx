"use client"

import Image from "next/image"
import Link from "next/link"
// eslint-disable-next-line react-hooks/exhaustive-deps
function ProjectCard(props:any) {
  return (
    <div>
      <div className="card card-side shadow-sm border border-gray-500 p-2">
  <figure>
    <Image
      src={props.item.image_url}
      width={10}
      height={10}
      alt={props.item.name}
       className="rounded-xl h-25 w-25 bg-amber-50 p-2" 
      />
  </figure>
  <div className="card-body w-[250px] sm:w-[200px]">
    <h2 className="card-title">{props.item.name}</h2>
    <div className="flex flex-row card-actions justify-end">
        {props.item.deployments_url ? 
      <Link href={`${props.item.deployments_url}`} target="_blank" className="text-pink-500">Check</Link> : null}
      <Link href={`${props.item.html_url}`}target="_blank" className="text-yellow-500">Git</Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProjectCard
