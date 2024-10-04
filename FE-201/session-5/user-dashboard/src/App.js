import DogPics from './component/DogPics';
import Home from './component/Home';
// import './App.css';
import BookAppointment from './component/BookAppointment';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  return (
    <div className="App">
    {/* <UserInfo/> */}
     {/* <Home/> */}
     {/* <DogPics/> */}
     <BookAppointment/>
    </div>
  );
}

export default App;
