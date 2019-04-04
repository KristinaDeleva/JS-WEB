import React from 'react';
import { createGenerateClassName } from '@material-ui/core';

const innerState = {
    title: null,
    description: null,
    imageUrl: null
}

const handleChange = (event) => {
    innerState[event.target.name] = event.target.value
}


const CreateForm = (props) => {
    
    return (
        <div className="create-form">
            <h1>Create game</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.createGame(innerState);
                // TODO: prevent the default behaviour of the click event, call the createGame function and pass it the data from the form
            }}>
                <label>Title</label>
                <input type="text" name="title" onChange={handleChange} id="title"/>
                <label>Description</label>
                <textarea type="text" onChange={handleChange} name="description" id="description"/>
                <label>ImageUrl</label>
                <input type="text" onChange={handleChange} name="imageUrl" id="imageUrl"/>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
};

export default CreateForm;

