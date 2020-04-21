import React from "react"
import {
  AmplifyAuthenticator,
  AmplifyGoogleButton,
  AmplifyAmazonButton,
  AmplifyFederatedButtons,
  AmplifyFacebookButton,
} from "@aws-amplify/ui-react"
import "@aws-amplify/ui/dist/style.css"
import RoundedCheckmark from "./icons/RoundedCheckmark"

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = (props: RegisterPageProps) => {
  return (
    <>
      <nav className="bg-grey-darkest p-2 mt-0 w-full">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <span className="text-2xl pl-2 text-purple-800 font-bold">
              JAMStack Job Board
            </span>
          </div>
        </div>
      </nav>
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
          <div className="container mx-auto pt-24 md:pt-16 px-10">
            <div className="flex items-center pt-2">
              <RoundedCheckmark />
              <h1 className="my-4 text-2xl text-purple-800 font-bold leading-tight text-center md:text-left">
                Lorem Ipsum
              </h1>
            </div>
            <p className="leading-normal text-sm md:text-m mb-8 text-center md:text-left pl-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dictum purus et eros porta, sed euismod augue euismod.
            </p>
            <div className="flex items-center pt-2">
              <RoundedCheckmark />
              <h1 className="my-4 text-2xl text-purple-800 font-bold leading-tight text-center md:text-left">
                Lorem Ipsum
              </h1>
            </div>
            <p className="leading-normal text-sm md:text-m mb-8 text-center md:text-left pl-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dictum purus et eros porta, sed euismod augue euismod.
            </p>
            <div className="flex items-center pt-2">
              <RoundedCheckmark />
              <h1 className="my-4 text-2xl text-purple-800 font-bold leading-tight text-center md:text-left">
                Lorem Ipsum
              </h1>
            </div>
            <p className="leading-normal text-sm md:text-m mb-8 text-center md:text-left pl-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dictum purus et eros porta, sed euismod augue euismod.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:py-6 text-center">
          <div className="justify-between mx-auto sm:px-6 lg-px-8">
            <h1 className="my-4 text-5xl text-purple-800 font-bold leading-tight text-center pb-10 md:text-left slide-in-bottom-h1">
              Publish the best job offers
            </h1>
          </div>
          <div className="max-w-sm justify-between mx-auto sm:px-6 lg-px-8">
            <AmplifyAuthenticator>
              <AmplifyFacebookButton slot="sign-in" />
              <AmplifyAmazonButton slot="sign-in" />
              <AmplifyFederatedButtons slot="sign-in" />
              <AmplifyGoogleButton slot="sign-in" />
            </AmplifyAuthenticator>
          </div>
        </div>
      </div>

      <div className="bg-white">
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
