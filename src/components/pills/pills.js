import React, { Component } from 'react'
import { connect} from 'react-redux'
import { fetchJoke,selectCategory } from '../../actions/categoryActions'
import {FlexBox, FlexItem} from "react-styled-flex"
import '../pills/pills.css'

class Pills extends Component {

    constructor(props){
        super(props)

    }


    changeCategoryOnClick(category){
     
        this.props.selectCategory(category)
        this.props.fetchJoke(category)
      

    }

    

    render() {

        
       
        const activeCategory=this.props.categories
        const { data, loading } = this.props.categories
       
        const categories = data;
        if (loading) {
            return "loading"
        }

        if (loading == false) {
         
           

            return (


                <div>
                    
                    <FlexBox >
                        <FlexItem>
                            {
                                this.props.categories.data.categories.map((category) => {
                                    return (
                                        <a   class="category__item link" onClick={() => { this.changeCategoryOnClick(category) }}
                                        className={
                                           
                                            (category === activeCategory ? "category__item" : "category__item  github")
                                          } >{category}
       
        </a>
                                    )
                                })
                            }


                        </FlexItem>
                    </FlexBox>
                </div>
            )
        }
        else {
            return "loading.."
        }




    }


}

const mapStateToProps = state => ({
    activeCategory:state.getCategories.activeCategory,
    categories: state.getCategories.categories

})





export default connect(mapStateToProps, {
        fetchJoke,
        selectCategory
})(Pills)