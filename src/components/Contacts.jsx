import React from 'react';

import Title from './Title';
import ContactsList from './ContactsList';
import Filter from './Filter';

import { useSelector } from 'react-redux';

function Contacts() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const makeFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {contacts.length === 0 ? (
        <Title title="U haven't any friends" />
      ) : (
        <ContactsList contacts={contacts} />
      )}
      <br />

      <Filter />

      {filter !== ''  && (
        <Title title="Filtered contacts" />
      )}
      
      {filter !== '' && makeFilteredContacts().length === 0 && (
        <Title title="No matches" />
      )}

      {contacts.length > 0 && filter === '' && (
        <Title title="Filter field is empty" />
      )}

      {makeFilteredContacts().length > 0 && filter !== '' && (
        <ContactsList contacts={makeFilteredContacts()} />
      )}
    </>
  );
}

export default Contacts;
