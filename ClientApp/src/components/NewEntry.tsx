import React, { useState } from "react";
import "../custom.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

import axios from "axios";

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

const NewEntry = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [journalEntry, setJournalEntry] = useState("");

  async function onButtonClick() {
    const journalData = journalEntry;
    const journalDate = date;
    console.log(journalData);
    console.log(journalDate);

    const response = await axios.post("/api/journal", {
      Date: journalDate,
      EntryBody: journalData,
    });
    console.log(response);
  }

  return (
    <div className="new-entry-form">
      <br></br>
      <h1>Enter your journal here :)</h1>
      <br></br>

      <TextField
        label="Date"
        variant="outlined"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br></br>
      <Textarea
        minRows={10}
        placeholder="Start entry here..."
        value={journalEntry}
        onChange={(e) => setJournalEntry(e.target.value)}
      />

      <br></br>
      <div className="entry-buttons">
        <ButtonGroup variant="contained">
          <Button onClick={onButtonClick} type="submit">
            Save
          </Button>
          <Button
            type="reset"
            onClick={() => {
              setDate("");
              setJournalEntry("");
            }}
          >
            Restart
          </Button>{" "}
          <Button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export { NewEntry };
