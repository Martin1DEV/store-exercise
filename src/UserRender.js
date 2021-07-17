import React, {useContext} from 'react';
import { AppContext } from './AppProvider';

const UserRender=()=>{

const{userInfo}=useContext(AppContext)
const{name, age, nationality}=userInfo;

    return(

        <div>

<p>Imię: {name}</p>
<p>Wiek: {age} </p>
<p>Narodowość {nationality}</p>

        </div>
    )
}


export default UserRender;
