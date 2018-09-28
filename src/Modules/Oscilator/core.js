import React, { Component } from 'react';
import Tone from 'tone'

class Core extends Component {
  constructor() {
    super()
    this.state = {
      voice: new Tone.Synth().toMaster(),
    }

  }



  render() {
    const Children = this.props.children
    return <Children />
  }

}

export default Core;




