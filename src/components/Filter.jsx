import { useDispatch, useSelector } from 'react-redux';
import { handleFilterChange } from '../redux/store';
import ContactsList from './ContactsList';

import Title from './Title';

function Filter() {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(handleFilterChange(event.target.value));
  };

  const makeFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {contacts.length > 0 && (
        <label>
          Enter name from contacts
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={filter}
            onChange={handleFilter}
            required
          />
        </label>
      )}

      <Title title="Filtered contacts" />

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

export default Filter;
