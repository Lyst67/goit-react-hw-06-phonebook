import React from 'react';
import css from './Form.module.css';
import { addContact } from 'redux/slice';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const Form = () => {
 
  const dispatch = useDispatch();
      
     const handleSubmit = (event) => {
       event.preventDefault()
       const form = event.currentTarget
       const name = form.elements.name.value
       const number = form.elements.number.value
       const id = nanoid()
       const newContact = {id, name, number}
       dispatch(addContact(newContact))
       form.reset()
      }

      return (
        <form className={css.form_thumb} onSubmit={handleSubmit}>
        <label  className={css.form_label}>Name
            <input className={css.form_input} type="text" name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name"
                required
              />
            </label>
            <label  className={css.form_label}>Number
            <input className={css.form_input} type="tel" name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number"
                required
              />
            </label>
        <button type="submit" className={css.form_btn}>Add contact</button>
        </form> 
      ) 
}


