import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled, TextareaAutosize, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Textarea = styled(TextareaAutosize)(
  ({ theme }) => `
    borderRadius: "4px",
    border: 1px solid #ccc,
    font-family: 'IBM Plex Sans', sans-serif;
    line-height: 1.5;
    padding: 1rem;
    border: 1px solid
    
  `
);

const Edit = () => {
  const [journals, setJournals] = useState([]);
  async function getJournals() {
    const response = await axios.get("/api/journal");
    console.log(response);
    setJournals(response.data);
  }
  useEffect(() => {
    getJournals();
  }, []);

  const navigate = useNavigate();
  const [entryId, setEntryId] = useState("");
  const [journalEntry, setJournalEntry] = useState("");

  async function onButtonClick() {
    const journalId = entryId;
    const updatedJournal = journalEntry;
    console.log(journalId);
    console.log(updatedJournal);

    const response = await axios.put("/api/journal", {
      EntryId: entryId,
      EntryBody: journalEntry,
    });
    console.log(response);
    await getJournals();
  }

  return (
    <div className="history-pg-components">
      <br></br>
      <h1>Update an entry:</h1>
      <br></br>
      <TextField
        label="Type entry no., (e.g. 2)"
        variant="outlined"
        value={entryId}
        onChange={(e) => setEntryId(e.target.value)}
      />
      <br></br>
      <Textarea
        minRows={10}
        placeholder="Start new entry here..."
        value={journalEntry}
        onChange={(e) => setJournalEntry(e.target.value)}
      />
      <br></br>
      <div className="entry-buttons">
        <ButtonGroup variant="contained">
          <Button type="submit" onClick={onButtonClick}>
            Update
          </Button>
        </ButtonGroup>
      </div>
      {journals.map((journal) => {
        return <p>{journal["entryBody"]}</p>;
      })}
    </div>
  );
};

export { Edit };
