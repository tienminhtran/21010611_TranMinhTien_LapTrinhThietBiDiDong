import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import AppNavigator from './components/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}