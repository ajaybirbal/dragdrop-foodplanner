import initialData from './../initialdata'

export default function userplanReducer(state = [], action){

    switch(action.type){
        
        //Sets the data
        case 'SET_DATA':
            return action.data

        //Deletes the whole brunch
        case 'DELETE_BRUNCH':
            return [...state].filter(brunch => brunch.id !== action.id)
            
        default:
            return state
    }
}