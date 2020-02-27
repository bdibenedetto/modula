import Tone from 'tone'

class Core {
  constructor() {
    this.osc = new Tone.Oscillator(1, "sine")
    this.frequencySignal = new Tone.Signal()
    this.volumeSignal = new Tone.Signal()
    this.ampSignal = new Tone.Signal()

    this.fqSignal = new Tone.Gain(10)


    this.ampSignal.connect(this.fqSignal)
    this.frequencySignal.connect(this.fqSignal);

    this.fqSignal.connect(this.osc.frequency)

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




