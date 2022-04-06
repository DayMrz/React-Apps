import React, {Component} from 'react'
import jake from './jake-dog.png'
import './Dog.css'
class Dog extends Component {
  render() {
    return (
      <div className="Dog">
      <h1>DOG</h1>
      <img className='Dog-img' src={jake}  alt='Jake the dog' /> 
      </div>
    )
  }
}

export default Dog