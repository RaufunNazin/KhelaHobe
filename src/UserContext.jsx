import { createGlobalState } from "react-hooks-global-state";
const userState = {
  isLoggedIn: true,
  jwt: "",
  user: {
    accessToken: "",
    id: null,
    name: "Raufun Nazin Srizon",
    photo: "Raufun Nazin Srizon",
    mail: "gr508585@gmail.com",
    phone: "+880-1682-386618",
    role: "student",
  },
};

const { useGlobalState } = createGlobalState(userState);
export { useGlobalState };