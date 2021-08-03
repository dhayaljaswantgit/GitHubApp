import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import Navigation from './Navigation';
import STYLES from './styles';
import {Loader} from './components';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={STYLES.main}>
        <Navigation />
        <Loader />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
