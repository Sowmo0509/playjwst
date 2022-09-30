import "../styles/globals.css";
import { useState } from "react";
import { UserContext } from "../helpers/UserContext";

function MyApp({ Component, pageProps }) {
  const [userState, setUserState] = useState({ username: "", point: 0 });
  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
