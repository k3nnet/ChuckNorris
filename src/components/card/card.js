import React, { Component } from 'react'
import '../card/card.css'
import { connect} from 'react-redux'
import { fetchJoke ,selectCategory} from '../../actions/categoryActions'
import {fetchRandomJoke} from '../../actions/randomJokeAction'
import Moment from 'react-moment';
class Card extends Component {

    constructor(props) {
        super()
       
    }

    componentWillMount() {
        this.props.fetchJoke(this.props.activeCategory)

       
        this.props.fetchRandomJoke();
       
    }


    render() {
        
        console.log(this.props)
        
         const {activeCategory,jokes,random_joke } = this.props
        let {data,loading}=random_joke
        console.log(this.props)
        console.log(activeCategory)
        console.log(jokes)
        console.log(random_joke.data)
        //console.log(data)
        if(loading){
            return "getting joke..."
        }
        else{
            let joke={}
            if(activeCategory==="" || activeCategory==="Random"){
                console.log(data)
                
                if(data!==undefined){
                    this.props.selectCategory("Random")
                    joke=random_joke.data.random_joke
                }
               
                
            }else{
                console.log(this.props.joke.data.jokes)
                if(this.props.joke.data.jokes!==null){
                    joke=this.props.joke.data.jokes;
                }
                //
            }
            return (
                <div className="wrapper">
                    <div class="joke-card">
                        <div class="profile-card__img">
                            <img src={joke.icon_url} alt="icon"/>
                        </div>
    
                        <div class="profile-card__cnt js-profile-cnt">
                                <div class="card_category">{activeCategory}</div>
                                <div class="profile-card__txt">{joke.value}</div>
    
    
                                <div class="joke-card-inf">
                                    <div class="joke-card-inf__item">
    
                                        <div class="joke-card-inf__txt">updated: <Moment  format="D MMM YYYY">{joke.updated_at}</Moment></div>
                                    </div>
    
    
                                </div>
    
                                <div class="joke-card-social">
    
    
    
    
                                </div>
    
                                <div class="joke-card-ctr">
                                    <button class="profile-card__button button--blue js-message-btn" onClick={() => { this.nextJoke("Random") }}>Random</button>
                                    <button class="profile-card__button button--orange" onClick={() => { this.nextJoke(joke.categories[0]) }}>Next</button>
                                </div>
                            </div>
    
                       
    
                        </div>
                    </div>
            )
        }

    }

    nextJoke(category){
        console.log("next button clicked")
        console.log(category)
        if(category==="Random" || category===undefined){
            this.props.selectCategory("Random")
            this.props.fetchRandomJoke()
        }else{
            this.props.fetchJoke(category)
        }
                   
                    
    }


    
}

const mapStateToProps = state => ({
    activeCategory:state.getCategories.activeCategory,
    joke:state.getCategories.joke,
    random_joke:state.getRandomJoke.random_joke
    

})




export default connect(mapStateToProps, {  fetchJoke,fetchRandomJoke, selectCategory  })(Card)