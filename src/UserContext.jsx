import { createGlobalState } from "react-hooks-global-state";
const userState = {
  isLoggedIn: false,
  jwt: "",
  user: {
    accessToken: "",
    id: null,
    name: "Raufun Nazin Srizon",
    photo:
      "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/329016851_1126132004719742_309882006475339599_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEgCZrToptI2f1PWX1K9JB1jupAhNR8NY-O6kCE1Hw1j2nkyLak7IUMemig5yUAP-lW4MgimqaPxHMLW30JRS1v&_nc_ohc=4dhUlaRHld4AX_GenX-&_nc_ht=scontent.fdac31-1.fna&oh=00_AfCpaOu-tWaUmMRHEUZx1vsUcYl7-04bRVZFtlIm5vhy-Q&oe=6465453E",
    mail: "gr508585@gmail.com",
    phone: "+880-1682-386618",
    role: "student",
  },
};

const { useGlobalState } = createGlobalState(userState);
export { useGlobalState };
