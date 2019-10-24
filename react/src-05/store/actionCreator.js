import { CHANGE_INPUT_VALUE, CHANGE_ITEM_VALUE, DELETE_ITEM_VALUE } from './actionTypes'
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = () => ({
    type: CHANGE_ITEM_VALUE
})
export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM_VALUE,
    index
})