import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./pages/Authentication/Authentication";
import Message from "./pages/Message/Message";
import HomePage from "./pages/Homepage/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileAction } from "./Redux/Auth/authAction";
import { store } from "./Redux/store";

function App() {
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();
  const jwt=localStorage.getItem("jwt");
  useEffect(() => {
    dispatch(getProfileAction(jwt));
  }, [jwt]);
  return (
    <>
      <Routes>
        <Route path="/*" element={auth.user?<HomePage/>:<Authentication/>} />
        <Route path="/message" element={<Message />} />
        <Route path="/*" element={<Authentication />} />
      </Routes>
    </>
  );
}

export default App;
