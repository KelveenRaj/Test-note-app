import { useState } from "react";
import { AddNoteWrapper, AddNoteFooter, TextArea, Button } from "./views";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charLimit = 200;

  const handleChange = (event) => {
    // set charLimit
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      // reset note input
      setNoteText("");
    }
  };

  return (
    <AddNoteWrapper>
      <TextArea
        rows="8"
        cols="10"
        placeholder="Type to add note..."
        value={noteText}
        onChange={handleChange}
      />
      <AddNoteFooter>
        <small>{charLimit - noteText.length} Remaining</small>
        <Button onClick={handleSaveClick}>Save</Button>
      </AddNoteFooter>
    </AddNoteWrapper>
  );
};

export default AddNote;
