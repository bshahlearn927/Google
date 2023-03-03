import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton(){
    const{logout, isAuthenticated} = useAuth0();
    return(
        isAuthenticated && (
            <button className="btn1" onClick={()=>logout({returnTo: window.location.origin })}>Sign out</button>        )
    )
}
export default LogoutButton;