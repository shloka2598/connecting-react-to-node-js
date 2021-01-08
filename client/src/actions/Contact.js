import fetch from "isomorphic-fetch";

const API = process.env.REACT_APP_API_URL;

export const contact = (data) => {
  return fetch(`${API}/contact`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
