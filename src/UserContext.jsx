import { createGlobalState } from "react-hooks-global-state";
const userState = {
  isLoggedIn: false,
  user: {
    name: "",
    mail: "",
    phone: "",
    role: "",
  },
  photo: "",
};
const { useGlobalState } = createGlobalState(userState);
export { useGlobalState };
