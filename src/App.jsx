import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox"
import { useSelector } from "react-redux";
import { selectError } from "./redux/contactsSlice";
import { selectLoading } from "./redux/contactsSlice";
import css from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());  
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Contact Book</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading..</p>}
      {error && <p>Error 404</p>}
      <ContactList />
    </div>
  );
};

export default App;
