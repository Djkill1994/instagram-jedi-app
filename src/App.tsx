import React from 'react';
import './App.css';
import Navbar from './component/navbar/navbar';
import Header from './component/header/header';

function App() {
  return (
    <div className={ 'app-wrapper' }>
      <Navbar/>
      <Header/>
      <div className={ 'app-wrapper-content' }>

      </div>
    </div>

  );
}

export default App;
