import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import styles from './../styles/menuwrapper.module.css'
import BrunchBox from './BrunchBox'

const MenuDndContainer = ({ foodList, setFoodList }) => {

    /*************
     * Handles what happens when items are dragged and dropped.
     * 
     * @param result - Given by the drag and drop library
     */
    const onDragHandler = result => {
        const foodListCopy = [...foodList];

        //If not dropped in droppable area
        if (!result.destination) return;

        //Item to be removed
        const removalIndex = foodListCopy.findIndex(item => item.id === result.source.droppableId)
        const [removedItem] = foodListCopy[removalIndex].items.splice(result.source.index, 1)

        //Item to be added
        const addIndex = foodListCopy.findIndex(item => item.id === result.destination.droppableId)
        foodListCopy[addIndex].items.splice(result.destination.index, 0, removedItem)

        setFoodList(foodListCopy);
    }

    return (
        <div className={styles.wrapper}>
            <DragDropContext onDragEnd={onDragHandler}>

                {foodList.map(brunch => {
                    return (
                        // Creates a bunch box
                        <BrunchBox brunch={brunch} />
                    )
                })}

            </DragDropContext>
        </div>
    )
}

export default MenuDndContainer
