import initialData from './../initialdata'

export default function userplanReducer(state = [], action){

    switch(action.type){
        
        //Sets the data
        case 'SET_DATA':
            return action.data

        default:
            return state
    }
}