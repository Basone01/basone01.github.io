import React, { Component } from 'react'
import AnimatedContainer from './animatedContainer'

export class Resume extends Component {
  render() {
    return (
      <div>
        This is Resume.
      </div>
    )
  }
}

export default AnimatedContainer(Resume);