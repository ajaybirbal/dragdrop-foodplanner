import React from 'react';
import styles from './../styles/fooditem.module.css'
import { Draggable } from 'react-beautiful-dnd'
import globals from './../styles/global.module.css'
import { useDispatch } from 'react-redux';
import { deleteFoodItem } from '../reducers/userplanReduxFunctions';

const FoodItem = ({ item, index, brunchID }) => {

    const dispatch = useDispatch();

    const editItem = e => {
        e.preventDefaukt();
    }

    //Responsible for deleting the food item
    const deleteItem = e => {
        e.preventDefault();
        dispatch(deleteFoodItem(brunchID, item.id))
    }

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
                        <div>
                            <button onClick={editItem} className={globals.secondaryButton}>Edit</button>
                            <button onClick={deleteItem} className={globals.tertiaryButton}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default FoodItem;
