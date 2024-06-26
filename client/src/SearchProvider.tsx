import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface SearchContextProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
  mode: string; // Add mode as a prop
}

export const SearchProvider = ({ children, mode }: SearchProviderProps) => {
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    setSearchInput("");
  }, [mode]);

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
