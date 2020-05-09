import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchCategories} from '../../actions/categoryActions'

import '../pills/pills.css'

class Pills extends Component {

    componentWillMount(){
        this.props.fetchCategories();
    }

    render() {
       
        const {data,loading}=this.props.categories
        const categories=data;
        if(loading){
            return "loading"
        }

        if(loading==false){
            console.log(this.props.categories.data.categories)

            return (
                <div>
                    <div class="row">
                        <div class="col-lg-12">
                            {
                                this.props.categories.data.categories.map((category)=>{
                                            return(
                                <a href=""><button class="btn btn-default default1">{category}</button></a>
                                            )
                                })
                            }
                            
           
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return "loading.."
        }
       

        
       
    }


}

const mapStateToProps=state=>({
        
            categories:state.getCategories.categories
        
})


export default connect(mapStateToProps,{fetchCategories})(Pills)