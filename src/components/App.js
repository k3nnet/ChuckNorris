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
class App extends Component{

  constructor(){
    super()
    this.state={
      data:jsonData
    }
  }


  render(){

    console.log(this.state.data)

    const jokes=this.state.data.map(joke=>{
        console.log(joke)
  
        return(
          <Card key={joke.created_at} joke={joke} ></Card>
        )
     
  
        
    })

    return (
      <Provider store={store}>
      <div>
        <Navbar></Navbar>
        <main>
          <Pills></Pills>
         {jokes}
        </main>
        <Footer></Footer>
      </div>
      </Provider>
    );

  }

 


}

export default App;
