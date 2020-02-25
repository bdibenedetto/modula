import React from 'react';
import './style.css';

export class PatchBay extends React.Component {
  state = {
    connections: []
  }

  change = (input, output) => {
    console.log('input,', input)
    console.log('output,', output)
    input.node.connect(output.node)
  }
  render() {
    console.log('this.pr', this.props)
    return (
      <div className="patchbay">
        <h4>Patch Bay</h4>

        <table>
          <thead>

            <tr>
              <td>""</td>
              {
                this.props.outs.map((o, ok) => (
                  <td key={ok}>{o.name}</td>

                ))
              }
            </tr>
          </thead>
          <tbody >

            {
              this.props.ins.map((i, ik) => (
                <tr key={ik}>
                  <td>{i.name}</td>
                  {this.props.ins.map((_, k) => (
                    <td key={k}>

                      <input type="checkbox" onChange={() => this.change(i, this.props.outs[k])} />
                    </td>

                  ))}
                </tr>
              ))
            }
          </tbody>

        </table>
      </div>
    )
  }
}

export default PatchBay;
