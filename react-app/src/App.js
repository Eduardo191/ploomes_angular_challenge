import React from 'react';
import { Provider } from 'react-redux'
import Store from './store/index'
import Main from './components/Main'

function App() {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
}

export default App;
