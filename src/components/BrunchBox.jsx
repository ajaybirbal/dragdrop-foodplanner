import React, { useState, useRef } from 'react';
import { Droppable } from 'react-beautiful-dnd'
import styles from './../styles/brunchbox.module.css'
import FoodItem from './FoodItem'
import { useDispatch } from "react-redux";
import { addNewItemToBrunch, deleteBrunchStateData } from '../reducers/userplanReduxFunctions';
import globals from './../styles/global.module.css'
import Modal from './Modal';
import BlackOverlay from './BlackOverlay';
import { motion } from 'framer-motion';

/*******
 * Displays individual brunch boxes. Responsible for handling them
 */
const BrunchBox = ({ brunch }) => {

    const dispatch = useDispatch();
    const [displayOverlay, setDisplayOverlay] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

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

        //Clear all previous error messages
        setErrorMessage('')

        //If input is empty
        if (!nameInput.current.value || !calorieInput.current.value) {
            setErrorMessage('Input can not be empty')
            return
        }

        //If calorie input is not number
        if (!Number.isInteger(Number(calorieInput.current.value))) {
            setErrorMessage('Please insert numbers in calorie area')
            return
        }

        //If calorie is zero
        if (Number(calorieInput.current.value) === 0) {
            setErrorMessage('Calorie can not be zero!')
            return
        }

        //If calorie is a negative number
        if (Number(calorieInput.current.value) < 0) {
            setErrorMessage('Calorie can not be negative!')
            return
        }

        dispatch(addNewItemToBrunch(
            nameInput.current.value,
            calorieInput.current.value,
            brunch.id
        ))
        setDisplayOverlay(false);
    }

    /**
     * Removes the whole brunch from the Planner 
     **/
    const deleteBrunch = e => {
        e.preventDefault()
        dispatch(deleteBrunchStateData(brunch.id))
    }

    /**
     * Calculates the total calories in the brunch
     * @param {} brunch 
     * @returns 
     */
    const calculateTotalCalories = brunch => {
        return brunch.items.reduce((sum, currentItem) => {
            return sum + Number(currentItem.calories)
        }, 0)
    }

    return (
        <>
            {/* Add new food form */}
            {displayOverlay ? (
                <div>
                    <BlackOverlay setOverlay={setDisplayOverlay} />
                    <Modal
                        title="Add New Food"
                        closeModal={e => setDisplayOverlay(false)}
                        errorMessage={errorMessage}>
                        <form>
                            <span className={`${globals.textFormModalWidth} ${globals.formLabel} `}>Food Name:</span> <br />
                            <input ref={nameInput} className={globals.textForm} placeholder='Enter food item' />
                            <br />
                            <span className={`${globals.textFormModalWidth} ${globals.formLabel} `}>Calories:</span> <br />
                            <input ref={calorieInput} className={globals.textForm} placeholder='Enter Calories' />

                            <p>
                                <button type='submit' className={globals.primaryButton} onClick={addNewFoodItem}>Add To {brunch.brunch}</button>
                                <button className={globals.tertiaryButton} onClick={e => setDisplayOverlay(false)}>Cancel</button>
                            </p>
                        </form>
                    </Modal>
                </div>
            ) : ""}

            {/* <motion.div initial={{x: '-100vw'}} animate={{x: 0}}> */}
            <div
                className={styles.brunchOutline}>

                <div className={styles.titleArea}>
                    <h2>{brunch.brunch}</h2>
                    <div>
                        <button onClick={displayAddFoodForm} className={globals.primaryButton}>Add Food</button>
                        <button onClick={deleteBrunch} className={globals.secondaryButton} >Delete {brunch.brunch}</button>
                    </div>
                </div>

                <div>
                    <Droppable droppableId={brunch.id}>
                        {(provided) => (
                            <div
                                className={styles.brunchContainer}
                                {...provided.droppableProps}
                                ref={provided.innerRef}>
                                {brunch.items.map((item, index) => {
                                    return (
                                        <FoodItem item={item} index={index} key={item.id} brunchID={brunch.id} />
                                    )
                                })}
                                {provided.placeholder}
                            </div>
                        )}

                    </Droppable>
                </div>
                <h3 className={styles.totalCalories}>Total Calories: {calculateTotalCalories(brunch)}</h3>
            </div>
            {/* </motion.div> */}
        </>
    )
};

export default BrunchBox;
