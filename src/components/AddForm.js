import React, { useState } from 'react';
import { connect } from 'react-redux';

// Components
import { addSmurf, newErrorMessage } from '../actions';

const AddForm = (props) => {
    const [state, setState] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value,
            [e.target.postition]:e.target.value,
            [e.target.nickname]:e.target.value,
            [e.target.description]:e.target.value,
        });
    }

// ! This will give an error message when the fields are not filled out completely, this works!
    const handleSubmit = e => {
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
            props.newErrorMessage();
        }else{
            props.addSmurf(state);
            e.target.reset()
        }
<<<<<<< HEAD
        
=======
        console.log(props.addSmurf(state))
       
>>>>>>> d2861f941d418b54851a3ba021a7c1cbcb46f9e5
    }

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input 
                onChange={handleChange} 
                value={props.name} 
                name="name" 
                id="name"
                />
                
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input 
                onChange={handleChange} 
                value={props.position} 
                name="position" 
                id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input 
                onChange={handleChange} 
                value={props.nickname} 
                name="nickname" 
                id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea 
                onChange={handleChange} 
                value={props.description} 
                name="description" 
                id="description" />
            </div>
            {
                props.errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.errorMessage}</div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);
}
const mapStateToProps = state => {
    return ({
        errorMessage: state.error,
        smurfs: state.smurfs
    })
}
export default connect(mapStateToProps, {newErrorMessage, addSmurf})(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.