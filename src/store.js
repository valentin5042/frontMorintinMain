// store.js
import { createStore } from 'redux';

const initialState = {
  productosSeleccionados: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AGREGAR_A_LISTA':
      return {
        ...state,
        productosSeleccionados: [...state.productosSeleccionados, action.producto],
      };
    // Agrega más casos según sea necesario

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
