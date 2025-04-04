import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList";
import css from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());  // Завантажуємо контакти при запуску застосунку
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Contact Book</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
