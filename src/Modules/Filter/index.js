import React from 'react';
import './style.css';
import Slider from '../../Parts/Slider'
import FilterCore from './FilterCore'



export class Filter extends React.Component {
  constructor() {
    super()
    this.core = new FilterCore()
  }

  componentDidMount() {
    this.props.inputRegister({ name: `${this.props.name} out`, node: this.core.output, callback: this.core.start })
    this.props.outputRegister({ name: `${this.props.name} in`, node: this.core.signalIn })
  }


  render() {
    let { setFrequency, setResonance } = this.core
    return (
      <div className="oscilator__panel">
        <div className="oscilator__panel__control" >
          <Slider
            label="Frequency"
            min={0} max={6000}
            step={0.001}
            direction="rtl"
            onChange={setFrequency}
          />
          <Slider
            label="Resonance"
            min={0} direction="rtl" max={100}
            step={0.001} onChange={setResonance}
          />

        </div>

      </div>
    )
  }
}

export default Filter;
