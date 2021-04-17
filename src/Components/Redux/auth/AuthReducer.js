const initialState={
    isAuthenticated: false,
    user:{},
    error:null,
    success: null,
}
export default function(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}
