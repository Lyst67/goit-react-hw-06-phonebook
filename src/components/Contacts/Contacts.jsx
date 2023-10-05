import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/slice';
import css from './Contacts.module.css';
const LS_KEY = "contacts";

export const Contacts = () => {
   
    const contacts = useSelector((state) => state.contactList.contacts)
    const dispatch = useDispatch()
    
     useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts))
     }, [contacts])
    
    const deleteElement = (event) => {
       dispatch(deleteContact(event.target.id))  
    } 
    
    const filter = useSelector((state) => state.contactList.filters)
       const filterContacts = () => {
           return contacts.filter((el) =>
               el.name.toLowerCase().includes(filter.toLowerCase()))
  }
    
    return (
        <>
            <ul className={css.cont_list}>
                {filterContacts().map(({id, name, number}) => {
                    return (
                    <li className={css.cont_item} key={id}>
                            <p>{name}: {number}</p>
                            <button className={css.cont_btn} type="button"
                                name={name} id={id}
                                onClick={deleteElement}
                            >Delete</button>
                    </li>
                    )
                })}
            </ul>
        </> 
    )
}