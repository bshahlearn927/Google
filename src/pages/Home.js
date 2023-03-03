import React from 'react'
import LogoutButton from "./LogoutButton";
import LoginButton from './LoginButton';
import UserProfile from './UserProfile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "../assets/css/style.css"
import Navbar from './Navbar';

export default function Home() {
  return (
    <div>
		<section className="sec1">
		<div>
			<img src={require('../assets/img/google_logo_long.png')} className="logo" />
		</div>
		<form>
			<div className="sec1_1">
				<img src={require('../assets/img/search.png')}  className="search1"/>
				<img src={require('../assets/img/microphone.png')} className="search3"/>
				<img src= {require('../assets/img/lenscamera.png')} className="search4"/>
				<input type="text" className="search2"/>		
			</div>
		</form><br/>
	</section>
	<div className="sec2">
		<button className="btn2" style={{marginRight: "15px"}}>Google Search</button>
		<button className="btn2">I'm feeling lucky</button>
	</div>
    </div>
  )
}

