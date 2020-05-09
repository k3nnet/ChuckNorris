import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import Card from './card/card'
import jsonData from './card/jokes.json'
import { Component } from 'react';
import Pills from './pills/pills';
import {Provider} from 'react-redux'
import store from './store'
import {FlexBox, FlexItem} from "react-styled-flex"


class App extends Component{

  constructor(){
    super()
    this.state={
      data:jsonData
    }
  }


  render(){

    console.log(this.state.data)
    const joke=this.state.data[0]

    return (
      <Provider store={store}>
      <FlexBox column={true} center>
        <Navbar></Navbar>
        <FlexBox column={true}>
          <Pills></Pills>
          <Card key={joke.created_at} joke={joke} ></Card>
        </FlexBox>
        <Footer></Footer>
      </FlexBox>
      </Provider>
    );

  }

 


}

export default App;
