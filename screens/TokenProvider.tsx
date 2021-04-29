import React, { useState } from "react";

const TokenContext = React.createContext({
  token: "",
  setToken: (token: string) => {},
});

function TokenProvider({ children }: any) {
  const [token, setToken] = useState("");
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}
export { TokenContext, TokenProvider };
