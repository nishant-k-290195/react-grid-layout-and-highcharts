import { FaFilter } from 'react-icons/fa'
import { Popover } from 'antd';
import styles from './FilterComponent.module.css'
import Series from './Series';
import Categories from './Categories';
import { useState } from 'react';

const FilterComponent = () => {
    const [filterOption, setFilterOption] = useState('Values')
    
    const title = <div className={styles.title}>
            <button onClick={() => {setFilterOption('Values')}} >Values</button>
            <button onClick={() => {setFilterOption('Names')}} >Names</button>
        </div>;
    
    let content
    if(filterOption === 'Values'){
        content = (
            <div style={{display:'grid', gridTemplateRows: 'min-content min-content', rowGap:'2rem'}}>
                <Series />
                <Categories />
            </div>
        );
    }

    if(filterOption === 'Names'){
        content = (
            <div>
                Nothing to show here yet
            </div>
        );
    }

    return (
        <div>
            <Popover 
                placement="rightTop" 
                title={title} 
                content={content} 
                trigger="click"
            >
                <FaFilter style={{color:'purple', fontSize: '2.5rem', margin: '1rem'}}/>
            </Popover>
        </div>
    )
}

export default FilterComponent
