import React from 'react';
import './style.css';

export class PatchBay extends React.Component {
  state = {
    connections: []
  }

  change = (input, output) => {

    console.log("input", input)
    console.log("output", output)
    const alreadyConnected = !!this.state.connections.find(c => c.input.name === input.name && c.output.name === output.name)

    if (alreadyConnected) {
      input.node.disconnect(output.node)
      this.setState({
        connections: this.state.connections.filter(c => !(c.input.name === input.name && c.output.name === output.name))
      })

    } else {
      input.node.connect(output.node)
      this.setState({
        connections: [...this.state.connections,
        { input, output }]
      })
    }

  }
  render() {
    console.log('patch', this.props)
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
                  {this.props.outs.map((_, k) => (
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
