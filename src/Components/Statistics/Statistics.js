import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {currentDate} from "../../utilits/CurrentDay";
import Input from "../UI/Input";

const Statistics = () => {


    const [isDailyOpen, setIsDailyOpen] = useState(false)
    const [isMonthOpen, setIsMonthOpen] = useState(false)


    const [filterDate, setFilterDate] = useState([])
    const [filterDayDate, setFilterDayDate] = useState([])
    const [inputYear, setInputYear] = useState(currentDate.currentGetFullYear())
    const [inputMonth, setInputMonth] = useState(currentDate.currentMonth())
    const [inputDay, setInputDay] = useState(currentDate.currentDay())



    const statisticsList = useSelector(({categoriesListReducer}) => categoriesListReducer.statisticsList);



    const handleOpenReportPerDaily = () => {
        setIsDailyOpen(!isDailyOpen)
    }
    const handleOpenReportPerMonth = () => {
        setIsMonthOpen(!isMonthOpen)
    }


    const handleChange = (e) => {
        console.log(e.target.name)
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


    const handleSubmitMonthReport = () => {
        const choosenData = `${inputYear}-${inputMonth.length === 1 ? '0' + inputMonth : inputMonth}`;
        console.log(choosenData)
        console.log(statisticsList[0].date.slice(0, 7));
        const filter = statisticsList.filter(date => date.date.slice(0, 7) === choosenData)
            .sort((a, b) => a.name > b.name ? 1 : -1);
        console.log(filter)
        setFilterDate(filter);
    }


    const handleSubmitDayReport = (e) => {
        const choosenData = `${inputYear}-${inputMonth.length === 1 ? '0' + inputMonth : inputMonth}-${inputDay}`;


        let filter = statisticsList.filter(item => {
            let date = new Date(item.date);
            console.log(date)
            console.log(new Date(currentDate.getAllDataDate()))
            return date >= (new Date(choosenData)) && date <= (new Date(currentDate.getAllDataDate()));
        })
            .sort((a, b) => a.name > b.name ? 1 : -1);

        setFilterDayDate(filter);
    }


    let totalPrice = filterDate.length > 0 && filterDate.reduce((acc, value) => {
        return acc + (value.price * value.count)
    }, 0)


    let totalPriceDay = filterDayDate.length > 0 && filterDayDate.reduce((acc, value) => {
        return acc + (value.price * value.count)
    }, 0)


    return (
        <div>

            <button onClick={handleOpenReportPerDaily}>daily report</button>
            <button onClick={handleOpenReportPerMonth}>monthly report</button>

            {isMonthOpen &&

            <div>
                <div>
                    <span>Year</span>
                    <Input
                        name={'year'}
                        type={'number'}
                        onChange={handleChange}
                        value={inputYear}
                        max={currentDate.currentGetFullYear()}
                    />
                </div>
                <div>
                    <span>Month</span>
                    <Input type={'number'}
                           name={'month'}
                           onChange={handleChange}
                           value={inputMonth}
                           max={12}
                           min={1}
                    />
                    <button onClick={handleSubmitMonthReport}>Find</button>
                </div>

                <div>
                    <div>Total: {totalPrice}$
                    </div>
                </div>


                <div>
                    {filterDate.map((value) => <div key={value.id}>{value.name} - {value.count} - {value.price}$</div>)}

                </div>
            </div>


            }


            {isDailyOpen &&

            <div>
                <div>
                    <span>Year</span>
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
                    <button onClick={handleSubmitDayReport}>Find</button>
                </div>


                <hr/>



                <div >
                    <div >Total: {totalPriceDay}$
                    </div>
                    <hr/>
                    <div>
                        <b>
                            <div >
                                <div>Name</div>
                                <div>number of purchases</div>
                                <div>Price $</div>
                            </div>
                        </b>
                        {filterDayDate.map((value) => <div key={value.id}>
                            <div>{value.name}</div>
                            <div>{value.count}</div>
                            <div>{value.price}$</div>
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