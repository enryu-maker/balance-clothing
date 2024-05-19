import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialState = {
  access: null,
  cart: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        access: action.payload.access
      };
    case 'ADD_TO_CART':
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        var d = state.cart.map((item) =>
          item.id === existingProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        localStorage.setItem('cart', JSON.stringify(d));
        toast.success('Added to Cart', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        return {
          ...state,
          cart: d,
        };
      } else {
        var d = [...state.cart, { ...action.payload, quantity: 1 }];
        localStorage.setItem('cart', JSON.stringify(d));
        toast.success('Added to Cart', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        return {
          ...state,
          cart: d,
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case 'CART':
      return {
        ...state,
        cart: action.payload,
      };
    case 'EMPTY_CART':
      return {
        ...state,
        cart: action.payload,
      };
    case 'CHANGE_QUANTITY':
      return {
        ...state,
        cart: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        access: action.payload.access,
      };
    default:
      return state;
  }
};
