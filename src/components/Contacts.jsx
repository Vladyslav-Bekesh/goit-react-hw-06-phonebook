import React from 'react';

import Title from './Title';
import ContactsList from './ContactsList';

import { useSelector } from 'react-redux';

function Contacts() {
  const contacts = useSelector(state => state.contacts);
  

  return (
    <>
      {contacts.length === 0 ? (
        <Title title="U haven't any friends" />
      ) : (
        <ContactsList contacts={contacts} />
      )}
    </>
  );
}

export default Contacts;
