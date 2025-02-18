import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {AuthProvider} from "./context/AuthProvider";
import reportWebVitals from './reportWebVitals';
import Blog from "./templates/blog/Blog";
import SignIn from "./templates/sign-in/SignIn";
import SignUp from "./templates/sign-up/SignUp";
import RoomDetails from "./templates/blog/components/RoomDetails";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <AuthProvider>
          <Router>
              <Routes>
                <Route path="/" element={<Blog />} />
                <Route path="/connection" element={<SignIn />} />
                <Route path="/inscription" element={<SignUp />} />
                  <Route path="/rooms/:id" element={<RoomDetails />} />
              </Routes>
          </Router>
      </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
