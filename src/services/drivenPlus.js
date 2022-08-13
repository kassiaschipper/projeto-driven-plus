import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v4/driven-plus";

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);
  return promise;
}

function getListPlans() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/subscriptions/memberships`, config);
  return promise;
}

function getPlan(planId) {
  const config = createHeaders();
  const promise = axios.get(
    `${BASE_URL}/subscriptions/memberships/${planId}`,
    config
  );
  return promise;
}

function postSubscriptions() {
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/subscriptions`, config);
  return promise;
}

function deletePlan() {
  const config = createHeaders();
  const promise = axios.delete(`${BASE_URL}/subscriptions`, config);
  return promise;
}

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("drivenPlus"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  return config;
}

export {
  postSignUp,
  postLogin,
  getListPlans,
  getPlan,
  postSubscriptions,
  deletePlan,
  createHeaders,
};
