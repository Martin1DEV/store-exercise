import React, { createContext, useState} from 'react';

export const AppContext=createContext()

const AppProvider=({children})=>{

const[isUserLog, setIsUserLog]=useState(false);
const[userInfo]=useState({
    name:'Adam',
    age:26,
    nationality:'Poland',

})

const [counter, setCounter]=useState(0)

const userLog=()=>{
    if(isUserLog===false){
        setCounter(counter+1)
    };
    
    console.log('jest logowanie')
    setIsUserLog(prevValue=>!prevValue)
}





return(
<AppContext.Provider value={{
    isUserLog,
    setIsUserLog,
    userInfo,
    userLog,
    counter,


}}>

    {children}


</AppContext.Provider>

)

}


export default AppProvider;
