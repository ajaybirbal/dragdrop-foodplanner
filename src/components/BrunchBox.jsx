import React from 'react';
import { Droppable } from 'react-beautiful-dnd'
import styles from './../styles/brunchbox.module.css'
import FoodItem from './FoodItem'
import { useDispatch } from "react-redux";
import { deleteBrunchStateData } from '../reducers/userplanReduxFunctions';
import globals from './../styles/global.module.css'

/*******
 * Displays individual brunch boxes. Responsible for handling them
 */
const BrunchBox = ({ brunch }) => {

    const dispatch = useDispatch();

    //Adds food item
    const addFood = (e) => {
        e.preventDefault()
    }

    /**
     * Removes the whole brunch from the Planner 
     * */
    const deleteBrunch = e => {
        e.preventDefault()
        dispatch(deleteBrunchStateData(brunch.id))
    }

    return (
        <div className={styles.brunchOutline}>

            <div className={styles.titleArea}>
                <h2>{brunch.brunch}</h2>
                <div>
                    <button onClick={addFood} className={globals.primaryButton}>Add Food</button>
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
                                <FoodItem item={item} index={index} key={item.id} />
                            )
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
};

export default BrunchBox;
