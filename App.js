
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import bottomTabNavigation from './navigation/bottomTabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsExtraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }



  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen 
          name="BottomNavigation"
          component={bottomTabNavigation} 
          options={{
            headerShown: false,
          }}
        />


{/* 
    <Stack.Screen 
          name="BottomNavigation"
          component={Cart} 
          options={{
            headerShown: false,
          }}
        /> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

