import { ContactElem } from 'components/ContactElem/ContactElem';
import { StyledContactsList } from 'components/ContactForm/ContactForm.styled';

export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <>
      <ul>
        <StyledContactsList>
          {filteredContacts.map(contact => (
            <ContactElem
              key={contact.id}
              {...contact}
              deleteContact={deleteContact}
            />
          ))}
        </StyledContactsList>
      </ul>
    </>
  );
};
