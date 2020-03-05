import Tone from 'tone'

class LfoCore {
  constructor() {

    this.osc1 = new Tone.LFO(0, 0, 5)
    this.osc1.type = "square"
    this.osc2 = new Tone.LFO(0, 0, 5)
    this.osc2.type = "triangle"

    this.frequencySignal = new Tone.Signal(0)
    this.ampSignal = new Tone.Gain(0)

    this.volumeSignal1 = new Tone.Signal(0)
    this.volumeSignal2 = new Tone.Signal(0)

    this.fqSignal = new Tone.Signal(0)


    this.ampSignal.connect(this.fqSignal)
    this.frequencySignal.connect(this.fqSignal);

    this.fqSignal.connect(this.osc1.frequency)
    this.fqSignal.connect(this.osc2.frequency)

    this.volumeSignal1.connect(this.osc1.amplitude);
    this.volumeSignal2.connect(this.osc2.amplitude);





    this.outputSignal = new Tone.Signal(0)
    this.osc1.connect(this.outputSignal);
    this.osc2.connect(this.outputSignal);
    this.output = new Tone.Gain()
    this.outputSignal.connect(this.output)

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




