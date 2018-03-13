import React, { Component } from 'react'
import { AnimatedContainer, FlexDownCenter } from './shared/';

export class Works extends Component {
  render() {
    return (
      <FlexDownCenter>
        This is Works.
      </FlexDownCenter>
    )
  }
}
export default AnimatedContainer(Works);