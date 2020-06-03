const initialState = {
  userInfo: {},
};
const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
};
export default userInfo;
