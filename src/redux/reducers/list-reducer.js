import {ADD_ITEM, ADD_CATEGORY, CLEAR_ALL_CATEGORY, PURCHASE} from '../action-types';
import {todayDate} from "../../utilits/TodayDate";


const initialState = {
    categoriesList: [{name: 'wtf', price: 22.50, count: 55}],
    statisticsList: []
}

const categoryListReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_ITEM: {
            return
        }

        case ADD_CATEGORY: {
            return {...state, categoriesList: [...state.categoriesList, action.payload]};

        }

        case PURCHASE: {//purchase
            return
        }


        case CLEAR_ALL_CATEGORY: {
            return
        }


        default: {
            return state;
        }
    }
}

export default categoryListReducer;
