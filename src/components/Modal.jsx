/**
 * Container for the modal displayy
 */

import React from 'react'
import styles from './../styles/modal.module.css'
import ReactDOM from "react-dom";

const Modal = ({title, closeModal, errorMessage, children}) => {
  return ReactDOM.createPortal(
    <div className={styles.container}>
      <h3>{title}</h3>
      <button className={styles.closeButton} onClick={closeModal}>X</button>
      <div className={styles.errorMessage}>{errorMessage ? errorMessage : ''}</div>
      {children}
    </div>, document.body)
}

export default Modal
