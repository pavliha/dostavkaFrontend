import { ADD_FORM_ITEM, REMOVE_FORM_ITEM } from '../actions/createCargo.action'

const initialState = {
  badges: [
    { title: 'название' },
    { from: 'откуда' },
    { to: 'куда' },
    { time: 'время' },
    { date_from: 'дата отправки' },
    { dimensions: 'размеры' },
    { pictures: 'фото' },
    { weight: 'вес' },
    { date_to: 'дата доставки' },
    { volume: 'обьём' },
    { description: 'описание' },
    { transport_type: 'тип транспорта' },
    { payment: 'оплата' },
  ],
  required: ['title', 'from', 'to'],
  selected: ['title', 'from', 'to'],
}

const addCargo = (state = initialState, { type, payload }) => {
  switch (type) {

    default: {
      return state
    }
  }
}

export default addCargo
