import React from 'react';
import './style.css';
import Slider from '../../Parts/Slider'
import LfoCore from './LfoCore'



export class Lfo extends React.Component {
  constructor() {
    super()
    this.core = new LfoCore()
  }

  componentDidMount() {

    this.props.inputRegister({ name: this.props.name, node: this.core.output, callback: this.core.start })
    this.props.outputRegister({ name: `${this.props.name} fq`, node: this.core.ampSignal })
  }


  render() {
    let { setFrequency, setVolume1, setVolume2 } = this.core
    return (
      <div className="oscilator__panel">
        <div className="oscilator__panel__control" >
          {'lfo'}
          <Slider
            label="Frequency"
            min={0} max={5}
            step={0.001}
            direction="rtl"
            onChange={setFrequency}
          />
          <Slider
            label="square"
            min={0} direction="rtl" max={10}
            step={0.001} onChange={setVolume1}
          />
          <Slider
            label="triangle"
            min={0} direction="rtl" max={10}
            step={0.001} onChange={setVolume2}
          />
        </div>

      </div>
    )
  }
}

export default Lfo;
