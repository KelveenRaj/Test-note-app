import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import { ContainerWrapper } from "./views";
const App = () => {
  const [payload, setPayload] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "19/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "27/04/2022",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...payload, newNote];
    setPayload(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = payload.filter((note) => note.id !== id);
    setPayload(newNotes);
  };

  return (
    <ContainerWrapper>
      <NotesList
        payload={payload}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </ContainerWrapper>
  );
};

export default App;
