import React from 'react';
import Oscilator from '../Modules/Oscilator'
import PatchBay from '../Modules/PatchBay'
import Output from '../Modules/Output'
import './style.css'
import Tone from 'tone'

class System extends React.Component {
  constructor(props) {
    super(props)
  }



  state = {
    ins: [],
    outs: [],
    loading: true
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
    this.setState({
      ins: [...this.state.ins, input],
    })
  }

  outputRegister = (out, callback) => {
    this.setState({
      outs: [...this.state.outs, out],
    })
  }

  render() {

    if (Tone.context._context.resume())
      return (
        <div className="system">
          <React.Fragment>
            <label>{Tone.context._context ? Tone.context._context.state : 'loading'}</label>
            <Oscilator inputRegister={this.inputRegister} />
            <PatchBay ins={this.state.ins} outs={this.state.outs} />
            <Output outputRegister={this.outputRegister} />
          </React.Fragment>
        </div>
      )
  }
}
export default System;
