import React, { useState, useRef } from "react"
import classNames from "classnames"
import useOnClickOutside from "../hooks/useOnClickOutside"

interface HeaderAvatarProps {
  hidden: boolean
  setHidden: (isHidden: boolean) => void
  ref: any
}

const HeaderAvatar: React.FC<HeaderAvatarProps> = ({
  hidden,
  setHidden,
  ref,
}: HeaderAvatarProps) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
        <svg
          className="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>
      <div className="ml-3 relative" x-data="{ open: false }">
        <div>
          <button
            className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out "
            onClick={() => setHidden(!hidden)}
          >
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </button>
        </div>
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
          {!hidden ? (
            <div
              ref={ref}
              className={classNames("py-1 rounded-md bg-white shadow-xs", {
                hidden,
              })}
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                Sign out
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default HeaderAvatar
