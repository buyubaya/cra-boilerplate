import Sample from '@/components/Sample';
import React from 'react';
import { Provider } from 'react-redux';
import './App.less';
import './App.scss';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>HELLO</h1>
        <Sample />
      </div>
    </Provider>
  );
}

export default App;
