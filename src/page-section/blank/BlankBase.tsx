/** Import UI components */
/** Import Component Icons */
/** Import Next Components */
/** Import External Library Component, Constants and Functions */
/** Import supplementary services, utilities, context and hooks */
import {TBlankContextType} from "@/src/@types/blank";
import { useBlankContext } from "@/src/page-section/blank/BlankContext"

/** Import Customized Components */

/** Component Props Declaration */
/** Global Scope Variable and Constant Declarations */


function BlankBase() {
   const {title} = useBlankContext() as TBlankContextType
   return (
       <div className={'h-full min-h-dvh max-w-7xl mx-auto  '}>
          {title}
       </div>
   )
}

export default BlankBase;