import { httpAuthorized, httpPostTokenUpdate } from "../utils";

export const getUserInfo = () => {
  return (dispatch) => {
    httpAuthorized("rest/account/get-user/")
      .then((userInfo) => {
        dispatch(setUserInfo(userInfo));
      })
      .catch((data) => {
        console.log(data);
        if (data.message === "Token is invalid") {
          httpPostTokenUpdate("rest/account/update/").then(() =>
            getUserInfo()
          );
        }
      });
  };
};

export const setUserInfo = (userInfo) => ({
  type: "SET_USER_INFO",
  userInfo,
});

export const userLogout = () => {
  return (dispatch) => {
    dispatch(setUserLogout({}));
  };
};

export const setUserLogout = (userInfo) => ({
  type: "USER_LOGOUT",
  userInfo: userInfo,
});
