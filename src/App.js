import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

/*import Home from './component/Home';
import User from './component/User';
import {Link, Route,NavLink, Redirect,withRouter} from 'react-router-dom';
import Phone from './component/Phone';*/

function App(props)
{
  /*let [val,setVal] = useState({
    vala:0,
    valb:1,
    valc:2,
  });*/
  let [vala,setVala] = useState(0);
  let [valb,setValb] = useState(1);
  return (
    <div className = "App">
        <div>
          使用数据:{vala}----{valb}
          <button onClick = {()=>{setVala(vala+1)}}>change data</button>
        </div>
    </div>
  )
  /*console.log(props);
  props.history.listen((link)=>{
    console.log(link);
  })
  return (
    <div className="App">
      <div>
          <NavLink to = '/home'>点我去Home</NavLink>
          <NavLink to = {{pathname:"/user",query:{name:"小明"}}}>点我去User</NavLink>
          <NavLink to = '/phone/我是参数'>点我去Phone</NavLink>
          <button onClick = {()=>{props.history.push("/user")}}>点我去User</button>
      </div>
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> }
      <Route path = '/home' component = {Home} />
      <Route path = '/user' component = {User} />
      <Route path = '/phone/:id' component = {Phone} />
      <Redirect from = '/' to = 'home' exact />
    </div>
  );*/
}

export default App;
