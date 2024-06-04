import { createStore } from 'redux';

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);
console.log('initial state: ', store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log('updated state: ', latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
