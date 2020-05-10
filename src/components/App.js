import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import Card from './card/card'

import { Component } from 'react';
import Pills from './pills/pills';


import {FlexBox} from "react-styled-flex"
import { connect} from 'react-redux'
import { fetchCategories,selectCategory } from '../actions/categoryActions'
import {fetchRandomJoke} from '../actions/randomJokeAction'

class App extends Component{

  constructor(){
    super()
  
  }

  componentWillMount() {
    this.props.fetchCategories()
    this.props.fetchRandomJoke()
   
}


  render(){

   
    return (
     
      <FlexBox column={true} center>
        <Navbar></Navbar>
        <FlexBox column={true}>
          <Pills></Pills>
          <Card  ></Card>
        </FlexBox>
        <Footer></Footer>
      </FlexBox>
      
    );

  }

 


}

const mapStateToProps = state => ({
  categories: state.getCategories.categories,
  random_joke:state.getRandomJoke.random_joke,
  joke:state.getCategories.joke
  

})


export default  connect(mapStateToProps, {    fetchCategories,fetchRandomJoke  })(App)
