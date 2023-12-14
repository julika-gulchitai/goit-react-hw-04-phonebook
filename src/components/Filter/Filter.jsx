import {
  StyledInput,
  StyledText,
} from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ filter, handleInputChange }) => {
  return (
    <>
      <StyledText>Find contact by name </StyledText>
      <StyledInput
        name="filter"
        value={filter}
        onChange={handleInputChange}
        placeholder="enter user name"
      ></StyledInput>
    </>
  );
};
