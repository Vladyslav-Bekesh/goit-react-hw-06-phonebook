import { useDispatch, useSelector } from 'react-redux';
import { handleFilterChange } from '../redux/store';
import Contacts from './Contacts';
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

      {contacts.length !== 0 && filter !== '' && (
        <>
          <Contacts contacts={makeFilteredContacts()} title={'Filtered contacts'}/>
        </>
      )}
    </>
  );
}

export default Filter;
