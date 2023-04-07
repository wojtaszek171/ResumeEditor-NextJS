import { PropsWithChildren, createContext, useContext } from "react";

const AppContext = createContext({});

export function CVWrapper({ children }: PropsWithChildren) {
  const sharedState = {
    cvId: null,
    lang: "en-us",
    
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useCVContext() {
  return useContext(AppContext);
}
