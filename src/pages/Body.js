import React from 'react'
export default function Body() {
  return (
    <div>
        <nav style={{display: "flex"}}>	
		<div className="nav1">
			<a href="#">About</a>
			<a href="#" style={{paddingRight: "7px"}}>Store</a>
		</div>	
		<div className="nav2">
			<a href="#" style={{paddingRight: "7px"}}>Gmail</a>
			<a href="#" style={{paddingRight: "7px"}}>Images</a>
			<img src={require('../assets/img/menu_icon.png')} style={{paddingRight: "7px", verticalAlign: "middle"}}/>
			<button>Sign in</button>
		</div>			
			
	</nav>
	
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
