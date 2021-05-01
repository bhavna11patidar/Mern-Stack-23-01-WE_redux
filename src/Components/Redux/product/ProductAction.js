import axios from 'axios';
export const onAddProduct=(data)=>{
    //console.log(data);
    const fd=new FormData();
    fd.append("name", data.name);
    fd.append("categoryId", data.categoryId);
    fd.append("price", data.price);
    fd.append("image", data.image);
    fd.append("quantity", data.quantity);
    fd.append("description", data.description);

    return (dispatch)=>{
        axios.post('http://localhost:5000/saveProduct',fd)
        .then(res=>{
            if(res.status==200){
                dispatch(onAddSuccess(res.data.msg))
            }else{
                dispatch(onAddFailure(res.data.msg))
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