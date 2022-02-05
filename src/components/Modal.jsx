/**
 * Container for the modal displayy
 */

import React from 'react'
import styles from './../styles/modal.module.css'
import ReactDOM from "react-dom";

import { motion } from 'framer-motion';

const Modal = ({title, closeModal, errorMessage, children}) => {
  return ReactDOM.createPortal(
    <motion.div
      initial={{y: '-100vh'}}
      animate={{y: 0}} 
      className={styles.container}>
      <h3>{title}</h3>
      <button className={styles.closeButton} onClick={closeModal}>X</button>
      <div className={styles.errorMessage}>{errorMessage? errorMessage : ''}</div>
      {children}
    </motion.div>, document.body)
}

export default Modal
