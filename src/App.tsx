import React from 'react';
import './App.css';
import { Country, Person } from './Person';

function App() {
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
