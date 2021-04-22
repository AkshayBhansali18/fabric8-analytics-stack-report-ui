import { useReducer } from 'react';

const reducer = (state: any, action: { type: any; data: any }) => {
  switch (action.type) {
    case 'APIData':
      return {
        ...state,
        APIData: action.data,
      };
    default: {
      return state;
    }
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    APIData: {},
  });
  return { globalState, globalDispatch };
};

export default useGlobalState;
