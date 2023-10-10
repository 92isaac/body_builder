"use client"


import { useRef, useState, createContext, useContext, ReactNode, useEffect } from "react";

interface GlobalData {
  toggle: boolean;
  isSmallScreen: boolean;
  searchData: string;
  divRef: any;
  handleChange: (nextChecked: boolean) => void;
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



  const handleClick = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = () => {
    setToggle(!toggle);
  };

  const handleSearch = ( e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchData(e.target.value);
  }


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // Adjust the threshold as needed
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
    handleChange,
    handleClick,
    handleSearch,
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
