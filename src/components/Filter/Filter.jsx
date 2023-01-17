

export const Filter = ({onChange})=>{
   

    return <div>
                <label>
                    Find contact by name
                    <input onChange={onChange} type="text" 
                    name="filter"/>
                </label>


            </div>
}