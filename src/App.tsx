import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './root-router';
import { Provider } from 'react-redux';
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <h2>Navigation Bar</h2>
          <div className="container">
            <RootRouter />
          </div>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
