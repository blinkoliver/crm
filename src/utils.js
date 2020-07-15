import { hosting } from "../src/constants/urls";
import { _getFingerprint } from "./fingerprint";
import { getUserInfo } from "./actions/getUserInfo";

export const httpGet = (path) => {
  return fetch(`${hosting}/${path}`).then(awaitForJsonResponse);
};

export const httpAuthorized = (path) => {
  return fetch(`${hosting}/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("access_token"),
    },
  })
    .then(awaitForJsonResponse)
    .then((data) => {
      return data;
    });
};

export const httpPostTokenUpdate = async (path) => {
  const fingerprint = await _getFingerprint();
  const data = {
    fingerprint: fingerprint,
  };
  return (
    fetch(`${hosting}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(awaitForJsonResponse)
      .then((data) => {
        console.log(data);
        localStorage.setItem("access_token", data.token);
      })
      // .then(httpAuthorized("rest/account/get-user/"))
      .then(getUserInfo())
      .catch((error) => {
        localStorage.setItem("access_token", " ");
        console.log(error);
      })
  );
};

export const httpPost = (path, params) => {
  return fetch(`${hosting}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("access_token"),
    },
    body: JSON.stringify(params),
  }).then(awaitForJsonResponse);
};

const awaitForJsonResponse = async (res) => {
  const jsonRes = await res.json();

  if (res.status >= 400) {
    throw jsonRes;
  } else {
    return jsonRes;
  }
};
