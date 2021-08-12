
import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import LoadData from "./components/LoadData"

function App() {
  
  return (
    <div className="App ">
      <Header></Header>
      <LoadData></LoadData>

      <Footer/>
    </div>
  );
}

export default App;
