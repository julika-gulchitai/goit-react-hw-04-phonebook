import {
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled.js';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputName = e => {
    setName(e.target.value);
  };

  const handleInputNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name, number, id: nanoid() };
    addContact(newContact);
    setName('');
    setNumber('');
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        {'Name'}
        <StyledInput
          name="name"
          value={name}
          type="text"
          onChange={handleInputName}
          placeholder="name"
          required
        ></StyledInput>
      </StyledLabel>
      <StyledLabel>
        {'Number'}
        <StyledInput
          name="number"
          value={number}
          type="tel"
          onChange={handleInputNumber}
          placeholder="phone number"
          required
        ></StyledInput>
      </StyledLabel>
      <StyledBtn>Add contacts</StyledBtn>
    </StyledForm>
  );
};
