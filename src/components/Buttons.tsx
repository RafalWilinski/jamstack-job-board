import React from "react"

interface ButtonStyle {
  className: string;
}

type StringMap = {
  [key: string]: ButtonStyle;
}

const ButtonType: StringMap = {
  PRIMARY: {
    className:
      "inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out",
  },
  SECONDARY: {
    className:
      "inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out",
  },
  TERTIARY: {
    className:
      "ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
  },
};

interface ButtonProps {
  type: string;
  icon?: any;
  text?: any;
  onClick?: () => any;
}

class Button extends React.Component<ButtonProps> {
  render() {
     return (
       <button type="button" className={ButtonType[this.props.type].className} onClick={this.props.onClick}>
         {this.props.icon}
         {this.props.text}
       </button>
     )
  }
}

export default Button;
