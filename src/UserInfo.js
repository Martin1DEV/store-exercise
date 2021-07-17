import React, {useContext} from 'react';
import {AppContext} from './AppProvider';
import UserRender from './UserRender';


const UserInfo=()=>{

    const {isUserLog, userLog,counter }=useContext(AppContext)
    const infoRender = isUserLog?'Zalogowany':'Niezalogowany';

    return (
        <div className='user'>
            <p>Liczba logowań {counter}</p>
           <p>Użytkownik jest {infoRender}</p>
           {isUserLog?<UserRender/>:''}
           <button onClick={userLog} >
              
               {isUserLog?'Wyloguj':'Zaloguj'}</button>
               
          
        </div>
    )
}

export default UserInfo;
