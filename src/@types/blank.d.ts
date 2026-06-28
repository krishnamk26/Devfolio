import React from "react";

type TBlankContextType = {
   title?: string | null | undefined;
   setTitle?:React.Dispatch<React.SetStateAction<string>>
};