import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSmurfs } from '../actions';
import Smurfs from './Smurfs';

class SmurfList extends Component {
  componentDidMount() {
    const { getSmurfs } = this.props;
    getSmurfs();
  }

  render() {
    const { smurfs, fetchingSmurfs } = this.props;
    // console.log('this is my ', smurfs);
    if (fetchingSmurfs) return <h1>Loading...</h1>;
    return (
      <div>
        {smurfs.map(smurf => (
          <Smurfs key={smurf.id} smurf={smurf} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
});

SmurfList.propTypes = {
  getSmurfs: PropTypes.func.isRequired,
  smurfs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      age: PropTypes.number.isRequired,
      height: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(
  mapStateToProps,
  { getSmurfs },
)(SmurfList);
