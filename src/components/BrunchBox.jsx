import React from 'react';
import { Droppable } from 'react-beautiful-dnd'
import styles from './../styles/brunchbox.module.css'
import FoodItem from './FoodItem';

/*******
 * Displays individual brunch boxes. Responsible for handling them
 */
const BrunchBox = ({ brunch }) => {

    //Adds food item
    const addFood = (e) => {
        e.preventDefault()
    }

    //Removes the whole brunch from the Planner
    const deleteBrunch = e => {
        e.preventDefault()
    }

    return (
        <div className={styles.brunchOutline}>

            <div className={styles.titleArea}>
                <h2>{brunch.brunch}</h2>
                <div>
                    <button onClick={addFood}>Add Food</button>
                    <button onClick={deleteBrunch}>Delete Food</button>
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
