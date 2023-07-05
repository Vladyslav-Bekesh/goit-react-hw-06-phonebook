import ContactForm from './ContactForm';
import Filter from './Filter';
import Contacts from './Contacts';
import { useSelector } from 'react-redux';


// const useLocalStorage = (key, defValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(localStorage.getItem(key)) ?? defValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [state, key]);

//   return [state, setState];
// };

function App() {
  // const CONTACT_KEY = 'contacts';

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  return (
    <>
      <h1>Phonebook</h1>
      {contacts !== 0 && <ContactForm/>}

      <Filter/>

      {contacts.length !== 0 && filter === '' && 
        <Contacts contacts={contacts} title={'Contacts'} />}
      
      
    </>
  );
}
export default App;
