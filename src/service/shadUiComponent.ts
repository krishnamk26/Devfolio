import {cva} from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils"
import { Adornment , AdornmentObject} from "@/components/ui/input"


const textAreaSizeClasses = {
   sm: "min-h-14 px-3 py-2.5 text-xs",
   md: "min-h-20 px-3.5 py-4 text-sm",
   lg: "min-h-26 px-3.5 py-4 text-base",
}

const sizeClasses = {
   sm: "h-[37.25px] text-xs px-3 py-2.5",
   md: "h-[51.69px] text-sm px-3.5 py-4",
   lg: "h-[56px] text-base px-3.5 py-4",
}

const iconClasses = {
   sm: "h-5 w-5",
   md: "h-5 w-5",
   lg: "h-6 w-6",
}

const alertVariants = cva(
    "relative w-full rounded-md border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
    {
       variants: {
          variant: {
             default: "bg-card text-card-foreground",
             // Contained variants (solid background)
             destructive: "bg-destructive text-background border-destructive [&>svg]:text-background *:data-[slot=alert-description]:text-background",
             primary: "bg-primary text-background border-primary [&>svg]:text-background *:data-[slot=alert-description]:text-background",
             success: "bg-success text-background border-success [&>svg]:text-background *:data-[slot=alert-description]:text-background",
             info: "bg-info text-background border-info [&>svg]:text-background *:data-[slot=alert-description]:text-background",
             warning: "bg-warning text-background border-warning [&>svg]:text-background *:data-[slot=alert-description]:text-background",
             // Outlined variants
             'destructive-outlined': "border-destructive text-destructive  [&>svg]:text-destructive",
             'primary-outlined': "border-primary text-primary  [&>svg]:text-primary",
             'success-outlined': "border-success text-success [&>svg]:text-success",
             'info-outlined': "border-info text-info [&>svg]:text-info",
             'warning-outlined': "border-warning text-warning [&>svg]:text-warning",
             // Filled variants (subtle background)
             'destructive-filled': "bg-destructive/10 text-destructive border-destructive/20 [&>svg]:text-destructive",
             'primary-filled': "bg-primary/10 text-primary border-primary/20 [&>svg]:text-primary",
             'success-filled': "bg-success/10 text-success border-success/20 [&>svg]:text-success",
             'info-filled': "bg-info/10 text-info border-info/20 [&>svg]:text-info",
             'warning-filled': "bg-warning/10 text-warning border-warning/20 [&>svg]:text-warning",
          },
       },
       defaultVariants: {
          variant: "default",
       },
    }
)
const buttonVariants = cva(
    "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
       variants: {
          variant: {
             // Default variants
             default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
             destructive: "bg-destructive text-background shadow-xs hover:bg-destructive/90",
             outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
             secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
             ghost: "hover:bg-accent hover:text-accent-foreground",
             link: "text-primary underline-offset-4 hover:underline",

             // Contained variants (solid background)
             primary: "bg-primary text-background shadow-xs hover:bg-primary/90",
             "primary-black": "bg-foreground text-background shadow-xs hover:bg-foreground/90",
             success: "bg-success text-background shadow-xs hover:bg-success/90",
             info: "bg-info text-background shadow-xs hover:bg-info/90",
             warning: "bg-warning text-background shadow-xs hover:bg-warning/90",

             // Outlined variants
             "primary-outlined": "border border-primary text-primary bg-transparent  hover:bg-primary/10",
             "primary-black-outlined": "border border-foreground text-foreground bg-transparent  hover:bg-foreground/10",
             "destructive-outlined": "border border-destructive text-destructive bg-transparent hover:bg-destructive/10",
             "success-outlined": "border border-success text-success bg-transparent hover:bg-success/10",
             "info-outlined": "border border-info text-info bg-transparent hover:bg-info/10",
             "warning-outlined": "border border-warning text-warning bg-transparent hover:bg-warning/10",

             // Filled variants (subtle background)
             "primary-filled": "bg-primary/20 text-primary border border-primary/20  hover:bg-primary/30",
             "primary-black-filled": "bg-foreground/20 text-foreground border border-foreground/20  hover:bg-foreground/30",
             "destructive-filled": "bg-destructive/10 text-destructive border border-destructive/20  hover:bg-destructive/20",
             "success-filled": "bg-success/10 text-success border  border-success/20 hover:bg-success/20",
             "info-filled": "bg-info/10 text-info border border-info/20 hover:bg-info/20",
             "warning-filled": "bg-warning/10 border text-warning border-warning/20 hover:bg-warning/20",
          },
          size: {
             default: "h-9 px-4 py-2 has-[>svg]:px-3",
             sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
             lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
             icon: "size-9",
          },
       },
       defaultVariants: {
          variant: "default",
          size: "default",
       },
    }
)

/*const inputClass = (inputSize: "sm" | "md" | "lg", startAdornment: React.ReactNode, endAdornment: React.ReactNode) => (
    cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-background text-base transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        sizeClasses[inputSize],
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[0px]",
        "hover:border hover:border-primary",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        startAdornment && "pl-9",
        endAdornment && "pr-9"
    )
)*/
const inputClass = (inputSize: "sm" | "md" | "lg", startAdornment?: Adornment, endAdornment?: Adornment) => {
   const hasStartAdornment = !!startAdornment;
   const hasEndAdornment = !!endAdornment;

   return cn(
       "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-background text-base transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
       sizeClasses[inputSize],
       "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[0px]",
       "hover:border hover:border-primary",
       "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
       hasStartAdornment && "pl-9",
       hasEndAdornment && "pr-9"
   );
};

const isAdornmentObject = (adornment: Adornment): adornment is AdornmentObject => {
   return adornment !== null &&
       adornment !== undefined &&
       typeof adornment === 'object' &&
       'type' in adornment &&
       'node' in adornment;
};
const getSizedAdornment = (adornment: Adornment, inputSize: "sm" | "md" | "lg") => {
   if (isAdornmentObject(adornment)) {
      if (adornment.type === 'icon' && React.isValidElement<{ className?: string }>(adornment.node)) {
         return React.cloneElement(adornment.node, {
            className: cn(
                adornment.node.props.className,
                iconClasses[inputSize]
            ),
         });
      }
      return adornment.node;
   }

   if (React.isValidElement<{ className?: string }>(adornment)) {
      return React.cloneElement(adornment, {
         className: cn(
             adornment.props.className,
             iconClasses[inputSize]
         ),
      });
   }
   return adornment;
};

const ShadUiService = {
   textAreaSizeClasses,
   sizeClasses,
   iconClasses,
   alertVariants,
   buttonVariants,
   inputClass,
   getSizedAdornment
}


export default ShadUiService
