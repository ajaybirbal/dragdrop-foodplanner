import React from 'react';
import styles from './../styles/fooditem.module.css'
import { Draggable } from 'react-beautiful-dnd'

const FoodItem = ({ item, index }) => {
    return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {provided => (
                <div
                    className={styles.itemContainer}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps} >
                    <div>
                        {/* ------ Add row stuffs here ------- */}
                        <span>
                            {item.name}
                        </span>
                        <span>
                            {item.calories} Calories
                        </span>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default FoodItem;
