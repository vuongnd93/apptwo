// Defines the action types, the reducer function, and actionCreators helper functions to create actions.
// Note that we also moved initialState into this file
// (redux allows you to either pass it into your store on creation, or return it from your reducer).

// The types of actions that you can dispatch to modify the state of the store

export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const TOGGLE_ONE_TASK = 'TOGGLE_ONE_TASK';
export const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
  }
  
  // Helper functions to dispatch actions, optionally with payloads
  export const actionCreators = {
    add: (item) => {
      return {type: types.ADD, payload: item}
    },
    remove: (index) => {
      return {type: types.REMOVE, payload: index}
    }
  }
  
  // Initial state of the store
  const initialState = {
    todos: ["Click to remove",
            "Learn React Native",
            "Write Code",
            "Ship App"],
  }
  
  // Function to handle actions and update the state of the store.
  // Notes:
  // - The reducer must return a new state object. It must never modify
  //   the state object. State objects should be treated as immutable.
  // - We set \`state\` to our \`initialState\` by default. Redux will
  //   call reducer() with no state on startup, and we are expected to
  //   return the initial state of the app in this case.
  // const defaultState = {value:0}
  // export const reducer = (state =defaultState, action) => {
  //    if (action.type==='UP') return {value:state.value+1};
  //    if (action.type==='DOWN') return {value:state.value-1};
  
  //   return state;
  // }

  export  const reducer = (state, action) => {
    if (typeof state === 'undefined') {
      return 0;
    }
  
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }
  
  
  // export const reducer = (state = initialState, action) => {
  //   const {todos} = state
  //   const {type, payload} = action
  
  //   switch (type) {
  //     case types.ADD: {
  //       return {
  //         ...state,
  //         todos: [payload, ...todos],
  //       }
  //     }
  //     case types.REMOVE: {
  //       return {
  //         ...state,
  //         todos: todos.filter((todo, i) => i !== payload),
  //       }
  //     }
  //   }
  
  //   return state
  // }