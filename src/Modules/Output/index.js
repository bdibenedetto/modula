import React from 'react';
import Tone from 'tone';
import Scope2 from '../Scope2'
import './style.css'

export class Oscilator extends React.Component {
  componentDidMount() {
    this.input = new Tone.Gain().toMaster()

    this.props.outputRegister({ name: 'output', node: this.input })
  }

  render() {
    console.log('this', Tone.Master)
    return (
      <div className="output">
        <h4>Output</h4>

        <Scope2 input={Tone.Master} />



      </div>
    )
  }
}

export default Oscilator;
