import ContactForm from './ContactForm';
import Filter from './Filter';
import Contacts from './Contacts';

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


  return (
    <>
      <h1>Phonebook</h1>
      <br />
      <ContactForm />
      <br />
      <Contacts />
      <br />
      <Filter />
    </>
  );
}
export default App;
