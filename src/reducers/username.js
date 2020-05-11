const initialState = {
  username: [],
};
const username = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};
export default username;
