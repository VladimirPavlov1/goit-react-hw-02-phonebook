import React from "react"

export const Filter =({onChange,value})=>{
   
      
 return(
         <div>
            <label>
                Find contact by name
                <input onChange={onChange} value={value} type="text" 
                name="filter"/>
            </label>


        </div>)
   
}

