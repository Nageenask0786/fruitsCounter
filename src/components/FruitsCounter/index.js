import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  incrementMango = () => {
    this.setState(prevState => {
      console.log('Apple has been clicked')
      return {count1: prevState.count1 + 1}
    })
  }

  incrementBanana = () => {
    this.setState(prevState => {
      console.log('Bananas has been clicked')
      return {count2: prevState.count2 + 1}
    })
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="bgcontainer">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="btn">{count1} </span>
            mangoes <span className="btn">{count2}</span> bananas
          </h1>
          <div className="imgcard">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>
          <div className="imgcard">
            <button
              className="button"
              type="button"
              onClick={this.incrementMango}
            >
              Eat Mango
            </button>
            <button
              className="button"
              type="button"
              onClick={this.incrementBanana}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
