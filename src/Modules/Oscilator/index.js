import React from 'react';
import './style.css';
import Slider from '../../Parts/Slider'
import Core from './core'
import Scope2 from '../Scope2'

export class Oscilator extends React.Component {
  constructor() {
    super()
    this.core = new Core()
  }

  componentDidMount() {
    this.props.inputRegister({ name: 'osc', node: this.core.osc })
  }

  render() {
    let { start, setFrequency, setVolume, osc } = this.core
    return (
      <div className="oscilator__panel">
        <div className="oscilator__panel__control" >
          <button onClick={start}>start</button>
          <Slider
            label="Frequency"
            min={1} max={1000}
            step={0.001}
            direction="rtl"
            onChange={setFrequency}
          />

          <Slider
            label="Volume"
            min={0} direction="rtl" max={1}
            step={0.001} onChange={setVolume}
          />
          {/* <Scope input={osc}/> */}
          <Scope2 input={osc} />

        </div>

      </div>
    )
  }
}

export default Oscilator;
