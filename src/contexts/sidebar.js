import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();

const SidebarContextProvider = props => {
  const [hideSidebar, toggleHideSidebar] = useState(false);
  const [hideMobileSidebar, toggleMobileHideSidebar] = useState(false);
  return (
    <SidebarContext.Provider
      value={{
        hideMobileSidebar,
        toggleMobileHideSidebar,
        hideSidebar,
        toggleHideSidebar,
      }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export const useSidebarProvider = () => {
  return useContext(SidebarContext);
};

export default SidebarContextProvider;
