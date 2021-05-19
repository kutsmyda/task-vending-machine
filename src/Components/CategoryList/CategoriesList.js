import React from "react";
import CategoriesListItem from "./CategoriesListItem/CategoriesListItem";
import {useDispatch, useSelector} from "react-redux";
import {purchaseItem} from "../../redux/action-creators";
import Preloader from "../Preloader/Preloader";
import EmptyList from "../EmptyList/EmptyList";

const CategoriesList = () => {

    const dispatch = useDispatch();
    const categoriesList = useSelector(({categoriesListReducer}) => categoriesListReducer.categoriesList);


    const handleClickBuy = (category) => {
        dispatch(purchaseItem(category))
    }

    return (
        <div>
            {categoriesList
                    ? categoriesList.map((category, id) => <CategoriesListItem
                        category={category}
                        key={id}
                        handleClickBuy={handleClickBuy}
                    />)
                : <Preloader/>
            }
        </div>
    );
};

export default CategoriesList;


