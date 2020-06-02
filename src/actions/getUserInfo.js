import { httpAuthorized } from "../utils";

export const getUserInfo = () => {
  return (dispatch) => {
    httpAuthorized("rest/account/get-user/").then((userInfo) => {
      dispatch(setUserInfo(userInfo));
      console.log(userInfo);
    });
  };
};
export const setUserInfo = (userInfo) => ({
  type: "SET_USER_INFO",
  userInfo,
});
