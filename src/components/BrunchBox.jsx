import React from 'react';
import { Droppable } from 'react-beautiful-dnd'
import styles from './../styles/brunchbox.module.css'
import FoodItem from './FoodItem';

const BrunchBox = ({ brunch }) => {
    return (
        <div className={styles.brunchOutline}>
            <h2>{brunch.brunch}</h2>
            <Droppable droppableId={brunch.id}>
                {(provided) => (
                    <div
                        className={styles.brunchContainer}
                        {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {brunch.items.map((item, index) => {
                            return (
                                <FoodItem item={item} index={index} />
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
