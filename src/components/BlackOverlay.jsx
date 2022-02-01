import React from 'react'
import styles from './../styles/blackoverlay.module.css'

/**
 * Displays black overlay
 * 
 * @param setOverlay Takes a function to set overlay false
 */
const BlackOverlay = ({setOverlay}) => {

    const setOverlayFalse = () => {
        setOverlay(false)
    }

    return (
        <div className={styles.overlay} onClick={setOverlayFalse}>
        </div>
    )
}
export default BlackOverlay
