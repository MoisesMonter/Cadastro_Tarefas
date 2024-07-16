import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from 'react';
import { Orientation_number, orientation } from './orientation';

const useOrientation = () => {
    const[screenOrientation,SetScreenOrientation] = useState<ScreenOrientation.Orientation>(ScreenOrientation.Orientation.PORTRAIT_UP);
    
    useEffect(()=>{
        const onOrientationChange = (event: ScreenOrientation.OrientationChangeEvent) =>{
            const orientationValue = event.orientationInfo.orientation;
            SetScreenOrientation(orientationValue);
        };

        const initScreenOrientation = async () =>{
            const currentOrientation = await ScreenOrientation.getOrientationAsync();
            SetScreenOrientation(currentOrientation)
        };

        initScreenOrientation();
        
        const screenOrientationListener = ScreenOrientation.addOrientationChangeListener(onOrientationChange)
    
        return () => {
            ScreenOrientation.removeOrientationChangeListener(screenOrientationListener);
          };
    },[]);

    return Orientation_number[screenOrientation];
};


export default useOrientation;