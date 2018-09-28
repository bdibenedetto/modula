import React from 'react';
import Sequencer from '../Modules/Sequencer'
import Oscilator from '../Modules/Oscilator'
import Component from '@reactions/component'


const System = () => (
  <div className="system"> <Component
    initialState={{}}
    didMount={({ setState }) => {
      console.log('mounted')
    }}
  >
    {({ state, setState }) => (
      <React.Fragment>

        <Sequencer />
        <Oscilator />
      </React.Fragment>

    )
    }
  </Component></div>
)

export default System;
