import React, { createContext, useState } from "react";
export const createServiceContext = createContext();
const ContextShare = ({ children }) => {
  const [addedService, setAddedService] = useState(false);
  return (
    <>
      <createServiceContext.Provider value={{ addedService, setAddedService }}>
        {children}
      </createServiceContext.Provider>
    </>
  );
};

export default ContextShare;
