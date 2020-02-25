import Tone from 'tone'

class Core {
  constructor() {
    this.osc = new Tone.Oscillator(1, "sine")
    this.frequencySignal = new Tone.Signal(0)
    this.volumeSignal = new Tone.Signal(0)
    this.frequencySignal.connect(this.osc.frequency);
    this.volumeSignal.connect(this.osc.volume);
  }

  start = () => {
    this.osc.start()
  }

  setFrequency = f => {
    this.frequencySignal.value = f
  }

  setVolume = f => {
    this.volumeSignal.value = f
  }

}

export default Core;




