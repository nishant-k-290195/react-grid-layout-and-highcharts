import React from 'react'
import { BsArrowDownRightCircleFill } from 'react-icons/bs'
import CheckBox  from './CheckBox';
import CheckBoxSelectAll  from './CheckBoxSelectAll';
import styles from './Categories.module.css'
import { useState } from 'react'

const Categories = () => {
    const [checkStateAll, setCheckStateAll] = useState(false)

    const checkStatusAll = (checked) => {
        setCheckStateAll(checked)
    }

    return (
        <div>
            <div className={styles.title}>
                <BsArrowDownRightCircleFill style={{color:'grey'}} />
                <span>Categories</span>
            </div>
            <div className={styles.categories}>
                <CheckBoxSelectAll name='selectAll' value='selectAll' label='(Select All)' checkStatusAll={checkStatusAll} />
                <CheckBox name='2021' value='Hyundai' label={`Hyundai`} checkStateAll={checkStateAll} />
                <CheckBox name='2020' value='Lexus' label={`Lexus`} checkStateAll={checkStateAll} />
                <CheckBox name='2019' value='Toyta' label={`Toyta`} checkStateAll={checkStateAll} />
                <CheckBox name='2019' value='GM' label={`GM`} checkStateAll={checkStateAll} />
                <CheckBox name='2019' value='Ford' label={`Ford`} checkStateAll={checkStateAll} />
            </div>
        </div>
    )
}

export default Categories
