import React, { Component } from 'react'

export default class Resume extends Component {
    constructor(props){
        super(props);
        console.log(this.props.location)
    }
  render() {
    return (
      <div>
        This is Resume.
      </div>
    )
  }
}
