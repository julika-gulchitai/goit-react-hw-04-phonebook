import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid lightblue;
  flex-direction: column;
  gap: 10px
  margin: 0 auto;
  justify-content: center;
   display: flex;
   align-items: center;
   font-size: 18px;
`;
export const StyledForm = styled.form`
  border: 1px solid lightblue;
  background-color: #c9ddf0;
  box-shadow: 2px 2px 7px 3px lightgray;
  width: 300px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const StyledTitle = styled.h2`
  color: #4d5a66;
  font-size: 30px;
`;
export const StyledTitles = styled.h4`
  color: #4d5a66;
  font-size: 25px;
  margin-bottom: 0px;
`;
export const StyledText = styled.h6`
  color: #4d5a66;
  font-size: 15px;
  margin-bottom: 7px;
  margin-top: 7px;
`;
export const StyledBtn = styled.button`
  cursor: pointer;
  display: block;
  padding: 5px 10px;
  margin-top: 5px;
  border-radius: 10px;
  background: #71b4f7;
  color: white;
  font-size: 15px;
  width: 130px;
  border: 1px solid lightblue;
  &:hover {
    background: #72b39c;
    color: #71b4f7;
  }
`;
export const StyledInput = styled.input`
  display: block;
  padding: 7px 10px;
  font-size: 10px;
  width: 280px;
  border: 0.5px solid;
  border-radius: 20px
  margin-bottom: 20px;
  color: #86a8b5;
`;
export const StyledLabel = styled.label`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: grey;
  margin-bottom: 7px;
`;
export const StyledContactsList = styled.li`
  color: grey;
  text-decoration: none;
  display: block;
  width: 400px;
`;

export const StyledContacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
