import React, { Component } from 'react'
import '../card/card.css'


class Card extends Component{
    
    constructor(props){
        super()
        

        this.state={
            joke:props.joke
        }
    }


    render(){
        const joke=this.state.joke
       
        return (
            <div>
    
                <div className="ft-recipe">
                    <div className="ft-recipe__thumb"><span id="close-modal"><i className="ion ion-md-close"></i></span>
        <h3>Chuck Norris</h3><img src={joke.icon_url} alt="Strawberry Waffle" />
                    </div>
                    <div className="ft-recipe__content">
                        <header className="content__header">
                            <div className="row-wrapper">
                                <h2 className="recipe-title">{joke.categories[0]}</h2>
                                <div className="user-rating"></div>
                            </div>
                            <ul className="recipe-details">
                                <li className="recipe-details-item time"><i className="ion ion-ios-clock-outline"></i><span className="value">20</span><span className="title">likes</span></li>
                                <li className="recipe-details-item ingredients"><i className="ion ion-ios-book-outline"></i><span className="value">5</span><span className="title">favourite</span></li>
                               
                            </ul>
                        </header>
                        <p className="description">
                           {joke.value}</p>
                        <footer className="content__footer"><a onClick={this.next} >Next</a></footer>
                    </div>
                </div>
            </div>
        )

    }

    next(){
        console.log("next button clicked")
    }


    
}

export default Card