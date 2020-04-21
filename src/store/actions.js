import { authenticate } from "@/api";

export default {
  login: (context, formData) => {
      return authenticate(formData)
        .then(response => context.commit("SET_JWT_TOKEN", response.data.token))
        .catch(error => console.log(error))
      // return authenticate(formData)
      //   .then(response => context.commit('setJwtToken', response.data.token))
  },
};
