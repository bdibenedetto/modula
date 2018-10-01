import React from 'react';
import Core from './core'
import Component from '@reactions/component'
import Tone from 'tone'
import Slider from '../../Parts/Slider'
import './style.css';

const baseFq = Tone.Frequency(440)
const Synth = () => (
  <div className="sequencer"> <Component
    initialState={{
      notes: [new Tone.Signal(baseFq), new Tone.Signal(baseFq), new Tone.Signal(baseFq), new Tone.Signal(baseFq),
      new Tone.Signal(baseFq), new Tone.Signal(baseFq), new Tone.Signal(baseFq), new Tone.Signal(baseFq)], step: null
    }
    }
    didMount={({ setState }) => {
      console.log('mounted')
    }}
  >
    {({ state, setState }) => (
      <Core notes={state.notes} onStepUpdate={step => setState({ step })} >
        {
          ({ play, pause, stop, transport }) => {
            return (

              <div className="sequencer__panel">
                <div className="sequencer__panel__control" >
                  {state.step + 1}

                  <button type="button" onClick={play} >Play</button>
                  <button type="button" onClick={pause} >Pause</button>
                  <button type="button" onClick={stop} >Stop</button>
                </div>
                <div className="sequencer__panel__steps" >

                  {state.notes.map((n, ni) => (
                    <div className="step" key={ni}>
                      <span className="display">

                        {n.getValueAtTime().toNote()}
                      </span>

                      <Slider
                        min={32} max={642} value={n}
                        freq={n}
                        value={n}
                      />

                      {ni === state.step ? '' : ''}
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        }
      </Core>

    )
    }
  </Component></div>
)

export default Synth;
