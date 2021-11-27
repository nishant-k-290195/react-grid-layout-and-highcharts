import React from 'react'
import styles from './CheckBox.module.css'

const CheckBoxSelectAll = (props) => {
    const onChange = event => {
        props.checkStatusAll(event.target.checked)
    }
    
    return (
        <div className={styles.checkBox}>
            <input type="checkbox" onChange={onChange} name={props.name} value={props.value} />
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

export default CheckBoxSelectAll
