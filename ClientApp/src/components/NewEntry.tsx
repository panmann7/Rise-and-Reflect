import React, { useState } from "react";
import "../custom.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

// interface EntryData {
//   entry: {
//     date?: string;
//     entryBody?: string;
//   };
// }

const NewEntry = () => {
  //   const { entry } = useLoaderData() as EntryData;
  const navigate = useNavigate();
  const [journalEntry, setJournalEntry] = useState("");

  async function onButtonClick() {
    const journalData = journalEntry;
    console.log(journalData);
    const response = await axios.post("/api/journal", {
      EntryBody: journalData,
    });
    console.log(response);
  }

  return (
    <div>
      <br></br>
      <h1>Let's get started :)</h1>
      <br></br>

      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={journalEntry}
        onChange={(e) => setJournalEntry(e.target.value)}
      />
      <Button variant="outlined" onClick={onButtonClick}>
        Outlined
      </Button>
      <form method="post" className="new-entry-form">
        <p className="entry-form-components">
          <span>Date</span>
          <input
            className="user-inputs"
            placeholder="DD-MM-YYY"
            type="text"
            name="date"
            defaultValue={"DD-MM-YYYY"}
            // defaultValue={entry?.date || "DD-MM-YYYY"}
          />
        </p>

        <p className="entry-form-components">
          <span>Journal Entry</span>
          <textarea
            className="user-inputs"
            placeholder="Start your entry here..."
            name="journal-entry"
            defaultValue={""}
            // defaultValue={entry?.entryBody || ""}
            rows={10}
          />
        </p>

        <div className="entry-buttons">
          <button type="submit">Save</button>
          <button type="reset">Restart</button>
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export { NewEntry };
