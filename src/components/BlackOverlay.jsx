import React from 'react'
import styles from './../styles/blackoverlay.module.css'
import ReactDOM from "react-dom";
import { motion } from 'framer-motion';

/**
 * Displays black overlay
 * 
 * @param setOverlay Takes a function to set overlay false
 */
const BlackOverlay = ({setOverlay}) => {

    const setOverlayFalse = () => {
        setOverlay(false)
    }

    return ReactDOM.createPortal(
        <motion.div className={styles.overlay} onClick={setOverlayFalse}
        initial={{opacity:0}} animate={{opacity:1}}>
        </motion.div>,
        document.body
    )
}
export default BlackOverlay
