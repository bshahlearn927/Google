import { useAuth0 } from "@auth0/auth0-react";

function LoginButton(){
    const{loginWithRedirect, isAuthenticated,isLoading} = useAuth0();

        return(
            !isAuthenticated && (
                  <button className="btn1" onClick={()=> loginWithRedirect()}>Sign in</button>
            )
        )
    
    
}
export default LoginButton;