import { httpGet } from "../utils";

export const getUserInfo = () => {
  return (dispatch) => {
    httpGet("rest/account/get-user").then((userInfo) =>
      dispatch(setUserInfo(userInfo))
    );
  };
};
export const setUserInfo = (userInfo) => ({
  type: "SET_USER_INFO",
  userInfo
});
