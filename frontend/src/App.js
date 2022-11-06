import React, { useState } from 'react';
import './App.css';




import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { AddGIG } from "./components/AddGIG";
import { ManageGigs } from './components/ManageGigs';
import { UpdateGig } from './components/UpdateGig';
import {Footer} from './components/Footer';



function App() {

  return (
    <div>

      <Controller/>
    
    </div>
  );
}


export function Controller (obj) {


return (

  <>
      <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element = {<Home/>}/> 
          <Route exact path="/ManageGigs" element = {<ManageGigs/>}/>
          <Route exact path="/AddGIG" element = {<AddGIG/>}/> 
          <Route exact path="/UpdateGig" element = 
          {<UpdateGig Title = {obj.T} Description = {obj.D} Category = {obj.C} Price = {obj.P}/>} />   
          <Route/>
      </Routes>
      <br/>
      <br/>
      <Footer/>
      </Router>
    </>

)

}




export default App;
