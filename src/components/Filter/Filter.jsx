import React from "react"
import { Input, Label } from "./Filter.styled"

export const Filter =({onChange,value})=>{
   
      
 return(
         <div>
            <Label>
                Find contact by name
                <Input onChange={onChange} value={value} type="text" 
                name="filter"/>
            </Label>


        </div>)
   
}

