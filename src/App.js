import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Jumbotron from "./components/Jumbotron";
import Rows from "./components/Rows";



const user = {
  firstName: 'NAIM',
  lastName: 'Mansour'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}


function App() {

  return (
    <>
      <Header />
      <h1 className="App" > Bonjour, {formatName(user)}</h1>
      <Jumbotron />
      <Rows />
      <Footer />
    </>
  );
}

export default App;
