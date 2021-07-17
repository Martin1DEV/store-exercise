import './App.css';
import React from 'react';
import AppProvider from './AppProvider';
import UserInfo from './UserInfo';


const App=()=> {


  return (
    <AppProvider>
    <div className="App">
Store with Hooks
    </div>
    <UserInfo/>
    </AppProvider>
  );
}

export default App;
