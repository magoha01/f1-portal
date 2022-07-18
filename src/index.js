import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.less';
import App from './App';
// import Protests from "./components/Protests";
// import Results from "./components/Results";
// import Schedule from "./components/Schedule";
// import Home from "./components/Home";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
