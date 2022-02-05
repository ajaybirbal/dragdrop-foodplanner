
/**
 * Saves the current state of planner to the local storage
 * @param {*} state State to be saved
 */
export const saveState = async (state) => {
    try{
        const serialized = await JSON.stringify(state);
        await localStorage.setItem('plannerState', serialized)
    } catch {
        
    }
}

/**
 * Loads the state from the local storage.
 * @returns Object 
 */
export const loadState =  () => {
    try {
        const serialized = localStorage.getItem('plannerState')

        if(serialized === null)
            return undefined;

        return JSON.parse(serialized)
    } catch (error) {
        console.log("Error: ", error.message);
        return undefined
    }
}
