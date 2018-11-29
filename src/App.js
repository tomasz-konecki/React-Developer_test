import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, FormGroup, Container, Label, Button } from "reactstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "./scss/App.scss";

const url = "http://idr.intevi.uk/api/readings";
const id = "2f3fbe5ca313a4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { firstDate: "", lastDate: "", group: "hour" };
  }

  handleChange = e => {
    console.log("handleChange invoked...", e.target.name, e.target.value);
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.createQuery();
  };

  createQuery = () => {
    let { firstDate, lastDate, group } = this.state;
    let query = `${url}?id=${id}&from=${firstDate}&to=${lastDate}&sort=1&group=${group}&sort=1`;
    console.log(query);
  };

  render() {
    return (
      <div className="App-container">
        <h3>React Developer Test</h3>
        <Container>
          <Form onSubmit={this.handleFormSubmit}>
            <FormGroup>
              <Label for="firstDate">From: </Label>
              <input
                type="date"
                name="firstDate"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastDate">To: </Label>
              <input type="date" name="lastDate" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="group-select">Group by:</Label>
              <select name="group" onChange={this.handleChange}>
                <option>hour</option>
                <option>day</option>
                <option>week</option>
                <option>month</option>
                <option>year</option>
              </select>
            </FormGroup>
            <button type="submit">Submit</button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
