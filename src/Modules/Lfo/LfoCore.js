import Tone from 'tone'

class LfoCore {
  constructor() {

    this.osc1 = new Tone.LFO(0, 0, 5)
    this.osc1.type = "square"
    this.osc2 = new Tone.LFO(0, 0, 5)
    this.osc2.type = "triangle"

    this.frequencySignal = new Tone.Signal()
    this.ampSignal = new Tone.Signal()

    this.volumeSignal1 = new Tone.Signal()
    this.volumeSignal2 = new Tone.Signal()

    this.fqSignal = new Tone.Signal(1)


    this.ampSignal.connect(this.fqSignal)
    this.frequencySignal.connect(this.fqSignal);

    this.fqSignal.connect(this.osc1.frequency)
    this.fqSignal.connect(this.osc2.frequency)

    this.volumeSignal1.connect(this.osc1.amplitude);
    this.volumeSignal2.connect(this.osc2.amplitude);


    this.output = new Tone.Signal(1)

    this.osc1.connect(this.output);
    this.osc2.connect(this.output);
  }

  start = () => {
    this.osc1.start()
    this.osc2.start()
  }

  setFrequency = f => {
    this.frequencySignal.value = f
  }

  setVolume1 = f => {
    this.volumeSignal1.value = f
  }

  setVolume2 = f => {
    this.volumeSignal2.value = f
  }

}

export default LfoCore;




