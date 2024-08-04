import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";

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

  const [entryId, setId] = useState("");
  async function onDeleteButtonClick() {
    const journalId = entryId;
    console.log(journalId);

    const response = await axios.delete("/api/journal/" + journalId);
    console.log(response);

    await getJournals();
  }

  return (
    <div className="history-pg-components">
      <br></br>
      <h1>Past journal entries</h1>
      <p>Select an entry to edit:</p>
      <TextField
        label="Type entry no., (e.g. 2)"
        variant="outlined"
        value={entryId}
        onChange={(e) => setId(e.target.value)}
      />
      <br></br>
      <div className="entry-buttons">
        <ButtonGroup variant="contained">
          <Button type="submit">Update</Button>
          <Button onClick={onDeleteButtonClick} type="submit">
            Delete
          </Button>
        </ButtonGroup>
      </div>
      <br></br> <br></br>
      <p>Select an entry to delete:</p>
      <TextField
        label="Type entry no., (e.g. 2)"
        variant="outlined"
        value={entryId}
        onChange={(e) => setId(e.target.value)}
      />
      <br></br>
      <div className="entry-buttons">
        <ButtonGroup variant="contained">
          <Button type="submit">Update</Button>
          <Button onClick={onDeleteButtonClick} type="submit">
            Delete
          </Button>
        </ButtonGroup>
      </div>
      {journals.map((journal) => {
        return <p>{journal["entryBody"]}</p>;
      })}
    </div>
  );
};

export { History };
