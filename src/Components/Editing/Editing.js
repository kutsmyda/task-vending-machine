import React, {useState} from 'react';
import styles from './Editing.module.css'
import Input from "../UI/Input";
import {useDispatch, useSelector} from "react-redux";
import {addCategory} from "../../redux/action-creators";


const Editing = () => {


    const dispatch = useDispatch()
    const categoriesList = useSelector(({categoriesListReducer}) => categoriesListReducer.categoriesList);

    const [warning, setWarning] = useState({addCategory: false, addItem: false, clear: false});
    const [success, setSuccess] = useState({addCategory: false, addItem: false, clear: false});
    const [inputNameValue, setInputNameValue] = useState({});


    const handleOnChange = (e) => {
        setInputNameValue({
            ...inputNameValue, [e.target.name]: e.target.value,
            id: Date.now()
        })
    }


    const handleAddCategory = () => {
        let payload = {};
        if (inputNameValue.count === '' || inputNameValue.count === undefined) {
            payload = {...inputNameValue, count: 0}
        } else {
            payload = {...inputNameValue}
        }
        if ((categoriesList.find((category) => category.name === payload.name)) === undefined && !!payload.name) {
            dispatch(addCategory(payload))
        }


    }


    return (
        <div className={styles.Editing}>

            {/*///////////////////////////////////Add category//////////////////////////////////*/}

            <div className={styles.wrap}>
                <div>
                    <h5>Add category</h5>

                </div>
                <div>
                    <Input name={'name'} type={'text'} onChange={handleOnChange}/>
                    <Input name={'price'} type={'number'} onChange={handleOnChange}/>
                    <Input name={'count'} type={'number'} onChange={handleOnChange}/>
                </div>

                <div className={styles.pdTop}>
                    <button className='btn' onClick={handleAddCategory}>ADD</button>
                </div>

            </div>


            {/*///////////////////////////////////Add item//////////////////////////////////*/}


            <div className={styles.wrap}>
                <div>
                    <h5>Add item</h5>
                </div>
                <div>
                    <select name='item' className="browser-default">
                        <option value='1' selected disabled>Choose your category</option>
                        <option value='2'>fs</option>
                        <option value='3'>fdw</option>
                        <option value='4'>qwe</option>
                    </select>
                </div>
                <div>
                    <Input name={'Count'} type={'number'}/>

                </div>
                <div>
                    <button className='btn'>Save</button>

                </div>
            </div>


            <div className={styles.wrap}>
                <div>
                    <h5>Clear</h5>

                </div>
                <div>
                    <p>Delete item, where count = 0</p>

                </div>
                <div>
                    <button className='btn'>Clear</button>
                </div>
            </div>
        </div>
    );
};

export default Editing;