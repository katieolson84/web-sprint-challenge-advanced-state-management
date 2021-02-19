import React, { useReducer, useEffect } from "react";
import { connect } from 'react-redux';
import { reducer, initialState } from './reducers';
import { getSmurf } from './actions';

// Components
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    props.getSmurf();
    console.log('working')
  })

  
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList formData={state} dispatch={dispatch}/>
          <AddForm dispatch={dispatch}/>
        </main>
      </div>
    );
  }

const mapStateToProps = state => {
  return{
    smurfs:state.smurfs,
  }
}
export default connect(mapStateToProps, {getSmurf})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.