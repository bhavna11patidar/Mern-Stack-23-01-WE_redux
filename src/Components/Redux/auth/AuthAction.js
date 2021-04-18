import axios from 'axios';

export const onRegister=(newUser, history)=>{
    return (dispatch)=>{
        axios.post('http://localhost:5000/register', newUser)
        .then(res=>{
           // console.log(res);
           if(res.status==200){
               history.push('/login')
           }else{
               history.push('/')
           }
        }).catch(err=>{
            console.log(err);
        })
    }
}