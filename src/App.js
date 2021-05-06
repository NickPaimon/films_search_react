import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header title="Film Search"/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
