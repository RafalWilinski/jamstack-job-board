import React from "react"
import {
  AmplifyAuthenticator,
  AmplifyGoogleButton,
  AmplifyAmazonButton,
  AmplifyFederatedButtons,
  AmplifyFacebookButton,
} from "@aws-amplify/ui-react"
import "@aws-amplify/ui/dist/style.css"
import Description from "./Description"

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = (props: RegisterPageProps) => {
  return (
    <>
      <nav className="px-8 py-2 w-full bg-gray-800">
        <span className="text-3xl pl-16 bg-gray-800 text-white font-bold font-black">
          JAMStack Job Board
        </span>
      </nav>
      <div className="lg:flex lg:items-center lg:justify-between shadow-md p-5 rounded-lg mb-4">
        <div className="flex-col bg-white  w-full h-full min-h-screen rounded-md lg:w-1/2 justify-center items-start pb-24 px-10">
          <div className="container bg-white rounded-md mt-16 h-100 mx-auto md:pt-4 px-24">
            <Description
              title="Lorem Ipsum"
              subtitle="Fusce efficitur, lacus vel elementum vehicula, felis turpis dignissim sem, nec dapibus ex sem sit amet nulla."
            />
            <Description
              title="Lorem Ipsum"
              subtitle="Fusce efficitur, lacus vel elementum vehicula, felis turpis dignissim sem, nec dapibus ex sem sit amet nulla."
            />
            <Description
              title="Lorem Ipsum"
              subtitle="Fusce efficitur, lacus vel elementum vehicula, felis turpis dignissim sem, nec dapibus ex sem sit amet nulla."
            />
          </div>
        </div>
        <div className="pb-10 lg:w-1/2">
          <div className="justify-between mx-auto sm:px-6 ">
            <div className="max-w-sm justify-between mx-auto h-full sm:px-6 lg-px-8">
              <h1 className="my-4 text-4xl text-gray-800 font-bold font-black leading-tight text-center pb-10 md:text-left">
                Publish the best job offers
              </h1>
              <AmplifyAuthenticator>
                <AmplifyFacebookButton slot="sign-in" />
                <AmplifyAmazonButton slot="sign-in" />
                <AmplifyFederatedButtons slot="sign-in" />
                <AmplifyGoogleButton slot="sign-in" />
              </AmplifyAuthenticator>
              <p className="leading-normal font-sans font-thin text-sm md:text-m mb-8 text-justify md:text-left">
                By clicking continue, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto pt-24 md:pt-16 px-6">
          <p className="font-bold text-center text-2xl md:text-4xl px-3 mb-5 sm:mb-16">
            place for footer
          </p>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
