import { useMediaQuery } from '@mui/material';
import React, { PropsWithChildren, useEffect } from 'react';

type SharedContext = {
  sidebarIsOpen: boolean;
  toggleSidebar: () => void;

  navbarIsOpen: boolean;
  toggleNavbar: () => void;
};

export const AppContext = React.createContext({} as SharedContext);

const AppContextProvider = ({ children }: PropsWithChildren) => {
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(isDesktop);
  const [navbarIsOpen, setNavbarIsOpen] = React.useState(isDesktop);

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  const toggleNavbar = () => {
    setNavbarIsOpen(!navbarIsOpen);
  };

  useEffect(() => {
    setSidebarIsOpen(isDesktop);
    setNavbarIsOpen(isDesktop);
  }, [isDesktop]);

  return (
    <AppContext.Provider
      value={{ sidebarIsOpen, toggleSidebar, navbarIsOpen, toggleNavbar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
