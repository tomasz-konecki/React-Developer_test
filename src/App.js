import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, FormGroup, Container, Label, Button } from "reactstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "./scss/App.scss";
import Loader from "./components/Loader";
import Table from "./components/Table";
import Diagram from "./components/Diagram";
const axios = require("axios");

const APIurl = "http://idr.intevi.uk/api/readings";
const APIid = "2f3fbe5ca313a4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDate: "",
      lastDate: "",
      group: "hour",
      order: "ascending",
      data: [],
      isLoading: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true }, () => this.createQuery());
  };

  createQuery = () => {
    let { firstDate, lastDate, group, order } = this.state;
    let sort = order === "ascending" ? 1 : -1;
    let query = `${APIurl}?id=${APIid}&from=${firstDate}&to=${lastDate}&sort=${sort}&group=${group}&sort=${sort}`;
    this.getData(query);
  };

  getData = url => {
    axios({
      method: "get",
      url
    })
      .then(response =>
        this.setState({ data: response.data, isLoading: false })
      )
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  render() {
    let { isLoading, isError, data } = this.state;
    return (
      <div className="App-container">
        <h4>React Developer test</h4>

        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="firstDate">From: </Label>
            <Input type="date" name="firstDate" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="lastDate">To: </Label>
            <Input type="date" name="lastDate" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="group">Group by:</Label>
            <select
              name="group"
              className="form-control"
              onChange={this.handleChange}
            >
              <option>hour</option>
              <option>day</option>
              <option>week</option>
              <option>month</option>
              <option>year</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label for="order">Order:</Label>
            <select
              name="order"
              className="form-control"
              onChange={this.handleChange}
            >
              <option>ascending</option>
              <option>descending</option>
            </select>
          </FormGroup>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>

        {isLoading && <Loader />}
        {data.length > 0 && <Diagram data={data} />}
        {data.length > 0 && <Table data={data} />}
      </div>
    );
  }
}

export default App;
