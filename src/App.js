import React,{useState}from "react";
import Layout from "./layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Display from "./display";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/details" element={<Display/>} />
      </Routes>
    </Router>
  );
};

export default App;
