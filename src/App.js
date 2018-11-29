import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "./scss/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  handleChange = e => {
    console.log("handleChange invoked...", e);
  };

  render() {
    return (
      <div className="App">
        <h1>React Developer Test</h1>
        <DatePicker
          inline
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
