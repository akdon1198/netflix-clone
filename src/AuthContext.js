import { createContext, useEffect, useState} from "react";

export const AuthContext = createContext("");

export const AuthContextProvider = ({children}) => {
    const [registerUser, setregisterUser] = useState(
        JSON.parse(localStorage.getItem("registerUser")) || null
    )
        const [loginUser, setloginUser] = useState(
        JSON.parse(localStorage.getItem("loginUser")) || null    
    )
    const[error, seterror] = useState(false)
    const[genre, setgenre] = useState("Genre")
    function errorfun(){
        setTimeout(() => {
            seterror(false)
        }, 2000);
    }
    function logoutfun(){
        localStorage.setItem("loginUser", JSON.stringify(null))
        setloginUser(null)
    }
    function registerfun(val){
        setregisterUser(val)
    }
    function genrefun(val){
        setgenre(val)
    }
    useEffect(() => {
        localStorage.setItem("registerUser", JSON.stringify(registerUser))
    }, [registerUser])
    function loginfun(val){
        if(val.email == registerUser.email && val.password == registerUser.password){
            setloginUser(val)
        }else{
            seterror(true)
        }
    }
    useEffect(() => {
        localStorage.setItem("loginUser", JSON.stringify(loginUser))
    }, [loginUser])
    return(
    <AuthContext.Provider value = {{registerUser : registerUser, loginUser : loginUser,
                                        registerfun : registerfun, loginfun : loginfun, logoutfun : logoutfun
                                        , genrefun : genrefun, genre : genre, error : error, errorfun : errorfun}}>

        {children}
    </AuthContext.Provider>
    )
}