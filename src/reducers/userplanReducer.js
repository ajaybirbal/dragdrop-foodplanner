
export default function userplanReducer(state = [], action){

    switch(action.type){
        
        //Sets the data
        case 'SET_DATA':
            return action.data

        //Deletes the whole brunch
        case 'DELETE_BRUNCH':
            return [...state].filter(brunch => brunch.id !== action.id)
        
        //Adds new brunch to the plan    
        case 'ADD_NEW_BRUNCH':
            return [...state, action.payload]       
        
        //Adds new item to the particular brunch
        case 'ADD_NEW_ITEM':
            const tempState = [...state]
            const [brunchToBeAdded] = tempState.filter( brunch => brunch.id === action.payload.brunchID )
            
            brunchToBeAdded.items.push(action.payload.foodData);
            
            return tempState.map(brunch => brunch.id !== action.payload.brunchID ? brunch : brunchToBeAdded)

        //Deletes the current food item
        case 'DELETE_FOOD_ITEM':

            const stateTemp = [...state]
            const [brunchFromItemtobeDeleted] = stateTemp.filter( brunch => brunch.id === action.brunchID )

            const itemIndex = brunchFromItemtobeDeleted.items.findIndex(food => food.id === action.foodID)
            brunchFromItemtobeDeleted.items.splice(itemIndex, 1)

            return stateTemp.map(brunch => brunch.id !== action.brunchID ? brunch : brunchFromItemtobeDeleted)

        default:
            return state
    }
}