import React,{useState}from "react";
import Layout from "./layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Display from "./display";
import UpdatePage from "./updatePage";
import DisplayFetchedData from "./dataFetch";

const App = () => {

  return (
      <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/details" element={<Display />} />
        <Route path="/fetch" element={<DisplayFetchedData />} />
      </Routes>
    </Router>
  );
};

export default App;
