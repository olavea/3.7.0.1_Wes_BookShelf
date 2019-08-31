import React from "react"
// import StorePicker from "../components/StorePicker"

const Header = props => (
  <header className="top">
    <h1>
      Picture Book
      <span className="ofThe">
        <span className="of"> Of </span>
        <span className="the"> The </span>
      </span>
      Month
    </h1>
    <h3 className="tagline">
      <span>{props.wesSays}</span>
    </h3>
  </header>
)
export default Header
