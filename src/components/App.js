import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("male");
  let [phoneNumber, setPhoneNUmber] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  
  const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Submitting");
  if(!name || !email || !phoneNumber || !password || !gender){
    setError("All fields are mandatory");
    return;
  }
  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if(format.test(name)){
    setError("Name is not alphanumeric");
    return;
  }
  if(!email.includes("@")){
    setError("Email must contain @");
    return;
  }
  let genderConvertred = gender.toLowerCase();
  if(genderConvertred !== "male" && genderConvertred !== "female" && genderConvertred !== "other"){
  setError("Please identify as male, female or others");
  return;
  }
  if (/[^a-zA-Z]/.test(phoneNumber) && format.test(phoneNumber)){
    setError("Phone Number must contain only numbers");
    return;
  }
  if(password.length <= 6){
    setError("Password must contain atleast 6 letters");
    return;
  }
  let temp = email.split("@");
  setError(`Hello ${temp[0]}`);
  return;
  }
  

  return (
    <div id="main">
     <form>
        Name <input data-testid="name" onChange = {(event) => {setName(event.target.value)} } />
        Email <input data-testid="email" onChange = {(event) => {setEmail(event.target.value)} }/>
        Gender <input data-testid="gender" value = "male" onChange = {(event) => {setGender(event.target.value)} } />
        Phone Number <input data-testid="phoneNumber" type = 'Number' onChange = {(event) => {setPhoneNUmber(event.target.value)} }/>
        Password <input data-testid="password" type="password" onChange = {(event) => {setPassword(event.target.value)} }/>
        <input data-testid="submit" type="submit" onClick = {handleSubmit} />
      </form>
      <h1>{error}</h1>
    </div>
  )
}


export default App;
