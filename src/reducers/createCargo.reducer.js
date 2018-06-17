import {
  ADD_FORM_ITEM,
  CREATE_CARGO, CREATE_CARGO_FULFILLED,
  CREATE_CARGO_PENDING, CREATE_CARGO_REJECTED,
  REMOVE_FORM_ITEM,
  UPDATE_MAP,
} from '../actions/createCargo.action'

const initialState = {
  badges: [
    { title: 'название' },
    { from: 'откуда' },
    { to: 'куда' },
    { time: 'время' },
    { date_from: 'дата отправки' },
    { dimensions: 'размеры' },
    { weight: 'вес' },
    { date_to: 'дата доставки' },
    { volume: 'обьём' },
    { description: 'описание' },
    { transport_type: 'тип транспорта' },
    { payment: 'оплата' },
  ],
  required: ['title', 'from', 'to'],
  selected: ['title', 'from', 'to'],
  loading: false,
  error: false,
  map: {},
}

const addCargo = (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_FORM_ITEM: {
      const selected = [...state.selected]
      selected.push(payload)
      return {
        ...state,
        selected,
      }
    }

    case REMOVE_FORM_ITEM: {
      const selected = [...state.selected]
      return {
        ...state,
        selected: selected.filter((filter) => filter !== payload),
      }
    }
    case CREATE_CARGO: {
      return {
        ...state,
        map: map
      }
    }

    case CREATE_CARGO_PENDING: {
      return {
        ...state,
        loading: true,
      }

    }

    case CREATE_CARGO_FULFILLED: {
      return {
        ...state,
        response: payload,
      }
    }

    case CREATE_CARGO_REJECTED: {
      return {
        ...state,
        error: payload,
      }
    }

    case UPDATE_MAP: {

      const state = [...state]

      return {
        ...state,
      }
    }

    default: {
      return state
    }
  }
}

export default addCargo
