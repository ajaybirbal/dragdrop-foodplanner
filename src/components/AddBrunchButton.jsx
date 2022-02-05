/***
 * Adds and handle button that adds brunch to the planner
 */

import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewBrunchToState } from '../reducers/userplanReduxFunctions';
import BlackOverlay from './BlackOverlay';
import Modal from './Modal';
import globals from './../styles/global.module.css'

const AddBrunchButton = ({ className }) => {

    const dispatch = useDispatch();
    const [displayOverlay, setDisplayOverlay] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

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
        e.preventDefault();
        //Clear previous error messages
        setErrorMessage('')

        //If input is empty
        if (!nameInput.current.value) {
            setErrorMessage('Input can not be empty')
            return
        }

        dispatch(addNewBrunchToState(nameInput.current.value))
        setDisplayOverlay(false);
    }

    return (
        <div>
            {displayOverlay ? (
                <>
                    <BlackOverlay setOverlay={setDisplayOverlay} />

                    {/* Create a add new brunch form here */}
                    <Modal
                        title="Add new brunch:"
                        closeModal={e => setDisplayOverlay(false)}
                        errorMessage={errorMessage}>
                        <form>
                            <span className={`${globals.textFormModalWidth} ${globals.formLabel} `}>Brunch Name:</span> <br />
                            <input ref={nameInput} className={globals.textForm} placeholder='Enter brunch name' />
                            <p>
                                <button type='submit' className={globals.primaryButton} onClick={addNewBrunch}>Add Brunch</button>
                                <button className={globals.tertiaryButton} onClick={e => setDisplayOverlay(false)}>Cancel</button>
                            </p>
                        </form>
                    </Modal>

                </>
            ) : ""}
            <button onClick={displayAddForm} className={className}>Add Brunch</button>
        </div>
    )
}

export default AddBrunchButton
