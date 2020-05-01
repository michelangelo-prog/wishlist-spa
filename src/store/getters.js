import { isValidJwt } from "@/utils";

export default {
  isAuthenticated: state => {
    return isValidJwt(state.jwt);
  },
  getAuthHeaders: state => {
    return {
      Authorization: "Bearer " + state.jwt
    };
  }
};
