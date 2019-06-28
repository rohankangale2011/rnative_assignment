import React from 'react';
import AppNavigator from './src/navigations/app.navigation';
import {Provider} from 'react-redux';
import {configStore} from './src/redux/store';

/**
 * Store(single source) of the application
 */
const store = configStore();

/**
 * App function: Root component of application
 */
function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

export default App;