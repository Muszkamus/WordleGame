export const initialState = {
  guessCount: 0,
  word: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "SUBMITTED":
      return {
        ...state,
        guessCount: state.guessCount + 1,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
