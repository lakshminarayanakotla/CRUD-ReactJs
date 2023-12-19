import React from "react";
import Layout from "./components/layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Display from "./components/display";
import Fetch from "./components/updatePage";
import DisplayFetchedData from "./components/dataFetch";
import TotalData from "./components/totalData";

const App = () => {

  return (
      <Router>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="/display" element={<Display/>} ></Route>
        <Route path="/fetch" element={<Fetch/>}></Route>
        <Route path="/displayfetch" element={<DisplayFetchedData/>}></Route>
        <Route path="/totalData" element={<TotalData/>} ></Route>
      </Routes>
    </Router>
  );
};

export default App;
