import {ADD_ITEM, ADD_CATEGORY, CLEAR_ALL_CATEGORY, PURCHASE} from '../action-types';
import {currentDate} from "../../utilits/CurrentDay";


const initialState = {
    categoriesList: [{id: 2, name: 'wtf', price: 22.50, count: 55}],
    statisticsList: [{
        name: 'YES',
        date: currentDate.getAllDataDate(),
        count: 1,
        price: 200
    }]
}
const categoryListReducer = (state = initialState, action) => {


    switch (action.type) {

        case ADD_ITEM: {
            const newCategories = state.categoriesList.map(category => {
                if (category.name === action.payload.inputSelectName) {
                    category.count = action.payload.inputCount
                }
                return category
            })
            return {...state, categoryList: newCategories}
        }

        case ADD_CATEGORY: {
            return {...state, categoriesList: [...state.categoriesList, action.payload]};

        }

        case PURCHASE: {
            let newStatiscticsList = state.statisticsList
            let newCategoryList = state.categoriesList.map((category) => {
                if (category.name === action.payload.name) {
                    category.count = category.count - 1
                    let findCategory = state.statisticsList.find(
                        (data) => data.date === currentDate.getAllDataDate() && data.name === action.payload.name)

                    if (!!findCategory) {
                        findCategory.count += 1
                    } else {
                        newStatiscticsList = state.statisticsList;
                        newStatiscticsList.push({
                            name: category.name,
                            date: currentDate.getAllDataDate(),
                            count: 1,
                            price: category.price
                        })
                    }


                }
                return category

            })
            return {...state, categoriesList: newCategoryList}
        }


        case CLEAR_ALL_CATEGORY: {
            const newCategoriesList = state.categoriesList.filter(category => category.count > 0);
            return {...state, categoryList: newCategoriesList}
        }


        default: {
            return state;
        }
    }
}

export default categoryListReducer;
