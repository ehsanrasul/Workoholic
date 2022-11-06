import  React, {useRef, useState} from "react";
import '../App.css';



const FetchData = (getTitle, getDescription, getCategory, getPrice) => {
  
  console.log("Ehsan");
  const data1 = { 
   
   Title : getTitle,
   Description : getDescription,
   Category : getCategory,
   price : getPrice

  };


   fetch('/gig/gig', {
     method: 'POST', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify(data1),
   })
     .then((response) => response.json())
     .then((data) => {
   
       console.log(data);
       console.log("Im  Fetching Data")

     })
     .catch((error) => {
       console.error('Error:', error);
     });


}

export const AddGIG = () => {

  const [backend, setUsers] = useState({});
  
  const [getTitle, setTitle] = useState("");
  const [getDescription, setDescription] = useState("");
  const [getCategory, setCategory] = useState("");
  const [getPrice, setPrice] = useState(0);
                   

  const SetTitle = (e) => {

    setTitle(e.target.value);

  }

  const SetDescription = (e) => {

    setDescription(e.target.value);

  }
  
  
  const SetCategory = (e) => {

    setCategory(e.target.value);

  }

  const SetPrice = (e) => {

    setPrice(e.target.value);

  }
  


return(
    <div className="ManageGigs">

    <br/>


<form className="AddGigForm">
  <div className= "Form-Divisons">
    <label className= "form-label" htmlFor="form4Example1">Title</label>
    <input type="text" id="T"  onChange = {SetTitle} className= "form-control" />
  </div>

  <br/>

  <div className= "Form-Divisons">
    <label className= "form-label" htmlFor="form4Example3">Description</label>
    <textarea className= "form-control"  onChange = {SetDescription} id="D" rows="4"></textarea>
    <p>{backend.user}</p>
  </div>


  <div className= "Form-Divisons">
    <label className= "form-label" htmlFor="form4Example2">Category</label>
    <input type="text" id="C" onChange = {SetCategory} className= "form-control" />
  </div>

  <br/>

  <div className= "Form-Divisons">
    <label className= "form-label" htmlFor="form4Example2">Price</label>
    <input type="text" id="P" onChange = {SetPrice} className= "form-control" />
  </div>
  
  <br/>

  <button type="submit" id = "Submit" className = "Button" onClick = {()=>{
  FetchData(getTitle, getDescription, getCategory, getPrice);}} >Create</button>
</form>

    </div>



)

}