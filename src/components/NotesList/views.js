import styled from "styled-components";

const NoteListWrapper = styled.div.attrs({
    className: 'notes-list'
})`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;


export { NoteListWrapper };
