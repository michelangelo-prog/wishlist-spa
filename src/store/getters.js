import { isValidJwt } from "@/utils";

export default {
  isAuthenticated: (state) => {
    return isValidJwt(state.jwt);
  },
};
