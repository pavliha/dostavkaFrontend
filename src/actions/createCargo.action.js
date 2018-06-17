export const ADD_FORM_ITEM = 'ADD_FORM_ITEM'
export const REMOVE_FORM_ITEM = 'REMOVE_FORM_ITEM'

export const add = (item) => ({
  type: ADD_FORM_ITEM,
  payload: item,
})

export const remove = (item) => ({
  type: REMOVE_FORM_ITEM,
  payload: item
})
