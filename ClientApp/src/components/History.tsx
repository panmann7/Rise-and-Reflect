import axios from "axios";
import React, { useState, useEffect } from "react";

const History = () => {
  const [journals, setJournals] = useState([]);
  async function getJournals() {
    const response = await axios.get("/api/journal");
    console.log(response);
    setJournals(response.data);
  }
  useEffect(() => {
    getJournals();
  }, []);
  return (
    <div>
      <br></br>
      <h1>View past journal entries</h1>
      <br></br>
      {journals.map((journal) => {
        return <p>{journal["entryBody"]}</p>;
      })}
    </div>
  );
};

export { History };
