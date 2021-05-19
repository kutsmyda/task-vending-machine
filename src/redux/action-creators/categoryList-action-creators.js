import {ADD_CATEGORY, ADD_ITEM, PURCHASE, CLEAR_ALL_CATEGORY} from "../action-types";

export const addCategory = (payload) => ({type: ADD_CATEGORY, payload});
export const addItem = (payload) => ({type: ADD_ITEM, payload});
export const purchaseItem = (payload) => ({type: PURCHASE, payload});
export const clearCategory = (payload) => ({type: CLEAR_ALL_CATEGORY, payload});
