import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props){
        super(props);
        console.log(this.props.location)
    }
  render() {
    return (
      <div>
        This is Contact.
      </div>
    )
  }
}
