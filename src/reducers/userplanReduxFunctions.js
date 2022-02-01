
/****
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


/***
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