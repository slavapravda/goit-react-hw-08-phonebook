import Form from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';

import s from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={s.section}>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
