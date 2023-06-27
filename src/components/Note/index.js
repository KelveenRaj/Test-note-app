import { MdDeleteForever } from "react-icons/md";
import { NoteWrapper, NoteFooter } from "./views";

const Note = ({ payload, handleDeleteNote }) => {
  const { id, date, text } = payload;
  return (
    <NoteWrapper>
      <span>{text}</span>
      <NoteFooter>
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </NoteFooter>
    </NoteWrapper>
  );
};

export default Note;
