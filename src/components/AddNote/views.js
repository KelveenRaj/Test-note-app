import styled from "styled-components";

const AddNoteWrapper = styled.div.attrs({
  className: "add-note-wrapper",
})`
  background-color: #67d7cc;
  border-radius: 15px;
  padding: 1rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AddNoteFooter = styled.div.attrs({
  className: "add-note-footer",
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextArea = styled.textarea.attrs({
  className: "text-area",
})`
  border: none;
  resize: none;
  background-color: #67d7cc;
  outline: none;
`;

const Button = styled.button.attrs({
  className: "button",
})`
  & {
    border: none;
    background-color: #e1e1e1;
    border-radius: 15px;
    padding: 5px 10px 5px 10px;
  }
  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }
`;

export { AddNoteWrapper, AddNoteFooter, TextArea, Button };
