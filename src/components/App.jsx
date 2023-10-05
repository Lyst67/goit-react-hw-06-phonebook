import React from "react";
import  {Form}  from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";

export const App = () => {
   return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
  
   
 
  // const formSubmitHandler = data => {
  //   const newContacts = { id: nanoid(), ...data, }
  //   console.log(newContacts.name)
  //   const existElem = contacts.find((elem) =>
  //     elem.name === newContacts.name)
  //   if (existElem) {
  //     alert(`${data.name} is already in contacts`)
  //     return
  //   }
  //    setContacts(prevState => (
  //    [newContacts, ...prevState])) 
  // }

  // useEffect(() => {
  //   localStorage.setItem(LS_KEY, JSON.stringify(contacts))
  // }, [contacts])

  // const handleFilter = (event) => {
  //   const value = event.target.value
  //   setFilter(value)
  // }

//   const filterContacts = () => {
// return contacts.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
//   }
  
  // const deleteElement = ({ target: { name } }) => {
  //     setContacts(prevState => (
  //      prevState.filter((contact) => contact.name !== name)
  //     ))
  // }





