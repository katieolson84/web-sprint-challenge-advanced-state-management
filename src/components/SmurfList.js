import React, {useEffect} from 'react';
import { connect } from 'react-redux'

// components
import Smurf from './Smurf';
import { getSmurf } from './../actions'

 const SmurfList = ({smurfs, isFetching, getSmurf })=> {
    useEffect(() => {
        getSmurf();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    if(isFetching){
        return <h2> Loading Smurfs...</h2>;
    }

    // ! this will render the current array of smurfs on the page, works with current array from API
    return(
        <div className="listContainer">
            {smurfs.map((smurf) => (
                <Smurf key={smurf.id} smurf={smurf}/>
            ))}
        </div>
        );
}

const mapStateToProps = (state) => {
    return({
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
        
    })
}
export default connect(mapStateToProps, {getSmurf})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.