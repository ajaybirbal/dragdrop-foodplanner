import React, { useState, useRef } from 'react';
import { Droppable } from 'react-beautiful-dnd'
import styles from './../styles/brunchbox.module.css'
import FoodItem from './FoodItem'
import { useDispatch } from "react-redux";
import { addNewItemToBrunch, deleteBrunchStateData } from '../reducers/userplanReduxFunctions';
import globals from './../styles/global.module.css'
import Modal from './Modal';
import BlackOverlay from './BlackOverlay';

/*******
 * Displays individual brunch boxes. Responsible for handling them
 */
const BrunchBox = ({ brunch }) => {

    const dispatch = useDispatch();
    const [displayOverlay, setDisplayOverlay] = useState(false);
    //Stores input from the form
    const nameInput = useRef(null)
    const calorieInput = useRef(null)

    /**
     * 
     * Displays the add food form. 
     */
    const displayAddFoodForm = (e) => {
        e.preventDefault()
        setDisplayOverlay(true)
    }
    
    /**
     * Dispatches new food item to the state management.
     * @param {*} e - Event
     */
    const addNewFoodItem = e => {
        e.preventDefault()
        dispatch(addNewItemToBrunch(
            nameInput.current.value,
            calorieInput.current.value,
            brunch.id
        ))
        setDisplayOverlay(false);
    }

    /**
     * Removes the whole brunch from the Planner 
     * */
    const deleteBrunch = e => {
        e.preventDefault()
        dispatch(deleteBrunchStateData(brunch.id))
    }

    return (
        <>
            {/* Add new food form */}
            {displayOverlay ? (
                <div>
                    <BlackOverlay setOverlay={setDisplayOverlay} />
                    <Modal title="Add New Food" closeModal={e => setDisplayOverlay(false)}>
                        <span className={`${globals.textFormModalWidth} ${globals.formLabel} `}>Food Name:</span> <br />
                        <input ref={nameInput} className={globals.textForm} placeholder='Enter food item' />
                        <br />
                        <span className={`${globals.textFormModalWidth} ${globals.formLabel} `}>Calories:</span> <br />
                        <input ref={calorieInput} className={globals.textForm} placeholder='Enter Calories' />
                        
                        <p>
                            <button className={globals.primaryButton} onClick={addNewFoodItem}>Add Brunch</button>
                            <button className={globals.tertiaryButton} onClick={e => setDisplayOverlay(false)}>Cancel</button>
                        </p>
                    </Modal>
                </div>
            ) : ""}


            <div className={styles.brunchOutline}>

                <div className={styles.titleArea}>
                    <h2>{brunch.brunch}</h2>
                    <div>
                        <button onClick={displayAddFoodForm} className={globals.primaryButton}>Add Food</button>
                        <button onClick={deleteBrunch} className={globals.secondaryButton} >Delete {brunch.brunch}</button>
                    </div>
                </div>

                <Droppable droppableId={brunch.id}>
                    {(provided) => (
                        <div
                            className={styles.brunchContainer}
                            {...provided.droppableProps}
                            ref={provided.innerRef}>
                            {brunch.items.map((item, index) => {
                                return (
                                    <FoodItem item={item} index={index} key={item.id} brunchID={brunch.id}/>
                                )
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </>
    )
};

export default BrunchBox;
