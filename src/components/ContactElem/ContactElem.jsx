import {
  StyledBtn,
  StyledContacts,
} from 'components/ContactForm/ContactForm.styled';
import React from 'react';

export const ContactElem = ({ name, number, id, deleteContact }) => {
  return (
    <>
      <StyledContacts>
        {name}: {number}
        <StyledBtn type="button" onClick={() => deleteContact(id)}>
          Delete
        </StyledBtn>
      </StyledContacts>
    </>
  );
};
