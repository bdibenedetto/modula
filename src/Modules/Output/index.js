import React from 'react';
import Tone from 'tone';
import Scope2 from '../Scope2'
import './style.css'

export class Output extends React.Component {
  componentDidMount() {
    this.input = new Tone.Gain().toMaster()
    this.props.outputRegister({ name: 'output', node: this.input, callback: () => this.input.toMaster() })
  }

  render() {
    return (
      <div className="output">
        <h4>Output</h4>
        {
          this.input &&
          <Scope2 input={this.input} />
        }
      </div>
    )
  }
}

export default Output;
