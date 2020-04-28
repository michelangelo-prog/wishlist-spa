import { authenticate } from "@/api";
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
  }
};
