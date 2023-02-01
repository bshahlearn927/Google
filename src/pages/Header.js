import React from 'react'

export default function Header() {
  return (
    <div>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Google</title>
        <link rel="icon" href={require('../assets/img/google_logo_short.png')}/> 
        <link rel="stylesheet" type="text/css" href={require('../assets/css/style.css')}/>
    </div>
  )
}
