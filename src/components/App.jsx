import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormData } from './form/form';
import { Filter } from './filter/Filter';
import { ContactsList } from './contacts/contactsList';
import { Conteiner } from './conteiner.styled';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Conteiner>
      <h1>Phonebook</h1>
      <FormData />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter />
      <ContactsList />
    </Conteiner>
  );
};
