import React, { createContext, useState } from "react";
interface SidebarContextType {
  isOpen: boolean;
  SetIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const defaultValue: SidebarContextType = {
  isOpen: false,
  SetIsOpen: () => {},
};
export const SidebarContext = createContext<SidebarContextType>(defaultValue);
const SidebarProvider: React.FC<any> = ({ children }) => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, SetIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
