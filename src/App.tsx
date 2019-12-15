import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './root-router';
import { Provider } from 'react-redux';

function App() {
  return (
      <BrowserRouter>
        <>
          <div className="container">
            <RootRouter />
          </div>
        </>
      </BrowserRouter>
  );
}

export default App;
