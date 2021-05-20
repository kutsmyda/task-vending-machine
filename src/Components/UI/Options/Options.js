import React from 'react';
import styles from './Options.module.css'

const Options = ({categoriesList = [], headerSelect = '', onSelectChange = Function.prototype}) => {

    return (
        <>
            <select value={'DEFAULT'} name='item' className={`browser-default ${styles.select}`}
                    onChange={onSelectChange}>
                <option value={'DEFAULT'} disabled>{headerSelect}</option>
                {categoriesList.length && categoriesList.map((category) => <option key={category.id}
                                                                                   value={category.name}
                >{category.name}
                </option>)}
            </select>


        </>
    );
};

export default Options;