import React from 'react';
import Oscilator from '../Modules/Oscilator'
import PatchBay from '../Modules/PatchBay'
import Output from '../Modules/Output'
import './style.css'

class System extends React.Component {
  state = {
    ins: [],
    outs: []
  }

  inputRegister = (input) => {
    this.setState({
      ins: [...this.state.ins, input],
    })
  }

  outputRegister = (out) => {
    this.setState({
      outs: [...this.state.outs, out],
    })
  }

  render() {
    console.log('sysstem', this)

    return (
      <div className="system">
        <React.Fragment>

          <Oscilator inputRegister={this.inputRegister} />
          <PatchBay ins={this.state.ins} outs={this.state.outs} />
          <Output outputRegister={this.outputRegister} />
        </React.Fragment>
      </div>
    )
  }
}
export default System;
