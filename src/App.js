import React, { Fragment } from 'react';
import Header from "./Header"
import Feed from "./Feed"
import './App.css';
import Sidebar from './Sidebar';
import Widget from "./Widget"
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch]=useStateValue();

  return (
    <div className="app">
      {!user ?<Login/> :<Fragment><Header/><div className="app-body"><Sidebar/><Feed/><Widget/> </div></Fragment>}
     
    </div>
  );
}

export default App;
