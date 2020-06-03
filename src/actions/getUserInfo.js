import { httpAuthorized, httpPostTokenUpdate } from "../utils";

export const getUserInfo = () => {
  return (dispatch) => {
    httpAuthorized("rest/account/get-user/")
      .then((userInfo) => {
        dispatch(setUserInfo(userInfo));
        console.log(userInfo);
      })
      .catch((data) => {
        console.log(data);
        if (data.message === "Token is invalid")
          httpPostTokenUpdate("rest/account/update/");
      });
  };
};
export const setUserInfo = (userInfo) => ({
  type: "SET_USER_INFO",
  userInfo,
});
