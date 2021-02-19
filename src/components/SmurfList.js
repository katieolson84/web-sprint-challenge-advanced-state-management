import React, { useEffect } from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux'
import { getSmurf } from './../actions'

 const SmurfList = ({ smurfs, isFetching, error, getSmurf })=> {
     useEffect(() => {
         getSmurf();
     }, []); // eslint-disable-line react-hooks/exhaustive-deps

     if (error) {
         return <h2> Something went wrong: {error}</h2>;
     }

     if (isFetching){
         return <h1>Loading...</h1>;
     }

    // const isLoading = false;
    // console.log (props.smurfs)
    // const testSmurf = {
    //     id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    //     name:'Poppa Smurf',
    //     position:'Village Leader',
    //     nickname: 'Pops',
    //     description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    

    // if (isLoading) {
    //     return <h1>Loading...</h1>;
    // }

    return(
        <div className="listContainer">
        {smurfs.map((item) => (
            <div key={item.id}>
                <Smurf smurf={smurfs}/>
            </div>
        ))}
        </div>
        );
}
const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, {getSmurf})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.