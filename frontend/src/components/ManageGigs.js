import React from "react";
//import { useState } from "react";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { UpdateGig } from "./UpdateGig";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Controller } from "../App";



export const ManageGigs  = () => {
  
      const [allData,setAllData]=useState([])
      const data1 = {};  

   useEffect ( () => {

        (async () =>
       { await fetch ('/gig/gigListings', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data1),
      })
        .then((response) => response.json())
        .then((data) => {
          setAllData(data);


          console.log(data);
          

   })
    
    })();       

    }, [])


    const deleteGig = async (p) => {
    
     const d = {

        Title : p

      }

      console.log("Data "+d.Title);

      await fetch('/gig/DeleteGig', {
        method: 'delete', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(d),
      })
        .then((response) => response.json())
        .then((data) => {

          console.log("Im  Fetching Data")

        })
        .catch((error) => {
          console.error('Error:', error);
        });

    }

      
  return(
  
     <div className='ManageGigs'>
 
      <h1> GIG Listing </h1>

      <div className="Create_Gig">

      <Link  to="/AddGIG">
      <button className="Button">
      Create Gig
      </button>
      </Link>

      </div>
      
      <br/>

      <table className='GigsListing'> 
         <thead>
          <tr>
            <th>#</th>
            <th width = '50%'>GIG</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>


              { 
                  allData.map((item,index)=>(
                 <tr>
                 <td>{index+1}</td>  
                 <td>{item.Title}</td>
                 <td>{item.price}</td>
                 <td><Link  to = "/UpdateGig">
                  <button className="Button" onClick=
                  { () => Controller({T: item.Title, D: item.Description, C: item.Category, P: item.price})}>
                  Edit
                  </button>
                  </Link>
                  <button className = "Button" onClick={() => deleteGig(item.Title)}>Delete</button></td>
                  </tr>
                  ))
               }
  
      </tbody>
      </table>


  
     </div>
  
    );
  }
  