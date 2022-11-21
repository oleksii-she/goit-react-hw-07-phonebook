import { React, useEffect } from 'react';

import { FormData } from './form/form';
import { Filter } from './filter/Filter';
import { ContactsList } from './contacts/contactsList';
import { Conteiner } from './conteiner.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Conteiner>
      <h1>Phonebook</h1>
      <FormData />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </Conteiner>
  );
};
