import React, {useState} from 'react';
import styles from './Editing.module.css'
import Input from "../UI/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {addCategory, addItem, clearCategory} from "../../redux/action-creators";
import Options from "../UI/Options/Options";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const Editing = () => {


    const dispatch = useDispatch()
    const categoriesList = useSelector(({categoriesListReducer}) => categoriesListReducer.categoriesList);

    const [inputNameValue, setInputNameValue] = useState({});
    const [inputCount, setInputCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false)
    const [inputSelectName, setInputSelectName] = useState('')


    const handleOnChange = (e) => {
        setInputNameValue({
            ...inputNameValue, [e.target.name]: e.target.value,
            id: Date.now()
        })
    }

    const onInputCountValue = (e) => {
        if (+e.target.value >= 0) {
            return setInputCount(+e.target.value)
        }
        return setInputCount(+0)
    }

    const onSelectChange = (e) => {
        const category = categoriesList.find((category) => category.name === e.target.value)
        if (!!category) {
            setInputCount(category.count)
            setInputSelectName(category.name)
        } else
            setIsDisabled(true)
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
            toast.success('Category add. Go to Lisi if you want to see it')

        } else {
            toast.warning('Category already had been exist')
        }
    }


    ////////////////////Button Handle to REDUX////////////////////////////
    const handleAddItem = () => {
        dispatch(addItem({inputCount, inputSelectName}))
        toast.success('Successfully')
    }

    const handleClearCategory = () => {
        dispatch(clearCategory())
    }

    ////////////////////Button Handle to REDUX////////////////////////////


    return (
        <div className={styles.Editing}>

            {/*///////////////////////////////////Add category//////////////////////////////////*/}


            <div className={styles.wrap}>
                <div>
                    <h5 className='alignCenter'>Add category</h5>

                </div>
                <div>
                    <Input name={'name'} type={'text'} onChange={handleOnChange} value={inputNameValue.name}/>
                    <Input name={'price'} type={'number'} onChange={handleOnChange} value={inputNameValue.price}/>
                    <Input name={'count'} type={'number'} onChange={handleOnChange} value={inputNameValue.count}/>
                </div>

                <div className={styles.pdTop}>
                    <button className='btn'
                            onClick={handleAddCategory}
                    >ADD
                    </button>
                </div>

            </div>


            {/*///////////////////////////////////Add item//////////////////////////////////*/}


            <div className={styles.wrap}>
                <div>
                    <h5 className='alignCenter'>Add item</h5>
                </div>
                <div>
                    <Options categoriesList={categoriesList}
                             headerSelect={'Choose category :'}
                             onSelectChange={onSelectChange}
                    />

                </div>


                <div>
                    <Input name={'Count :'}
                           type={'number'}
                           onInput={onInputCountValue}
                           value={inputCount}
                           disabled={isDisabled}/>

                </div>
                <div>
                    <button className='btn'
                            onClick={handleAddItem}
                    >Save
                    </button>
                </div>
            </div>


            <div className={styles.wrap}>
                <div>
                    <h5 className='alignCenter'>Clear</h5>

                </div>
                <div>
                    <p>Delete item, where count = 0</p>

                </div>
                <div>
                    <button onClick={handleClearCategory}
                            className='btn'
                    >Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Editing;