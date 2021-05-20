import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {currentDate} from "../../utilits/CurrentDay";
import Input from "../UI/Input";

const Statistics = () => {


    const [isDailyOpen, setIsDailyOpen] = useState(false)
    const [isMonthOpen, setIsMonthOpen] = useState(false)


    ////////////////DISCOVERY////////////////////////
    const [filterDate, setFilterDate] = useState([])
    const [inputYear, setInputYear] = useState(currentDate.currentGetFullYear())
    const [inputMonth, setInputMonth] = useState(currentDate.currentMonth())
    const [inputDay, setInputDay] = useState(currentDate.currentDay())


    console.log(filterDate)
    /////////////////////////////////////////////////


    const statisticsList = useSelector(({categoriesListReducer}) => categoriesListReducer.statisticsList);
    console.log(statisticsList)

//////////////////BUTTON//////////////////////////

    const handleOpenReportPerDaily = () => {
        setIsDailyOpen(!isDailyOpen)
    }
    const handleOpenReportPerMonth = () => {
        setIsMonthOpen(!isMonthOpen)
    }


    ///////////////////////WTF!!!!!!!!!!//////////////////////////////////////

    // const onFormSubmitMonthReport = (e) => {
    //     e.preventDefault();
    //
    //     const chosenData = `${e.target[0].value}-${e.target[1].value.length === 1 ? '0' + e.target[1].value : e.target[1].value}`;
    //     const filter = statisticsList.filter(date => date.date.slice(0, 7) === chosenData)
    //         .sort((a, b) => a.name > b.name ? 1 : -1);
    //     setFilterDate(filter);
    // }
    //
    // const onFormSubmitDayReport = (e) => {
    //     e.preventDefault();
    //     const chosenData = `${e.target[0].value}-${e.target[1].value.length === 1 ? '0' + e.target[1].value : e.target[1].value}-${e.target[2].value}`;
    //
    //     let filter = statisticsList.filter(item => {
    //         let date = new Date(item.date);
    //         return date >= (new Date(chosenData)) && date <= (new Date(currentDay));
    //     })
    //         .sort((a, b) => a.name > b.name ? 1 : -1);
    //
    //     setFilterDayDate(filter);
    // }


    ////////////////////////////////////////////////////////////////////////////////////
    const handleChange = (e) => {
        console.log(e.target.name)
        if (e.target.name === 'year') {
            setInputYear(e.target.value)
        }
        if (e.target.name === 'month') {
            setInputMonth(e.target.value)
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


    let totalPrice = filterDate.length > 0 && filterDate.reduce((acc, value) => {
        return acc + (value.price * value.count)
    }, 0)


    return (
        <div>

            <button onClick={handleOpenReportPerDaily}>daily report</button>
            <button onClick={handleOpenReportPerMonth}>monthly report</button>

            {isMonthOpen  &&

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
            </div>
            }










        </div>
    );
};

export default Statistics;