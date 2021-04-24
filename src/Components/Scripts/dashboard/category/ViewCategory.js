import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {onFetchCategories} from './../../../Redux/category/CategoryAction';

import { Spinner } from 'reactstrap';

class ViewCategory extends Component {
    constructor(props){
        super();
    }
    componentDidMount(){
        this.getAllCategories();
    }

    getAllCategories=()=>{
        this.props.onFetchCategories();
    }

    render() {
        console.log(this.props);
        const {categories}=this.props.categories;
        if(this.props.categories.dataState=="FETCHING" || this.props.categories.dataState=="NOT_INITIALIZED"){
            return(
                <div className="text-center">
                    <Spinner color="primary" />
                </div> 
            )
        }
        else{

        return (
            <div className="container">
                <div className="row">
                   <div className="col-md-8">
                       <table className="table table-bordered">
                           <thead className="table-dark">
                                <th>S. No</th>
                                <th>Category Name</th>
                           </thead>
                           <tbody>
                                {categories.map((el, i)=>(
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{el.categoryName}</td>
                                    </tr>
                                 ) )}
                           </tbody>
                       </table>
                   </div>
                </div>
            </div>
        )
        }
    }
}
const mapStateToProps=state=>({
    categories:state.categories
})

export default connect(mapStateToProps, {onFetchCategories})(withRouter(ViewCategory))