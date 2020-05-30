import { hosting } from "../src/constants/urls";

export const httpGet = (path) => {
  return fetch(`${hosting}/${path}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'authorization': localStorage.getItem("access_token")
    }
  }).then(awaitForJsonResponse);
};

export const httpPost = (path, params) => {
  return fetch(`${hosting}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
