/***
 * Adds and handle button that adds brunch to the planner
 */

import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewBrunchToState } from '../reducers/userplanReduxFunctions';
import BlackOverlay from './BlackOverlay';
import Modal from './Modal';
import globals from './../styles/global.module.css'

const AddBrunchButton = ({className}) => {

    const dispatch = useDispatch();
    const [displayOverlay, setDisplayOverlay] = useState(false);
    
    //Ref for storing name input
    const nameInput = useRef(null);

    /**
     * Displays add new brunch form
     */
    const displayAddForm = e => {
        e.preventDefault();
        setDisplayOverlay(true)
    }

    /**
     * Responsible for dispatching the new brunch to the state
     */
    const addNewBrunch = e => {
        dispatch(addNewBrunchToState(nameInput.current.value))
        setDisplayOverlay(false);
    }

    return (
        <div>
            {displayOverlay ? (
                <>
                    <BlackOverlay setOverlay={setDisplayOverlay} />
                    
                    {/* Create a add new brunch form here */}
                    <Modal title="Add new brunch:" closeModal={e => setDisplayOverlay(false)}>
                        <span className={`${globals.textFormModalWidth} ${globals.formLabel} `}>Brunch Name:</span> <br /> 
                        <input ref={nameInput} className={globals.textForm} placeholder='Enter brunch name' />
                        <p>
                            <button className={globals.primaryButton} onClick={addNewBrunch}>Add Brunch</button>
                            <button className={globals.tertiaryButton} onClick={e => setDisplayOverlay(false)}>Cancel</button>
                        </p>
                    </Modal>

                </>
            ) : ""}
            <button onClick={displayAddForm} className={className}>Add Brunch</button>
        </div>
    )
}

export default AddBrunchButton
