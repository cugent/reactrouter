import React, { Component } from "react";
import Personal from "../components/Personal";
import Work from "../components/Work";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: "personal",
      description: "",
      descriptionValid: true,
      minutes: "",
      minutesValid: true,
      personalObj: {
        time: 0,
        array: []
      },
      workObj: {
        time: 0,
        array: []
      }
    };
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  validation = event => {
    switch (event.target.id) {
      case "description":
        if (this.state.description.length < 5) {
          this.setState({ descriptionValid: false });
        } else {
          this.setState({ descriptionValid: true });
        }
        break;
      case "minutes":
        if (parseInt(this.state.minutes) < 0 || parseInt(this.state.minutes) > 240 || this.state.minutes === "") {
          this.setState({ minutesValid: false });
        } else {
          this.setState({ minutesValid: true });
        }
        break;
      default:
        break;
    }
  };

  add = () => {
    if (this.state.project === "personal") {
      let object = {
        description: this.state.description,
        minutes: this.state.minutes
      };
      this.state.personalObj.array.push(object);
      this.state.personalObj.time += parseInt(object.minutes);

      this.setState({ personalObj: this.state.personalObj });
    } else {
      let object = {
        description: this.state.description,
        minutes: this.state.minutes
      };
      this.state.workObj.array.push(object);
      this.state.workObj.time += parseInt(object.minutes);

      this.setState({ workObj: this.state.workObj });
    }
    this.setState({ project: "personal", description: "", descriptionValid: true, minutes: "", minutesValid: true });
  };

  render() {
    return (
      <div className="App">
        <h1>Work Logger</h1>
        <form>
          <label>Project </label>
          <select value={this.state.project} onChange={this.handleChange} id="project">
            <option value="personal">Personal</option>
            <option value="work">Work</option>
          </select>
          <br />
          <br />
          <label>Description </label>
          <input name="high" value={this.state.description} onBlur={this.validation} onChange={this.handleChange} id="description" type="text" />
          <br />
          {!this.state.descriptionValid ? <small className="red">Description is Invalid </small> : null}
          <br />
          <label>Minutes</label>
          <input value={this.state.minutes} onBlur={this.validation} onChange={this.handleChange} id="minutes" type="number" />
          <br />
          {!this.state.minutesValid ? <small className="red">Minutes are Invalid </small> : null}
          <br />
          <button onClick={this.add} disabled={!this.state.descriptionValid || !this.state.minutesValid || this.state.description === "" || this.state.minutes === ""}>
            Add
          </button>
        </form>

        <hr />

        <div id="workarea">
          <div id="personal">
            <Personal object={this.state.personalObj} />
          </div>
          <div id="work">
            <Work object={this.state.workObj} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
