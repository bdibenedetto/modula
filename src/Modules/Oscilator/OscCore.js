import Tone from 'tone'

class OscCore {
  constructor() {
    this.osc1 = new Tone.OmniOscillator(1, "square")
    this.osc2 = new Tone.OmniOscillator(1, "triangle")

    this.frequencySignal = new Tone.Signal()
    this.ampSignal = new Tone.Gain()

    this.volumeSignal1 = new Tone.Signal()
    this.volumeSignal2 = new Tone.Signal()

    this.fqSignal = new Tone.Gain()


    this.ampSignal.connect(this.fqSignal)
    this.frequencySignal.connect(this.fqSignal);

    this.fqSignal.connect(this.osc1.frequency)
    this.fqSignal.connect(this.osc2.frequency)

    this.volumeSignal1.connect(this.osc1.volume);
    this.volumeSignal2.connect(this.osc2.volume);


    this.output = new Tone.Gain()
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

export default OscCore;




