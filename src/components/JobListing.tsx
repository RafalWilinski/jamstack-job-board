import React from "react"

import More from "./icons/More"
import Dollar from "./icons/Dollar"
import Calendar from "./icons/Calendar"
import LocationPin from "./icons/LocationPin"
import Suitcase from "./icons/Suitcase"
import Edit from "./icons/Edit"
import View from "./icons/View"
import Checkmark from "./icons/Checkmark"

import Button from "./Buttons"

interface JobListingProps {
  name: string
  location: string
}

const JobListing: React.FC<JobListingProps> = (props: JobListingProps) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between shadow-md p-5 rounded-lg mb-4">
      <div className="flex-1 min-w-0 ">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          {props.name}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
          <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
            <Suitcase />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
            <LocationPin />
            {props.location}
          </div>
          <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
            <Dollar />
            $120k &ndash; $140k
          </div>
          <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
            <Calendar />
            Closing on January 9, 2020
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block shadow-sm rounded-md">
          <Button type="SECONDARY" icon={<Edit />} text="Edit" />
        </span>
        <span className="hidden sm:block ml-3 shadow-sm rounded-md">
          <Button type="SECONDARY" icon={<View />} text="View" />
        </span>
        <span className="sm:ml-3 shadow-sm rounded-md">
          <Button type="PRIMARY" icon={<Checkmark />} text="Publish" />
        </span>
        <span
          x-data="{ open: false }"
          className="ml-3 relative shadow-sm rounded-md sm:hidden"
        >
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
          >
            More
            <More />
          </button>

          <div
            x-show="open"
            className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg"
          >
            <div className="py-1 rounded-md bg-white shadow-xs">
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                Edit
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                View
              </a>
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}

export default JobListing
