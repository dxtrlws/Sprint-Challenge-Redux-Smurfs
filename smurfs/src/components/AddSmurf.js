import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSmurf } from '../actions';

class AddSmurf extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      height: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, height } = this.state;
    const { addSmurf } = this.props;
    const smurf = {
      name,
      age,
      height,
    };
    addSmurf(smurf);
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  };

  render() {
    const { name, age, height } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
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
        <button onSubmit={this.handleSubmit} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

AddSmurf.propTypes = {
  addSmurf: PropTypes.func.isRequired,
};

export default connect(
  () => {},
  { addSmurf },
)(AddSmurf);
