// Action Types

export const Types = {
  GET_NEXT_STARSHIPS: 'GET_NEXT_STARSHIPS',
  GET_NEXT_STARSHIPS_SUCCESS: 'GET_NEXT_STARSHIPS_SUCCESS',
};

// Reducer
const initialState = {
  list: [],
  nextPage: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_NEXT_STARSHIPS_SUCCESS:
      return {
        list: action.data.list,
        nextPage: action.data.nextPage,
      };
    default:
      return state;
  }
}

// Action Creators

export function getMoreStarships(page) {
  return {
    type: Types.GET_NEXT_STARSHIPS,
    data: {
      page,
    },
  };
}

export function getMoreStarshipsSuccess(data) {
  return {
    type: Types.GET_NEXT_STARSHIPS_SUCCESS,
    data,
  };
}
