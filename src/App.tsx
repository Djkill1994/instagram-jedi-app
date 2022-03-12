import React from 'react';
import './App.scss';
import Navbar from './component/navbar/navbar';
import Header from './component/header/header';

function App() {
  return (

    <div className={ 'app-wrapper' }>
      <Header/>
      <Navbar/>
      <div className={ 'app-wrapper-content' }>
        <div>CONTENT</div>
      </div>
    </div>
  );
}

export default App;
