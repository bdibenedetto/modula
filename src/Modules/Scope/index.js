import React from 'react';
import Tone from 'tone'
import Nexus from 'nexusui'

export class Scope extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    Nexus.context = Tone.context
    this.oscilloscope = new Nexus.Oscilloscope("#target",{
      'size': [300,150]
    })
    // gain.connect(this.analyser);
    this.oscilloscope.connect( Tone.Master );
  }

  render() {
    return (
      <div className="scope__panel">
       <div id="target">
      </div>
      </div>
    )
  }
}

export default Scope;






