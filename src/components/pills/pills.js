import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchCategories} from '../../actions/categoryActions'

import '../pills/pills.css'

class Pills extends Component {

    componentWillMount(){
        this.props.fetchCategories();
    }

    render() {

        return (
            <div>
                <div class="row">
                    <div class="col-lg-12">
                        <a href=""><button class="btn btn-default default1">default</button></a>
                        <a href=""><button class="btn btn-primary primary1">primary</button></a>
                        <a href=""><button class="btn btn-info info1">info</button></a>
                        <a href=""><button class="btn btn-success success1">success</button></a>
                        <a href=""> <button class="btn btn-warning warning1">warning</button></a>
                        <a href=""><button class="btn btn-danger danger1">danger</button></a>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null,{fetchCategories})(Pills)