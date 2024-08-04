import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import axios from "axios";
import { History } from "./components/History";
import { Edit } from "./components/Edit";
import { NewEntry } from "./components/NewEntry";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./custom.css";
import { Routes } from "react-router-dom";
import { Button } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => {
  const [useDarkTheme, setDarkTheme] = useState(false);
  async function makeRequest() {
    const response = await axios.get("api/JournalEntry/GetAllEntries");
    console.log(response.data);
  }
  useEffect(() => {
    makeRequest();
  }, []);
  function updateDarkTheme() {
    setDarkTheme(true);
  }

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-entry" element={<NewEntry />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Layout>

      <Button onClick={updateDarkTheme}>Switch mode</Button>
    </ThemeProvider>
  );
};

export default App;
