import React, { Component } from 'react';
import noUiSlider from 'nouislider'
import 'nouislider/distribute/nouislider.css'
import './style.css'

class Slider extends Component {

  componentDidMount() {
    const defaultValue = this.props.value;
    let verticalSlider = this.refs.sliderControl

    let slider = noUiSlider.create(verticalSlider, {
      start: defaultValue || 0,
      step: this.props.step || 10,
      orientation: 'vertical',
      direction: this.props.direction || 'ltr' ,
      range: {
        'max': this.props.max,
        'min': this.props.min,
      },
      pips: {
        mode: 'range',
        density: 10
    }
    });


    slider.on('update', e => {
      if (e !== defaultValue) {
        this.props.onChange(e)
      }
    });

  }

  render() {

    return <div className="slider-container">
    <div ref="sliderControl" />
    <label className="slider-container__label">{this.props.label||'noname'}</label>
    </div>
  }

}

export default Slider;




