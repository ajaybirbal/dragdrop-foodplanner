import React, { useState, useRef } from 'react';
import styles from './../styles/fooditem.module.css'
import { Draggable } from 'react-beautiful-dnd'
import globals from './../styles/global.module.css'
import { useDispatch } from 'react-redux';
import { deleteFoodItem, editFoodItem } from '../reducers/userplanReduxFunctions';
import BlackOverlay from './BlackOverlay';
import Modal from './Modal';
import { motion } from 'framer-motion';

const FoodItem = ({ item, index, brunchID }) => {

    const dispatch = useDispatch();
    const [displayOverlay, setDisplayOverlay] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    //Stores input from the form
    const nameInput = useRef(null)
    const calorieInput = useRef(null)

    /**
     * Displays the edit box
     * @param {*} e 
     */
    const displayEditItemBox = e => {
        e.preventDefault();
        setErrorMessage('')
        setDisplayOverlay(true)
    }

    /**
     * Edits the brunch box.
     */
    const submitEditBox = e => {
        setErrorMessage('')
        e.preventDefault();

        if (!nameInput.current.value || !calorieInput.current.value) {
            setErrorMessage('Input can not be empty')
            return
        }

        if (!Number(calorieInput.current.value)) {
            setErrorMessage('Calories must be a number')
            return
        }

        //If changes has been made 
        if ((nameInput.current.value !== item.name) || Number(calorieInput.current.value) !== item.calories) {
            setErrorMessage('')
            dispatch(editFoodItem(
                nameInput.current.value,
                calorieInput.current.value,
                item.id,
                brunchID
            ))
        } else
            setErrorMessage("No changes made!")

        setDisplayOverlay(false)
    }

    //Responsible for deleting the food item
    const deleteItem = e => {
        e.preventDefault();
        dispatch(deleteFoodItem(brunchID, item.id))
    }

    return (
        <>
            {displayOverlay ? (
                <>
                    <BlackOverlay setOverlay={setDisplayOverlay} />
                    <Modal
                        title="Edit Food"
                        closeModal={e => setDisplayOverlay(false)}
                        errorMessage={errorMessage}>
                        <form>
                            <span className={`${globals.textFormModalWidth} ${globals.formLabel} `}>Food Name:</span> <br />
                            <input ref={nameInput} className={globals.textForm} defaultValue={item.name} />
                            <br />
                            <span className={`${globals.textFormModalWidth} ${globals.formLabel} `}>Calories:</span> <br />
                            <input ref={calorieInput} className={globals.textForm} defaultValue={item.calories} />

                            <p>
                                <button type='submit' className={globals.primaryButton} onClick={submitEditBox}>Save Changes</button>
                                <button className={globals.tertiaryButton} onClick={e => setDisplayOverlay(false)}>Cancel</button>
                            </p>
                        </form>
                    </Modal>
                </>
            ) : ''}

            <Draggable key={item.id} draggableId={item.id} index={index}>
                {provided => (
                    <motion.div initial={{ scale: 1.6 }} animate={{ scale: 1 }}>
                        <div
                            className={styles.itemContainer}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            <div>

                                {/* ------ Add row stuffs here ------- */}
                                <span>
                                    {item.name}
                                </span>
                                <span>
                                    {item.calories} Calories
                                </span>
                                <div>
                                    <button onClick={displayEditItemBox} className={globals.secondaryButton}>Edit</button>
                                    <button onClick={deleteItem} className={globals.tertiaryButton}>Delete</button>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                )}
            </Draggable>
        </>
    );
};

export default FoodItem;
