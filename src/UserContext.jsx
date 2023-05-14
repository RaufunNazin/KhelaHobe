import { createGlobalState } from "react-hooks-global-state";
const userState = {
  isLoggedIn: false,
  user: {
    name: "",
    photo: "",
    mail: "",
    phone: "",
  },
};
const { useGlobalState } = createGlobalState(userState);
export { useGlobalState };
