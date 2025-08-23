import React, { useState, createContext } from "react";
import CompB from "./CompB";

export const UserContext = createContext();

function CompA() {
  const [user, setUser] = useState("UV");

  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <CompB user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default CompA;