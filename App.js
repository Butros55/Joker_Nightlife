import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

//screens
import Navigator from './navigators/navigator';

export default function App() {
  return ( 
    <Navigator />
  );
}
