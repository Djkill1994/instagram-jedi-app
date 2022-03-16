import React from 'react';
import './App.scss';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import AppContent from './component/AppContent/AppContent';

function App() {
    return (
    <div className={ 'app-wrapper' }>
      <Header/>
      <Navbar/>
      <div className={ 'app-wrapper-content' }>
       <AppContent />
      </div>
    </div>
  );
}

export default App;
