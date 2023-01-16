import React, { useEffect } from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route exact path="/profile" element={<ProfileScreen />} />
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
