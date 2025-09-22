export const initialState = {
  guessCount: 0,
  letterID: 0,
  status: "INPUT",
  isLocked: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        isLocked: false,
      };
    case "INPUTTED":
      return {
        ...state,
        letterID: state.letterID + 1,
        isLocked: true,
      };

    case "SUBMITTED":
      return {
        ...state,
        guessCount: state.guessCount + 1,
        isLocked: true,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
