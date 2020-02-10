import React, { Component } from "react";

import { Button, TextField, FormControl } from "@material-ui/core";

import Header from "./components/header";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleSubmit() {
    alert("submeteu");
  }

  fetchUsers() {
    const users = { users: { name: "david", livro: "teste" } };
    console.log(users);
    this.setState(users);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FormControl>
          <form onSubmit={() => this.handleSubmit()}>
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Hello World"
            />
            <Button variant="contained" type="submit" color="primary">
              submit
            </Button>
          </form>
        </FormControl>
      </div>
    );
  }
}
