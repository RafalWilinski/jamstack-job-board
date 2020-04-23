import React from "react"
import RoundedCheckmark from "./icons/RoundedCheckmark"

interface DescriptionProps {
 title: string;
 subtitle: string;
}

const Description: React.FC<DescriptionProps> = (props: DescriptionProps) => {
  return (
    <>
      <div className="flex items-center pb-1 pl-1">
        <RoundedCheckmark />
        <h1 className="my-4 text-2xl text-gray-800 font-extrabold leading-tight text-center md:text-left">
          {props.title}
        </h1>
      </div>
      <p className="leading-normal font-sans font-thin text-sm md:text-m mb-8 text-center md:text-left pl-16">
        {props.subtitle}
      </p>
    </>
  )
}

export default Description
