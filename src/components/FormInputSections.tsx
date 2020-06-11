import React from "react"

interface SectionStyle {
  className: string
  placeholder: string
}

type StringMap = {
  [key: string]: SectionStyle
}

const SectionType: StringMap = {
  TITLE: {
    className:
      "px-4 bg-transparent border-b-2 border-gray-300 text-xl font-bold py-2 min-w-full text-center resize-none h-auto",
    placeholder: "Select title for your job",
  },
  DESCRIPTION: {
    className:
      "px-4 bg-transparent border-b-2 border-gray-300 text-base font-thin py-2 min-w-full h-40 whitespace-normal flex-wrap resize-none",
    placeholder: "",
  },
  REQUIREMENTS: {
    className:
      "px-4 bg-transparent border-b-2 border-gray-300 text-xl font-bold py-2 min-w-full",
    placeholder: "",
  },
  LOCATION: {
    className: "",
    placeholder: "",
  },
  SALARY: {
    className: "",
    placeholder: "",
  },
}

interface SectionProps {
  type: string
  value: any
}

class Section extends React.Component<SectionProps> {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {

    return (
      <textarea
      onChange={this.onChange}
      className={SectionType[this.props.type].className}
      placeholder={SectionType[this.props.type].placeholder}
      />
    )
  }
}

export default Section
