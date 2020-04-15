import PropTypes from "prop-types"
import React from "react"

export const PrimaryButton = ({ textButton, onClick }) => (
  <button
    type="button"
    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out">
    {textButton}
    {onClick}
  </button>
)

PrimaryButton.propTypes = {
  textButton: PropTypes.string,
  onClick: PropTypes.func,
};

export const SecondaryButton = ({ textButton, onClick }) => (
  <button
    type="button"
    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
  >
    {textButton}
    {onClick}
  </button>
)

SecondaryButton.propTypes = {
  textButton: PropTypes.string,
  onClick: PropTypes.func,
};

export const TertiaryButton = ({ textButton, onClick }) => (
  <button
    type="button"
    className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
  >
    {textButton}
    {onClick}
  </button>
)

TertiaryButton.propTypes = {
  textButton: PropTypes.string,
  onClick: PropTypes.func,
};


