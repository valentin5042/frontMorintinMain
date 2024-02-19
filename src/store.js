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
    case 'ELIMINAR_PRODUCTO':
      const index = state.productosSeleccionados.findIndex(producto => producto === action.producto);
      if (index !== -1) {
        const newProductosSeleccionados = [...state.productosSeleccionados];
        newProductosSeleccionados.splice(index, 1);
        return {
          ...state,
          productosSeleccionados: newProductosSeleccionados,
        };
      }
      return state;
    case 'LIMPIAR_LISTA':
      return {
        ...state,
        productosSeleccionados: [],
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
