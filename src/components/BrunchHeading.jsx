import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBrunchTitle } from '../reducers/userplanReduxFunctions';
import styles from './../styles/brunchheading.module.css'

/**
 * Adds editable heading area. Editing can be toggled by double clicking heading area.
 */
const BrunchHeading = ({ title, id }) => {

  //Toggles the edit form
  //true means readonly is triggered on, false turns of readonly mode
  const [toggleEditForm, setToggleEditForm] = useState(true);
  const nameInput = useRef();
  const dispatch = useDispatch();

  /**
   * Turns on the edit heading form.
   * @param {*} e event
   */
  const toggleTheForm = e => {
    e.preventDefault();
    setToggleEditForm(false)
  }

  /**
   * Changes the heading value of the brunch
   */
  const changeHeadingValue = (e) => {

    if (e.key === 'Escape') {
      setToggleEditForm(true)
      nameInput.current.value = title;
    }
    
    if(e.key === 'Enter' && !toggleEditForm){

      //If input is same as title, do nothing
      if (nameInput.current.value.toLowerCase() === title.toLowerCase()) {
        setToggleEditForm(true);
        return
      }

      //If input is empty, show alert
      if(nameInput.current.value === ''){
        alert("Input can not be empty!")
        nameInput.current.value = title;
        setToggleEditForm(true);
        return
      }

      //Dispatch the settings to the state here
      dispatch(editBrunchTitle(nameInput.current.value, id))
      setToggleEditForm(true)
    }
  }

  return (
    <>
      <input 
        className={styles.brunchInput} 
        onDoubleClick={toggleTheForm} 
        defaultValue={title}
        readOnly={toggleEditForm}
        ref={nameInput}
        onKeyDown={changeHeadingValue}
        style= {!toggleEditForm ? {
          borderBottom: "2px solid black"
        } : {}}  />
    </>
  );
};

export default BrunchHeading;
