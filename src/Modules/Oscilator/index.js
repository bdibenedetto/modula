import React from 'react';
import Core from './core'
import Component from '@reactions/component'
import Tone from 'tone'
import './style.css';


const Oscilator = () => (
  <div className="oscilator"> <Component
    initialState={{ pitch: 'A1' }}
    didMount={({ setState }) => {
      console.log('mounted')
    }}
  >
    {({ state, setState }) => (
      <Core  >
        {
          () => {
            return (

              <div className="oscilator__panel">
                <div className="oscilator__panel__control" >
                  <input type="range" min={32} max={642} value={Tone.Frequency(state.pitch)}
                    onChange={({ target }) =>
                      setState({
                        pitch:
                          Tone.Frequency(target.value).toNote()
                      })
                    }
                  />
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

export default Oscilator;
