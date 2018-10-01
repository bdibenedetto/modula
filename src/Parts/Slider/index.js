import React, { Component } from 'react';
import noUiSlider from 'nouislider'
import 'nouislider/distribute/nouislider.css'
import './style.css'
import Tone from 'tone'

class Slider extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const defaultValue = this.props.value.value.toFrequency()
    let verticalSlider = this.refs.sliderControl

    let slider = noUiSlider.create(verticalSlider, {
      start: defaultValue,
      step: 2,
      orientation: 'vertical',
      range: {
        'min': this.props.min,
        'max': this.props.max
      }
    });


    slider.on('change', e => {
      if (e !== defaultValue) {
        const change = Number(e[0].split('.')[0])
        this.props.value.setValueAtTime(Tone.Frequency(change))
      }
    });

  }

  render() {
    return <div ref="sliderControl" />
  }

}

export default Slider;




