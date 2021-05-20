import React from 'react';
import styles from './Greeting.module.css'
const Greeting = () => {
    return (
        <div className={styles.Greeting}>
            <h4 className={'alignCenter'}>You are use Vending Snack Machine v.1.0</h4>
            <p className={"alignCenter"}>You can add Items or Categories in CONTROLS</p>
            <p className={'alignCenter'}>To view shopping statistics go to <strong>"Statistic"</strong></p>
            <h5>What do you want to order :</h5>
        </div>
    );
};

export default Greeting;