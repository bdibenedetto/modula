import React from 'react';
import Oscilator from '../Modules/Oscilator'
import Lfo from '../Modules/Lfo'
import Filter from '../Modules/Filter'
import PatchBay from '../Modules/PatchBay'
import Output from '../Modules/Output'
import './style.css'
import Tone from 'tone'

class System extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      ins: [],
      outs: [],
      loading: true
    }
  }


  componentDidMount() {
    setTimeout(this.start, 1000);
  }

  componentWillUnmount() {
    Tone.context.close()
  }

  start = () => {
    this.state.ins.forEach(i => i.callback && i.callback())
    this.state.outs.forEach(o => o.callback && o.callback())
    Tone.context._context.resume()
    this.setState({ loading: false })
  }

  inputRegister = (input, callback) => {
    this.setState(state => ({
      ins: state.ins.concat(input)
    }))
  }

  outputRegister = (out, callback) => {
    this.setState(state => ({
      outs: state.outs.concat(out)
    }))
  }

  render() {

    if (Tone.context._context.resume())
      return (
        <div className="system">
          <React.Fragment>
            <label>{Tone.context._context ? Tone.context._context.state : 'loading'}</label>
            <div className="osc_bank">
              <Oscilator name="osc1" inputRegister={this.inputRegister.bind(this)} outputRegister={this.outputRegister.bind(this)} />
              <Oscilator name="osc2" inputRegister={this.inputRegister.bind(this)} outputRegister={this.outputRegister.bind(this)} />
              <Oscilator name="osc3" inputRegister={this.inputRegister.bind(this)} outputRegister={this.outputRegister.bind(this)} />
            </div>
            <div className="osc_bank">
              <Lfo name="lfo1" inputRegister={this.inputRegister.bind(this)} outputRegister={this.outputRegister.bind(this)} />
              <Lfo name="lfo2" inputRegister={this.inputRegister.bind(this)} outputRegister={this.outputRegister.bind(this)} />
            </div>
            <Filter name="filter" inputRegister={this.inputRegister.bind(this)} outputRegister={this.outputRegister.bind(this)} />



            <PatchBay ins={this.state.ins} outs={this.state.outs} />
            <Output outputRegister={this.outputRegister.bind(this)} />
          </React.Fragment>
        </div>
      )
  }
}
export default System;
