import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import SmurfList from './SmurfList';
import AddSmurf from './AddSmurf';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const App = () => (
  <div className="App">
    <h1>SMURFS! 2.0 W/ Redux</h1>
    <Link to="/">Home</Link>
    <Link to="/smurfs">Smurf List</Link>
    <Link to="/addsmurf">Add Smurf</Link>
    <Route path="/smurfs" component={SmurfList} />
    <Route path="/addsmurf" component={AddSmurf} />
  </div>
);

export default App;
