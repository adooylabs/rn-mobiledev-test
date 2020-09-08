import * as types from '../constants/action.types';

const initialState = {
  error: null,
  notifications: [],
  drawer_open: false,
  dialog_content: {
    title: '',
    message: ''
  },
  dialog_visible: false,
  dialog_callback: null
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return {
        ...state,
        error: null,
        isSubmitting: false,
        dialog_callback: null,
        dialog_content: initialState.dialog_content
      };
    case types.DIALOG_OPEN:
      return {
        ...state,
        dialog_visible: true,
        dialog_content: {
          title: action.payload.title,
          message: action.payload.message
        },
        dialog_callback: action.payload.callback
      };
    case types.DIALOG_CLOSE:
      return {
        ...state,
        dialog_visible: false,
        dialog_content: initialState.dialog_content,
        dialog_callback: null
      };
    case types.DRAWER_TOGGLE:
      return {
        ...state,
        drawer_open: !state.drawer_open
      };
    default:
      return state;
  }
};

export default appReducer;

