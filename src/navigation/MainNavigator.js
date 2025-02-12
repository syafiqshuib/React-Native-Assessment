import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { setNavigator } from './NavigationService';
import SplashScreen from '../screens/SplashScreen';
import MainScreen from '../screens/MainScreen';
import MainDetailScreen from '../screens/MainDetailScreen';
import { Color } from '../contants/Color';
import WentWrongScreen from '../screens/WentWrongScreen';

const Stack = createNativeStackNavigator();

const App = () => (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'grey' }}>
        <BottomSheetModalProvider>
            <NavigationContainer ref={(navigatorRef) => { setNavigator(navigatorRef) }}>
                <Stack.Navigator
                    initialRouteName="Splash"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: Color.white,
                        },
                        headerShadowVisible: false,
                        headerTintColor: Color.black
                    }}>
                    <Stack.Screen
                        name="Splash"
                        component={SplashScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Main"
                        component={MainScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Detail"
                        component={MainDetailScreen}
                        options={{
                            title: "",
                        }}
                    />
                    <Stack.Screen
                        name="WentWrong"
                        component={WentWrongScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </BottomSheetModalProvider>
    </GestureHandlerRootView>
);

export default App;