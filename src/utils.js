import { hosting } from "../src/constants/urls";

export const Fetch = (url, params) => {
  return fetch(url).then((response) => {
    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }
    return response.json();
  });
};

export const httpGet = (path) => {
  return Fetch(`${hosting}/${path}`).then(awaitForJsonResponse);
};

export const httpPost = (path, params) => {
  return Fetch(`${hosting}/${path}`, {
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
