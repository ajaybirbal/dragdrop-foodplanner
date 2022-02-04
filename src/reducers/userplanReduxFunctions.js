import { v4 } from "uuid"

/**
 * Sets the state with the current data
 * 
 * @param data Takes data that is to be replaced
 */
export const setUserplanStateData = data => {
    return {
        type: 'SET_DATA',
        data
    }
}


/**
 * Deletes the whole brunch
 * 
 * @param id Id of the brunch that is to be deleted
 */
export const deleteBrunchStateData = id => {
    return {
        type: 'DELETE_BRUNCH',
        id
    }
}

/**
 * Adds new brunch to the state and sets items to empty array.
 * 
 * @param  name - brunch name
 */
export const addNewBrunchToState = name => {
    return {
        type: 'ADD_NEW_BRUNCH',
        payload: {
            id: v4(),
            brunch: name,
            items: []
        }
    }
}

/**
 * Adds a food item to the brunch
 * @param {*} name Name of the food item
 * @param {*} calories calories in the food item
 * @param {*} id ID of the brunch
 */
export const addNewItemToBrunch = (name, calories, id) => {
    return{
        type: 'ADD_NEW_ITEM',
        payload: {
            brunchID: id,
            foodData: {
                id: v4(),
                name,
                calories
            }
        }
    }
}