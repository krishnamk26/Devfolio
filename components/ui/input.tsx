import * as React from "react"
import ShadUiService from "@/src/service/shadUiComponent";
import { cn } from "@/lib/utils"

export interface AdornmentObject {
  type: 'icon' | 'other';
  node: React.ReactNode;
}

export type Adornment = React.ReactNode | AdornmentObject;

interface InputProps extends Omit<React.ComponentProps<"input">, "size"> {
  inputSize?: "sm" | "md" | "lg";
  startAdornment?: Adornment;
  endAdornment?: Adornment;
}

function Input({className, type, inputSize = "md", startAdornment, endAdornment, ...props}: InputProps) {

  return (
    <div className={cn("relative flex w-full items-center", className)}>
      {startAdornment && (
        <div className={cn("absolute left-3 text-muted-foreground")}>
          {ShadUiService.getSizedAdornment(startAdornment, inputSize)}
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        className={ShadUiService.inputClass(inputSize, startAdornment, endAdornment)}
        {...props}
      />
      {endAdornment && (
        <div className={cn("absolute right-3 text-muted-foreground")}>
          {ShadUiService.getSizedAdornment(endAdornment, inputSize)}
        </div>
      )}
    </div>
  )
}

export {Input}
