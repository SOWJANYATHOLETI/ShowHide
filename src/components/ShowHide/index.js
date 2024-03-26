// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    onFirstName: false,
    onLastName: false,
  }

  onClickFirstName = () => {
    this.setState(prevState => ({onFirstName: !prevState.onFirstName}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({onLastName: !prevState.onLastName}))
  }

  render() {
    const {onFirstName, onLastName} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="show-names">
            <button
              className="name-button"
              type="button"
              onClick={this.onClickFirstName}
            >
              Show/Hide Firstname
            </button>
            {onFirstName && <p className="name">Joe</p>}
          </div>
          <div className="show-names">
            <button
              className="name-button"
              type="button"
              onClick={this.onClickLastName}
            >
              Show/Hide Lastname
            </button>
            {onLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
