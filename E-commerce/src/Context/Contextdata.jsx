import { createContext,useState } from "react";

 export let ProductContext = createContext();

 export let ContextProvider = ({ children }) => {
  const [carddata, setcarddata] = useState({})

  return (
    <ProductContext.Provider value= {{carddata,setcarddata}} >
             {children}
    </ProductContext.Provider>
  )
};
