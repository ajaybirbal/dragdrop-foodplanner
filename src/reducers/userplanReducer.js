import initialData from './../initialdata'

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
        
        //Adds new item to the brunch
        case 'ADD_NEW_ITEM':
            return state
         

        default:
            return state
    }
}