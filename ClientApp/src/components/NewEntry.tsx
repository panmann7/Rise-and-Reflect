import React from "react";
import "../custom.css";
import { useLoaderData, useNavigate } from "react-router-dom";

// interface EntryData {
//   entry: {
//     date?: string;
//     entryBody?: string;
//   };
// }

const NewEntry = () => {
  //   const { entry } = useLoaderData() as EntryData;
  const navigate = useNavigate();

  return (
    <div>
      <br></br>
      <h1>Let's get started :)</h1>
      <br></br>
      <p>[journal entry layout here]</p>

      <form method="post" className="new-entry-form">
        <p>
          <span>Date</span>
          <input
            placeholder="DD-MM-YYY"
            aria-label="Date"
            type="text"
            name="date"
            defaultValue={"DD-MM-YYYY"}
            // defaultValue={entry?.date || "DD-MM-YYYY"}
          />
        </p>

        <p>
          <span>Journal Entry</span>
          <textarea
            placeholder="Start your entry here..."
            name="journal-entry"
            defaultValue={""}
            // defaultValue={entry?.entryBody || ""}
            rows={7}
          />
        </p>

        <p>
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
        </p>
      </form>
    </div>
  );
};

export { NewEntry };
