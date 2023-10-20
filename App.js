import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import userDataContext from './context/userDataContext';
import { useState } from 'react';

//screens
import Navigator from './navigators/navigator';


ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);


export default function App() {
  
  const [vorname, setvorname] = useState();
  const [nachname, setnachname] = useState();
  const [zweitername, setzweitername] = useState();
  const [checkvorname, setcheckvorname] = useState();
  const [checknachname, setchecknachname] = useState();
  const [checkzweitername, setcheckzweitername] = useState();

  const userData = {
    vorname: vorname,
    setvorname,
    checkvorname: checkvorname,
    setcheckvorname,
    nachname: nachname,
    setnachname,
    checknachname: checknachname,
    setchecknachname,
    zweitername: '',
    setzweitername,
    checkzweitername: '',
    setcheckzweitername,
  }

  return ( 
    <userDataContext.Provider  value={userData}>
      <Navigator />
    </userDataContext.Provider>
  );
}
