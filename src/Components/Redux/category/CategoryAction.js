import axios from 'axios';
export const addCategory=(newCategory)=>{
    //console.log("Add Cat");
    console.log(newCategory);
    return (dispatch)=>{
        axios.post('http://localhost:5000/saveCategory', newCategory)
        .then(res=>{
            if(res.status==200){
                dispatch(onAddSuccess(res.data.msg));
            }else{
                dispatch(onAddFailure(res.data.msg));
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}

export const onFetchCategories=()=>{
    return (dispatch)=>{
        dispatch(onFetching)
        axios.get('http://localhost:5000/viewCategory')
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
            }else{
                dispatch(onFetchFailure(res.data.msg));
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export const onAddSuccess=(msg)=>{
    return{
        type:"ADD_SUCCESS",
        payload:msg
    }
}
export const onAddFailure=(msg)=>{
    return{
        type:"ADD_FAILURE",
        payload:msg
    }
}

export const onFetching=()=>{
    return{
        type:"FETCHING"
    }
}
export const onFetchSuccess=(data)=>{
    return{
        type:"FETCH_SUCCESS",
        payload:data,
    }
}

export const onFetchFailure=(msg)=>{
    return{
        type:"FETCH_FAILURE",
        payload:msg,
    }
}