 import {useState } from "react";
import UserContext from "./UserContext";

 const UserContextProvider=({children})=>{
        const[user,setUser]=useState(null)
        const[flash,setFlash]=useState('');
        const setFlashMessage = (message) => {
            setFlash(message);
            setTimeout(() => {
              setFlash("");
            }, 3000);
          };
        
        return(
            <UserContext.Provider value={{user,setUser,flash,setFlashMessage}}>
                {children}
            </UserContext.Provider>

        )
 }

 export default UserContextProvider;
