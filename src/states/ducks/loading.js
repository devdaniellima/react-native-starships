// Action Types

export const Types = {
  SHOW_LOADING: 'SHOW_LOADING',
  HIDE_LOADING: 'HIDE_LOADING',
};

// Reducer

const initialState = {
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SHOW_LOADING:
      return {
        isLoading: true,
      };
    case Types.HIDE_LOADING:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
}

// Action Creators

export function showLoading() {
  return {
    type: Types.SHOW_LOADING,
  };
}

export function hideLoading() {
  return {
    type: Types.HIDE_LOADING,
  };
}
