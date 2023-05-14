import { createGlobalState } from "react-hooks-global-state";
const userState = {
  isLoggedIn: false,
  jwt: "",
  user: {
    accessToken: "",
    id: null,
    name: "",
    photo: "",
    mail: "",
    phone: "",
    role: "student",
  },
};

const { useGlobalState } = createGlobalState(userState);
export { useGlobalState };
