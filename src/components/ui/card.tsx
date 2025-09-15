"use client"
import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Card(props:any) {
    console.log("Card props",props)
  return (
    <div className="card shadow-sm">
  <figure className="pt-5">
    <Image
      height={10}
      width={10}
      src={props.item.image_url}
      alt={props.item.name}
      className="rounded-xl h-20 w-20 bg-amber-50 p-2" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{props.item.name}</h2>
    
  </div>
</div>
  )
}

export default Card
