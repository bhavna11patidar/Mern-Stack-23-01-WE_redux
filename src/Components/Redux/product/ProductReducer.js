const initialState={
    products:null,
    error:null,
    success:null,
    dataState:"NOT_INITIALIZED",
}

export default function(state=initialState, action){
    switch(action.type){
        case "ADD_SUCCESS":
            return{
                ...state,
                success:action.payload
            }
        case "ADD_FAILURE":
            return{
                ...state,
                error:action.payload,
            }
        default:
            return state
    }
}