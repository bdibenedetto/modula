import React from 'react';
import Tone from 'tone'

export class Scope extends React.Component {
  constructor() {
    super()

    this.analyser = Tone.context.createAnalyser();
    this.analyser2 = new Tone.Analyser()
  }

  componentDidMount() {
    // this.analyser.connect(this.props.input)

    this.props.input.connect(this.analyser);
    this.props.input.connect(this.analyser2);

    this.spectCtx = document.getElementById('spectrum').getContext('2d');
    this.scopeCtx = document.getElementById('scope').getContext('2d');
    this.draw(this.analyser);
  }


  draw = () => {
    this.drawSpectrum(this.spectCtx);
    this.drawScope(this.scopeCtx);

    requestAnimationFrame(this.draw);
  }

  drawSpectrum = (ctx) => {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var freqData = new Uint8Array(this.analyser2.getValue());
    var scaling = height / 256;

    ctx.fillStyle = 'rgba(0, 20, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(0, 200, 0)';
    ctx.beginPath();

    for (var x = 0; x < width; x++)
      ctx.lineTo(x, height - freqData[x] * scaling);

    ctx.stroke();
  }

  drawScope = (ctx) => {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var timeData = new Uint8Array(this.analyser.frequencyBinCount);
    var scaling = height / 256;
    var risingEdge = 0;
    var edgeThreshold = 5;
    this.analyser.getByteTimeDomainData(timeData);

    ctx.fillStyle = 'rgba(0, 20, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(0, 200, 0)';
    ctx.beginPath();

    // No buffer overrun protection
    while (timeData[risingEdge++] - 128 > 0 && risingEdge <= width);
    if (risingEdge >= width) risingEdge = 0;

    while (timeData[risingEdge++] - 128 < edgeThreshold && risingEdge <= width);
    if (risingEdge >= width) risingEdge = 0;

    for (var x = risingEdge; x < timeData.length && x - risingEdge < width; x++)
      ctx.lineTo(x - risingEdge, height - timeData[x] * scaling);

    ctx.stroke();
  }



  render() {
    return (
      <div className="scope__panel">
        <div>
          <canvas id='scope' width="400" height="200"></canvas>
          <br />
          <canvas id='spectrum' width="400" height="200"></canvas>
        </div>
      </div>
    )
  }
}

export default Scope;






