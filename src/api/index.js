import axios from "axios";

const API_URL = "http://localhost:5002/api/v1";

export function authenticate(data) {
  return axios({
    method: "post",
    url: `${API_URL}/users/login`,
    data: data
  });
}
