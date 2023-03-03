import React from 'react'

export default function Footer() {
  return (
    <div className='footer' style={{position:"fixed"}}>
        <div className="f1">
			<a href="#">Advertising</a>
			<a href="#">Business</a>
			<a href="#">How search works</a>
		</div>	
		<div className="f2"><img src={require('../assets/img/leaflogo.png')} style={{width: "5%", padding:"auto"}}/><h6 style={{color: "#70757a", display: "inline"}} className="f2t1"> Carbon neutral since 2007</h6></div>
		<div className="f3">
			<a href="#">Privacy</a>
			<a href="#">Terms</a>
			<a href="#">Settings</a>
		</div>
    </div>
  )
}
