import React,{ useEffect, useState } from "react"
import Checkmark from "./icons/Checkmark"
import Left from "./icons/Left"

import { API, graphqlOperation } from "aws-amplify"
import { createListing } from "../graphql/mutations"
import { listListings } from "../graphql/queries"

import Button from "./Buttons"
import Section from "./FormInputSections"


interface FormContainerProps {}

const initialState = {
  title: "",
  description: "",
  requirements: "",
  timezone: "",
  location: "",
  salary: "",
};

const FormContainer: React.FC<FormContainerProps> = (props: FormContainerProps) => {
  const [formState, setFormState] = useState(initialState);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings()
  }, [])

  async function fetchListings() {
    try {
      const listingData = await API.graphql(graphqlOperation(listListings))
      const listings = listingData["data"].listListings.items
      setListings(listings)
    } catch (err) { console. log('error fetching listing')}
  }

  async function addListing() {
    try {
      if (!formState.title || !formState.description || !formState.location || !formState.requirements || !formState.salary || !formState.timezone) return
      const listing = {...formState}
      setListings([...listings, listing])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createListing, {input: listing}))
    } catch (err) {
      console.log('error creating listing:', err)
    }
  }

  return (
    <div className="flex justify-center">
      <div className="justify-between w-4/5">
        <div className="lg:flex bg-gray-100 justify-between shadow-md p-5 rounded-lg mb-4 relative h-24">
          <div className="flex justify-center min-w-full h-auto">
              <Section type="TITLE" value={formState.title} />
          </div>
        </div>
        <div className="flex flex-row space-x-4 min-h-64 h-64">
          <div className="lg:flex bg-gray-100 justify-between shadow-md p-5 rounded-lg mb-4 relative w-1/2 h-4/5">
            <div className="flex flex-col min-h-full">
              <h2 className="text-xl font-bold leading-7 text-gray-500 pb-3">
                Short description about this job
              </h2>
              <div className="flex min-w-full min-h-4/5">
                <Section type="DESCRIPTION" value={formState.description} />
              </div>
            </div>
          </div>
          <div className="flex bg-transparent w-4"></div>
          <div className="lg:flex bg-gray-100 justify-between shadow-md p-5 rounded-lg mb-4 relative w-1/2 h-4/5">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold leading-7 text-gray-500 pb-3">
                What are the requirements?
              </h2>
              <div className="flex min-w-full">
                <Section type="REQUIREMENTS" value={formState.requirements} />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex bg-gray-100 justify-between shadow-md p-5 rounded-lg mb-4 relative">
          <div className="flex justify-center min-w-full">
            <div className="flex justify-center min-w-full text-gray-500 text-xl font-bold">
              What about location?
            </div>
          </div>
        </div>
        <div className="flex justify-between px-6">
          <Button type="SECONDARY" navigation="/" text="Go back" icon={<Left />} />
          <Button type="PRIMARY" text="Save" icon={<Checkmark />} onClick={addListing} />
        </div>
        {listings.map((listing, index) => (
          <div key={listing.id ? listing.id : index}>
            <p>{listing.title}</p>
            <p>{listing.description}</p>
            <p>{listing.requirments}</p>3<p>{listing.timezone}</p>
            <p>{listing.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FormContainer;
