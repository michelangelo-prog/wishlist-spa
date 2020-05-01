import { authenticate, register } from "@/api";
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
  }
};
