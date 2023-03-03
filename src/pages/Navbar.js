import React from 'react'
import { Link, NavLink, Route} from 'react-router-dom'
import LoginButton from './LoginButton'
import UserProfile from './UserProfile'

export default function Navbar() {
    return(
        <nav style={{display: "flex"}}>	
			<div className="nav1">
                <Link to="/about">About</Link>   
				{/* <Route path ="/about" component ="About">About</Route> */}
                <Link to="/store">Store</Link>  
			</div>	
			<div className="nav2">
				<a href="#" style={{paddingRight: "7px"}}>Gmail</a>
				<a href="#" style={{paddingRight: "7px"}}>Images</a>
				<img src={require('../assets/img/menu_icon.png')} style={{paddingRight: "7px", verticalAlign: "middle"}}/>
				<LoginButton/>
				<UserProfile/>
			</div>
		
        </nav>
    )
}