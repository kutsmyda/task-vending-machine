import React from 'react';
import styles from './Warning.module.css'

const Warning = ({className, text}) => {
    const cls = [styles.Warning, className]
    return (
        <div className={cls.join('')}>

        </div>
    );
};

export default Warning;