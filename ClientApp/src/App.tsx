import React, { useEffect } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import axios from "axios";
import { History } from "./components/History";
import { NewEntry } from "./components/NewEntry";

import "./custom.css";
import { Routes } from "react-router-dom";

const App = () => {
  async function makeRequest() {
    const response = await axios.get("api/JournalEntry/GetAllEntries");
    console.log(response.data);
  }
  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-entry" element={<NewEntry />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Layout>
  );
};

export default App;
