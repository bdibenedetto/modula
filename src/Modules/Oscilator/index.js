import React from 'react';
import './style.css';
import Slider from '../../Parts/Slider'
import Core from './core'
import Scope2 from '../Scope2'
import Tone from 'tone';


export class Oscilator extends React.Component {
  constructor() {
    super()
    this.core = new Core()
  }

  componentDidMount() {
    this.core.osc.type = this.props.waveform || "sine"

    console.log('osc', this)
    this.props.inputRegister({ name: this.props.name, node: this.core.osc, callback: this.core.start })
    this.props.inputRegister({ name: `${this.props.name} fq w`, node: this.core.osc.frequency, callback: this.core.start })
    this.props.outputRegister({ name: `${this.props.name} fq`, node: this.core.ampSignal })
  }

  render() {
    let { setFrequency, setVolume, osc } = this.core
    const { lfo } = this.props
    return (
      <div className="oscilator__panel">
        <div className="oscilator__panel__control" >
          <Slider
            label="Frequency"
            min={1} max={lfo ? 50 : 100}
            step={0.001}
            direction="rtl"
            onChange={setFrequency}
          />
          <Slider
            label="Volume"
            min={0} direction="rtl" max={lfo ? 10 : 1}
            step={0.001} onChange={setVolume}
          />
        </div>

      </div>
    )
  }
}

export default Oscilator;
