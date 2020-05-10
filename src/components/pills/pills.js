import React, { Component } from 'react'
import { connect} from 'react-redux'
import { fetchJoke,selectCategory } from '../../actions/categoryActions'

import '../pills/pills.css'

class Pills extends Component {

    constructor(props){
        super(props)
       


    }

    componentWillMount() {
        
       
    }

    changeCategoryOnClick(category){
        console.log(category)
        console.log(this.props)
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
                    
                    <div class="row">
                        <div class="col-lg-12">
                            {
                                this.props.categories.data.categories.map((category) => {
                                    return (
                                        <a   class="profile-card-social__item" onClick={() => { this.changeCategoryOnClick(category) }}
                                        className={
                                
                                            (category === activeCategory ? " active_item" : "profile-card-social__item")
                                          } >{category}
       
        </a>
                                    )
                                })
                            }


                        </div>
                    </div>
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