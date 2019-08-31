import React from "react"
// import StorePicker from "../components/StorePicker"
import Header from "../components/Header"
import Inventory from "../components/Inventory"
import Order from "../components/Order"

class App extends React.Component {
  render() {
    return (
      <div className="book-of-the-month">
        <div className="menu">
          <Header wesSays="AarrrRRH!" />

          <Inventory />
          <Order />
        </div>
      </div>
    )
  }
}
export default App
