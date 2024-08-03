import React, { useEffect } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import axios from 'axios';

import "./custom.css";
import { Routes } from "react-router-dom";

const App = () => {
  async function makeRequest() {

    const response = await axios.get("api/JournalEntry/GetAllEntries");
    console.log(response.data)
  }
  useEffect(() => {
    makeRequest()
  }, [])
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/fetch-data" element={<FetchData />} />
      </Routes>
    </Layout>
  );
};

export default App;
