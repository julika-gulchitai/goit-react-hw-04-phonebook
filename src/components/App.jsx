import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import {
  Container,
  StyledTitle,
  StyledTitles,
} from './ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(window.localStorage.getItem('CONTACTS'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      window.localStorage.setItem(
        'CONTACTS',
        JSON.stringify(this.state.contacts)
      );
    }
  }
  handleAddUser = (name, number) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert('Contact has already added!');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  handleSetFilter = e => {
    this.setState({ filter: e.target.value });
  };
  getFiltredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <StyledTitle>Phonebook</StyledTitle>
        <ContactForm onContactAdd={this.handleAddUser} />
        <StyledTitles>Contacts</StyledTitles>
        <Filter filter={filter} handleInputChange={this.handleSetFilter} />
        <ContactList
          filteredContacts={this.getFiltredContacts()}
          deleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}
