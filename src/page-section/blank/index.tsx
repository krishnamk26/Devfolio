'use client'
import React from "react";
import BlankBase from "@/src/page-section/blank/BlankBase"
import { BlankProvider } from "@/src/page-section/blank/BlankContext"




export default function Blank() {
   return (
       <BlankProvider>
          <BlankBase/>
       </BlankProvider>
   )
}