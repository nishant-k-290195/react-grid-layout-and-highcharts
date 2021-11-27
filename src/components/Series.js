import React from 'react'
import { BsArrowDownRightCircleFill } from 'react-icons/bs'
import CheckBoxSelectAll  from './CheckBoxSelectAll';
import CheckBoxBar  from './CheckBoxBar';
import styles from './Series.module.css'
import { useState } from 'react'

const Series = () => {
    const [checkStateAll, setCheckStateAll] = useState(false)

    const checkStatusAll = (checked) => {
        setCheckStateAll(checked)
    }

    return (
        <div>
            <div className={styles.title}>
                <BsArrowDownRightCircleFill style={{color:'grey'}} />
                <span>Series</span>
            </div>

            <div className={styles.series}>
                <CheckBoxSelectAll name='selectAll' value='selectAll' label='(Select All)' checkStatusAll={checkStatusAll}/>
                <CheckBoxBar name='2021' value='2021' label={`2021`} labelColor='blue'  checkStateAll={checkStateAll}/>
                <CheckBoxBar name='2020' value='2020' label={`2020`} labelColor='orange' checkStateAll={checkStateAll}/>
                <CheckBoxBar name='2019' value='2019' label={`2019`} labelColor='grey'  checkStateAll={checkStateAll}/>
            </div>
        </div>
    )
}

export default Series
