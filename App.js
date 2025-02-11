import React from "react";
import { StatusBar, LogBox } from 'react-native';
import { Provider } from "react-redux";
import { PaperProvider } from 'react-native-paper';
import store from "./src/redux/store";
import MainNavigator from "./src/navigation/MainNavigator";
import { Color } from "./src/contants/Color";

// Ignore non-critical warnings
LogBox.ignoreLogs([
  'ImmutableStateInvariantMiddleware'
]);

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
        <MainNavigator />
      </PaperProvider>
    </Provider>
  );
}
