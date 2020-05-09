import React, { Component } from 'react'
import '../card/card.css'
import { connect} from 'react-redux'

class Card extends Component {

    constructor(props) {
        super()
        console.log(props)

        this.state = {
            joke: props.joke
        }
    }


    render() {
        const joke = this.state.joke
        console.log(joke)
        return (
            <div className="wrapper">
                <div class="profile-card js-profile-card">
                    <div class="profile-card__img">
                        <img src={joke.icon_url} alt="profile card"/>
                    </div>

                    <div class="profile-card__cnt js-profile-cnt">
                            <div class="profile-card__name">Music</div>
                            <div class="profile-card__txt">{joke.value}</div>


                            <div class="profile-card-inf">
                                <div class="profile-card-inf__item">

                                    <div class="profile-card-inf__txt">{joke.updated_at}</div>
                                </div>


                            </div>

                            <div class="profile-card-social">




                            </div>

                            <div class="profile-card-ctr">
                                <button class="profile-card__button button--blue js-message-btn">Random</button>
                                <button class="profile-card__button button--orange">Next</button>
                            </div>
                        </div>

                   

                    </div>
                </div>
        )

    }

    next(){
                    console.log("next button clicked")
                }


    
}

const mapStateToProps = state => ({
    activeCategory:state.getCategories.activeCategory

})


export default connect(mapStateToProps, {    })(Card)