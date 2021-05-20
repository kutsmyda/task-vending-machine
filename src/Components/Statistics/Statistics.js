import React, {useState} from 'react';
import styles from './Statistics.module.css'
import {useSelector} from "react-redux";
import {currentDate} from "../../utilits/CurrentDay";
import Input from "../UI/Input/Input";

const Statistics = () => {

//////////////////Button LOGIC /////////////////////////////////////////
        const [isDailyOpen, setIsDailyOpen] = useState(false)
        const [isMonthOpen, setIsMonthOpen] = useState(false)
//////////////////Button LOGIC /////////////////////////////////////////


        //////////////////Filtered/////////////////////////////////////////
        const [filterDate, setFilterDate] = useState([])
        const [filterDayDate, setFilterDayDate] = useState([])
        //////////////////Filtered////////////////////////////////////////

        ///////////////////////InputsValue////////////////////////////////////////
        const [inputYear, setInputYear] = useState(currentDate.currentGetFullYear())
        const [inputMonth, setInputMonth] = useState(currentDate.currentMonth())
        const [inputDay, setInputDay] = useState(currentDate.currentDay())
        ///////////////////////InputsValue////////////////////////////////////////


        const statisticsList = useSelector(({categoriesListReducer}) => categoriesListReducer.statisticsList);


////////////////////Open Statistics////////////////////
        const handleOpenReportPerDaily = () => {
            setIsDailyOpen(!isDailyOpen)
        }
        const handleOpenReportPerMonth = () => {
            setIsMonthOpen(!isMonthOpen)
        }
////////////////////Open Statistics////////////////////


        /////////////////////////////onChangeIputs//////////////////////////////
        const handleChange = (e) => {
            if (e.target.name === 'year') {
                setInputYear(e.target.value)
            }
            if (e.target.name === 'month') {
                setInputMonth(e.target.value)
            }
            if (e.target.name === 'day') {
                setInputDay(e.target.value)
            }
        }
        /////////////////////////////onChangeIputs//////////////////////////////


        ////////////////////////////////CLICK ON BUTTON AND SUBMIT/////////////////////////////////////////////
        const handleSubmitMonthReport = () => {
            const choosenData = `${inputYear}-${inputMonth.length === 1 ? '0' + inputMonth : inputMonth}`;
            const filter = statisticsList.filter(date => date.date.slice(0, 7) === choosenData)
                .sort((a, b) => a.name > b.name ? 1 : -1);
            setFilterDate(filter);
        }


        const handleSubmitDayReport = (e) => {
            const choosenData = `${inputYear}-${inputMonth.length === 1 ? '0' + inputMonth : inputMonth}-${inputDay}`;


            let filter = statisticsList.filter(item => {
                let date = new Date(item.date);
                return date >= (new Date(choosenData)) && date <= (new Date(currentDate.getAllDataDate()));
            })
                .sort((a, b) => a.name > b.name ? 1 : -1);

            setFilterDayDate(filter);
        }
        ////////////////////////////////CLICK ON BUTTON AND SUBMIT/////////////////////////////////////////////


        /////////////////////////////////Array mathod Reduce - total count////////////////////////////////
        let totalPrice = filterDate.length > 0 && filterDate.reduce((acc, value) => {
            return acc + (value.price * value.count)
        }, 0)


        let totalPriceDay = filterDayDate.length > 0 && filterDayDate.reduce((acc, value) => {
            return acc + (value.price * value.count)
        }, 0)

        /////////////////////////////////Array mathod Reduce - total count////////////////////////////////


        return (
            <div>
                <div className={styles.buttonWrapper}>
                    <button className={'btn butt'} onClick={handleOpenReportPerDaily}>daily report</button>
                    <button className={'btn butt'} onClick={handleOpenReportPerMonth}>monthly report</button>
                </div>


                {isMonthOpen &&

                <div>
                    <div>
                        <Input
                            name={'year'}
                            type={'number'}
                            onChange={handleChange}
                            value={inputYear}
                            max={currentDate.currentGetFullYear()}
                        />
                    </div>
                    <div>
                        <Input type={'number'}
                               name={'month'}
                               onChange={handleChange}
                               value={inputMonth}
                               max={12}
                               min={1}
                        />
                        <button className={'btn mgTop'} onClick={handleSubmitMonthReport}>Find</button>
                    </div>

                    <hr/>
                    <div>
                        <div>Total: {totalPrice ? totalPrice : 0} $
                        </div>
                    </div>
                    <hr/>


                    <div>
                        {filterDate.map((value) => <div key={value.id}>{value.name} - {value.count} - {value.price}$</div>)}

                    </div>
                </div>


                }


                {isDailyOpen &&

                <div>
                    <div>
                        <Input
                            name={'year'}
                            type={'number'}
                            onChange={handleChange}
                            value={inputYear}
                            max={currentDate.currentGetFullYear()}
                        />
                    </div>
                    <div>
                        <Input type={'number'}
                               name={'month'}
                               onChange={handleChange}
                               value={inputMonth}
                               max={12}
                               min={1}
                        />
                    </div>

                    <div>
                        <Input type={'number'}
                               name={'day'}
                               onChange={handleChange}
                               value={inputDay}
                               max={currentDate.currentDay()}
                        />
                    </div>
                    <div>
                        <button className={'btn mgTop'} onClick={handleSubmitDayReport}>Find</button>
                    </div>


                    <hr/>


                    <div>
                        <div>Total: {totalPriceDay ? totalPriceDay : 0} $
                        </div>
                        <hr/>
                        <div>
                            {filterDayDate.map((value, id) => <div key={id}>
                                <div>Name : {value.name}</div>
                                <div>Count : {value.count}</div>
                                <div>Price : {value.price}$</div>
                            </div>)}
                        </div>
                    </div>


                </div>
                }
            </div>
        );
    }
;

export default Statistics;