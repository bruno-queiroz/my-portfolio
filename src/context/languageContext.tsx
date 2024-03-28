import { ReactNode, createContext, useContext, useState } from "react";

const LanguageContextProvider = createContext(
  {} as [number, React.Dispatch<React.SetStateAction<number>>]
);

export const useLanguage = () => useContext(LanguageContextProvider);

export const LanguageContext = ({ children }: { children: ReactNode }) => {
  const [languageIndex, setLanguageIndex] = useState(0);
  return (
    <LanguageContextProvider.Provider value={[languageIndex, setLanguageIndex]}>
      {children}
    </LanguageContextProvider.Provider>
  );
};
