import Tone from 'tone'

class LfoCore {
  constructor() {

    this.filter = new Tone.Filter(350, "lowpass", "-12");

    this.frequencySignal = new Tone.Signal()
    this.signalIn = new Tone.Gain()

    this.resonanceFilter = new Tone.Signal(0)
    this.volumeSignal2 = new Tone.Signal(0)

    this.frequencySignal.connect(this.filter.frequency);
    this.signalIn.connect(this.filter)
    this.resonanceFilter.connect(this.filter.Q);

    this.output = new Tone.Gain()
    this.filter.connect(this.output)

  }

  start = () => {

  }

  setFrequency = f => {
    this.frequencySignal.value = f
  }

  setResonance = f => {
    this.resonanceFilter.value = f
  }


}

export default LfoCore;




