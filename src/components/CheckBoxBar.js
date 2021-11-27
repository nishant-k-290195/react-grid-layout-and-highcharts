import React from 'react'
import styles from './CheckBoxBar.module.css'
import { useState } from 'react'

const CheckBoxBar = (props) => {
    const [checkState, setCheckState] = useState(false)

    const onChange = event => {
        setCheckState(event.target.checked)
        props.checkStatus(event.target.checked || props.checkStateAll)
    }
    // setCheckState(props.checkStateAll)

    return (
        <div className={styles.checkBoxBar}>
            <input type="checkbox" onChange={onChange} name={props.name} value={props.value} checked={props.checkStateAll || checkState} />
            <div className={styles.bar} style={{backgroundColor:props.labelColor}}/>
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

export default CheckBoxBar
