import React from 'react'
import { BsArrowDownRightCircleFill } from 'react-icons/bs'
import CheckBox  from './CheckBox';
import CheckBoxSelectAll  from './CheckBoxSelectAll';
import styles from './Categories.module.css'

const Categories = () => {
    return (
        <div>
            <div className={styles.title}>
                <BsArrowDownRightCircleFill style={{color:'grey'}} />
                <span>Categories</span>
            </div>
            <div className={styles.categories}>
                <CheckBoxSelectAll name='selectAll' value='selectAll' label='(Select All)' />
                <CheckBox name='2021' value='2021' label={`Hyundai`} />
                <CheckBox name='2020' value='2020' label={`Lexus`} />
                <CheckBox name='2019' value='2019' label={`Toyta`} />
                <CheckBox name='2019' value='2019' label={`GM`} />
                <CheckBox name='2019' value='2019' label={`Ford`} />
            </div>
        </div>
    )
}

export default Categories
