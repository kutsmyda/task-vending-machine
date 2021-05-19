import React from 'react';
import Greeting from "../../Greeting/Greeting";
import CategoriesList from "../../CategoryList/CategoriesList";
import {useSelector} from "react-redux";
import EmptyList from "../../EmptyList/EmptyList";

const CategoryList = () => {
    const categoriesList = useSelector(({categoriesListReducer}) => categoriesListReducer.categoriesList);


    return (
        <div>
            <Greeting/>
            {categoriesList.length > 0
                ? <CategoriesList/>
                : <EmptyList/>
            }
            hello from categorylist
        </div>
    );
};

export default CategoryList;