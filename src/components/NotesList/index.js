import Note from "../Note";
import { NoteListWrapper } from "./views";
import AddNote from "../AddNote";

const NotesList = ({ payload, handleAddNote, handleDeleteNote }) => {
  return (
    <NoteListWrapper>
      {payload.map((payload) => (
        <Note payload={payload} handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </NoteListWrapper>
  );
};

export default NotesList;
