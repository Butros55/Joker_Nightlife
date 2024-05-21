import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import userDataContext from './context/userDataContext';
import themeContext from './context/themeContext';
import { useState } from 'react';

//screens
import Navigator from './navigators/navigator';

// components
import { getItem } from './components/asyncStorage';


ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);


export default function App() {
  
  const [vorname, setvorname] = useState();
  const [nachname, setnachname] = useState();
  const [zweitername, setzweitername] = useState();
  const [checkzweitername, setcheckzweitername] = useState();
  const [checkvorname, setcheckvorname] = useState();
  const [checknachname, setchecknachname] = useState();
  const [email_change1, setEmail_change1] = useState();
  const [email_change2, setEmail_change2] = useState();
  const [Pw_change1, setPw_change1] = useState();
  const [Pw_change2, setPw_change2] = useState();
  

  const userData = {
    vorname: vorname,
    setvorname,
    checkvorname: checkvorname,
    setcheckvorname,
    nachname: nachname,
    setnachname,
    checknachname: checknachname,
    setchecknachname,
    zweitername: zweitername,
    setzweitername,
    checkzweitername: checkzweitername,
    setcheckzweitername,
    email_change1: email_change1,
    setEmail_change1,
    email_change2: email_change2,
    setEmail_change2,
    Pw_change1: Pw_change1,
    setPw_change1,
    Pw_change2: Pw_change2,
    setPw_change2,
  }


  return ( 
    <userDataContext.Provider  value={userData}>
      <Navigator />
    </userDataContext.Provider>
  );
}
