import React, { Component } from 'react';

export default class AddSmurf extends Component {
  state = {
    name: '',
    age: 0,
    height: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, age, height } = this.state;
    return (
      <form>
        <input
          onChange={this.handleChange}
          placeholder="name"
          type="text"
          name="name"
          value={name}
        />
        <input
          onChange={this.handleChange}
          placeholder="age"
          type="text"
          name="age"
          value={age}
        />
        <input
          onChange={this.handleChange}
          placeholder="height"
          type="text"
          name="height"
          value={height}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
