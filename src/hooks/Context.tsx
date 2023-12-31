"use client"


import { useRef, useState, createContext, useContext, ReactNode, useEffect } from "react";
import useDebounce from "./useDebounce";

interface GlobalData {
  toggle: boolean;
  isSmallScreen: boolean;
  isExpanded: boolean;
  searchData: string;
  // allExercise: [];
  divRef: any;
  handleChange: (nextChecked: boolean) => void;
  handleSearchClick: (nextChecked: boolean) => void;
  handleClick:()=> void;
  handleSearch:(  e: React.ChangeEvent<HTMLInputElement> )=> void;
}

export const AppContext = createContext<GlobalData | null | any >(null);

interface AppProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: AppProviderProps) => {
  const [toggle, setToggle] = useState(false);
  const [searchData, setSearchData] = useState('');
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // const [allExercise, setAllExercise] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const debouncedSearchValue = useDebounce(searchData, 1000)


  const handleSearchClick = () => {
    setIsExpanded(!isExpanded);  
  };


  const handleClick = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = () => {
    setToggle(!toggle);
  };

  const handleSearch = ( e: React.ChangeEvent<HTMLInputElement>)=>{
    debouncedSearchValue(setSearchData(e.target.value));
  }


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { 
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const globalData: GlobalData = {
    toggle,
    divRef,
    isSmallScreen,
    searchData,
    isExpanded,
    handleChange,
    handleClick,
    handleSearch,
    handleSearchClick,
  };

  return (
    <AppContext.Provider value={globalData}>
      {children}
    </AppContext.Provider>
  );
};

export const UseContextGlobal = () => {
  return useContext(AppContext);
};
