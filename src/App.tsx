import React from 'react';
import './App.css';
import { Country, Person } from './Person';

function App() {

  // difinit a type fpr function
  const getAge = (name: string):number =>{
    return 23
  }

  const age:number = getAge("fatemeh")
  
  return (
    <div className="App">
      <Person 
      name = {"Fatemeh"}
      email= {"azadeh@gmail.com"}
      age = {24}
      ismarried={true}
      courses = {["JavaScript", "React", "Vue"]}
      country={Country.Afghanistan}
      />
    </div>
  );
}

export default App;
