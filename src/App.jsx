import React, { useState, useEffect } from 'react';
import { Provider } from 'mobx-react';
import {
  Store,
  createStore
} from './stores';
import './styles/index.scss';
import Router from './router';

function App() {
  const [storeRes, setStoreRes] = useState();

  useEffect(() => {
    (async function () {
      try {
        const res = await createStore();
        setStoreRes(res);
      } catch(e) {
        setStoreRes(false);
      }
    })();
  }, []);

  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
}

export default App;
