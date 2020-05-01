import { authenticate, register, logout } from "@/api";
import { EventBus } from "@/utils";

export default {
  login: (context, formData) => {
    return authenticate(formData)
      .then(response => {
        context.commit("SET_JWT_TOKEN", response.data.token);
        EventBus.$emit("successAuthentication");
      })
      .catch(error => {
        EventBus.$emit("failedAuthentication", error);
      });
  },
  register: (context, userData) => {
    return register(userData)
      .then(response => {
        EventBus.$emit("successRegistration", response.data.message);
      })
      .catch(error => {
        EventBus.$emit("failedRegistration", error);
      });
  },
  logout: ({ commit, dispatch, getters }) => {
    const headers = getters.getAuthHeaders;
    return logout(headers)
      .then(() => {
        commit("SET_JWT_TOKEN", "");
        EventBus.$emit("successLogout");
      })
      .catch(error => {
        dispatch("showErrorInConsole", error);
      });
  },
  showErrorInConsole: (context, error) => {
    console.log(error);
  }
};
