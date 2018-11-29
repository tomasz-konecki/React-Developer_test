import React, { Component } from "react";
import "./scss/App.scss";
// import Filter from "./components/Filter";
import people from "./data/people";

// function searchingFor(term) {
//   return function(x) {
//     return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
//   };
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people,
      term: "",
      description: false
    };
  }

  setFlag = value => {
    console.log(value);
    let flag = this.state.description;
    this.setState({
      description: flag ? false : true
    });
  };

  searchingFor = term => x =>
    x.first.toLowerCase().includes(term.toLowerCase()) ||
    x.last.toLowerCase().includes(term.toLowerCase());

  searchHandler = e => {
    this.setState({
      term: e.target.value
    });
  };

  render() {
    const { term, people, description } = this.state;
    return (
      <div className="App">
        <input type="text" onChange={this.searchHandler} />

        {people.filter(this.searchingFor(term)).map(person => (
          <div
            className="person"
            key={person.id}
            onClick={() => this.setFlag(person.id)}
          >
            <h6>{person.first}</h6>
            <h6>{person.last}</h6>
            <h6>{person.age}</h6>
            {description && <p className="description">Lorem ipsum</p>}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
