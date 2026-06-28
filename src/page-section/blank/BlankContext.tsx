import React, {createContext, ReactNode, useContext, useState} from "react";
import {TBlankContextType} from "@/src/@types/blank";


/** Import External Library Component, Constants and Functions */
/** Import supplementary services, utilities, contexts and hooks */
/** Component Input Props Declaration */

type ProviderProps = {
   children?: ReactNode,
   value?: object
};
/** Global Scope Variable and Constant Declarations */
const BlankContext = createContext<TBlankContextType | undefined>(undefined);
const BlankProvider = ({children, value = {}}: ProviderProps) => {

   const [title, setTitle] = useState('Blank Root Component');

   return (
       <BlankContext.Provider value={{
          ...value,
          title,
          setTitle
       }}>
          {children}
       </BlankContext.Provider>
   );
};

function useBlankContext  () {
   try {
      return useContext(BlankContext);
   } catch (error) {
      // Handle error here, such as logging or displaying an error message
      console.error('Error using ProductFormContext:', error);
      // Return a default value or fallback behavior if necessary
      return null;
   }
}

export {BlankContext,BlankProvider,useBlankContext};

