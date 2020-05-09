import React, { Component } from 'react'
import { connect} from 'react-redux'
import { fetchCategories,selectCategory } from '../../actions/categoryActions'

import '../pills/pills.css'

class Pills extends Component {

    constructor(props){
        super(props)
       

        this.handleClick=this.handleClick.bind(this)

    }

    componentWillMount() {
        this.props.fetchCategories();
    }

    handleClick =function(category){
        console.log(category)
        
    }

    render() {

        
        console.log(this.props)
       
        const { data, loading } = this.props.categories
        console.log(this.state)
        
        const categories = data;
        if (loading) {
            return "loading"
        }

        if (loading == false) {
            console.log(this.props.categories.data.categories)
            selectCategory("TRavel")

            return (


                <div>
                    
                    <div class="row">
                        <div class="col-lg-12">
                            {
                                this.props.categories.data.categories.map((category) => {
                                    return (
                                        <a   class="profile-card-social__item" target="_blank">{category}
       
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


export default connect(mapStateToProps, { fetchCategories })(Pills)