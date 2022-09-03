import { Counter } from '@/components/Counter/Counter';
import Sample from '@/components/Sample';
import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sample />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
