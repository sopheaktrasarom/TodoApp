import React from 'react';
import {Provider} from 'react-redux';
import stores from './src/redux/store'

import {PersistGate} from 'redux-persist/integration/react'
import HomeScreen from './src/screen/HomeScreen';


const {store,persistor} = stores();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeScreen/>
      </PersistGate>
    </Provider>
  );
};

export default App;
