import React, { Component } from 'react';
import Tone from 'tone'

class Core extends Component {
  constructor() {
    super()
    this.state = {
      voice: new Tone.Synth().toMaster(),
    }

  }

  schedule() {
    var index = 0
    Tone.Transport.scheduleRepeat(time => repeat(time), '8n')

    const repeat = (time) => {
      let note = this.props.notes[index % this.props.notes.length]
      this.props.onStepUpdate(index % this.props.notes.length)
      this.state.voice.triggerAttackRelease(note.getValueAtTime().toFrequency(), '8n', time)
      index++
    }
  }

  componentDidMount() {
    this.schedule()
  }

  render() {
    const Children = this.props.children
    return <Children
      play={() => Tone.Transport.start()}
      pause={() => Tone.Transport.pause()}
      stop={() => {
        Tone.Transport.stop()
        this.schedule()
      }}
      transport={Tone.Transport.position}
    />
  }

}

export default Core;




