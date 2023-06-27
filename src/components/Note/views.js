import styled from "styled-components";

const NoteWrapper = styled.div.attrs({
    className: 'note-wrapper'
})`
  background-color: #fef68a;
  border-radius: 15px;
  padding: 1rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;
`;

const NoteFooter = styled.div.attrs({
    className: 'note-footer'
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { NoteWrapper, NoteFooter };
