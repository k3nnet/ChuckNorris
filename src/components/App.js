import React, { useState, Component, useEffect } from "react";
import "./App.css";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Card from "./card/card";

import Pills from "./pills/pills";

import { FlexBox } from "react-styled-flex";
import { connect } from "react-redux";
import { fetchCategories, selectCategory } from "../actions/categoryActions";
import { fetchRandomJoke } from "../actions/randomJokeAction";

const App = (props) => {
  const { categories } = props;

  useEffect(() => {
    props.fetchCategories();
  }, [props]);

  return (
    <FlexBox column={true}>
      <Navbar></Navbar>
      <FlexBox center>
        <Pills></Pills>
      </FlexBox>
      <Card></Card>
      <Footer></Footer>
    </FlexBox>
  );
};

//make  states available in props
const mapStateToProps = (state) => ({
  categories: state.getCategories.categories,
  random_joke: state.getRandomJoke.random_joke,
  joke: state.getCategories.joke
});

//connect states and fuctions to props
export default connect(mapStateToProps, { fetchCategories, fetchRandomJoke })(
  App
);
