import React from 'react'
import styles from './CheckBox.module.css'
import { useState } from 'react'

const CheckBox = (props) => {
    const [checkState, setCheckState] = useState(false)

    const onChange = event => {
        if(event.target.checked ){setCheckState(false)}
    }
    
    return (
        <div className={styles.checkBox}>
            <input type="checkbox" onChange={onChange} name={props.name} value={props.value} />
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

export default CheckBox
