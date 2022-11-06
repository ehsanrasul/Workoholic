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

   fetch('/gig/updateGig', {
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

export const UpdateGig = (props) => {

  
  const [getTitle, setTitle] = useState(props.Title);
  const [getDescription, setDescription] = useState(props.Description);
  const [getCategory, setCategory] = useState(props.Category);
  const [getPrice, setPrice] = useState(props.Price);
                   


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
  

 console.log('updateGIG')


return(
    <div className="ManageGigs">

  <br/>

<form className="AddGigForm">
  <div className= "form-outline mb-4">
    <label className= "form-label" htmlFor="form4Example1">Title</label>
    <input type="text" id="T" value={getTitle} onChange = {SetTitle} className= "form-control" />
  </div>


  <div className= "form-outline mb-4">
    <label className= "form-label" htmlFor="form4Example3">Description</label>
    <textarea className= "form-control" value={getDescription} onChange = {SetDescription} id="D" rows="4"></textarea>
  </div>


  <div className= "form-outline mb-4">
    <label className= "form-label" htmlFor="form4Example2">Category</label>
    <input type="text" id="C"  value = {getCategory} onChange = {SetCategory} className= "form-control" />
  </div>


  <div className= "form-outline mb-4">
    <label className= "form-label" htmlFor="form4Example2">Price</label>
    <input type="text" id="P" value = {getPrice} onChange = {SetPrice} className= "form-control" />
  </div>
  


  <button type="submit" id = "Submit" className = "Button" onClick = {()=>FetchData(getTitle, getDescription, getCategory, getPrice)} >Update</button>
</form>

    </div>


)

}