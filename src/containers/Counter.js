import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [{ counter: 0 }]
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.addCounter = this.addCounter.bind(this);
  }

  increment(idx) {
    this.state.counters[idx].counter++;
    this.setState({ counters: this.state.counters });
  }
  decrement(idx) {
    this.state.counters[idx].counter--;
    this.setState({ counters: this.state.counters });
  }
  addCounter() {
    this.state.counters.push({ counter: 0 });
    this.setState({ counters: this.state.counters });
  }

  render() {
    return (
      <div>
        <button onClick={this.addCounter}>Add Counter </button>
        <div style={{ textAlign: "center" }}>
          <h1> Counter </h1>
          {this.state.counters.map((count, idx) => {
            return (
              <div key={idx}>
                <br />
                <div style={{ border: "1px solid black", width: "400px", display: "inline-block" }}>
                  <p style={{ textAlign: "center" }}>{count.counter}</p>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button onClick={() => this.increment(idx)}> Increment</button>
                    <button onClick={() => this.decrement(idx)}> Decrement </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Counter;
