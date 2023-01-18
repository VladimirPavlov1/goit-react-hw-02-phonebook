import { Component } from "react"

class Filter extends Component{
   
state={
    filter:'',
}


handleChange=event=>{
    const {name,value}= event.currentTarget;
    this.setState({filter:value})
    this.props.onChange(value)
   
}
      
render(){ return(
         <div>
            <label>
                Find contact by name
                <input onChange={this.handleChange} value={this.state.filter} type="text" 
                name="filter"/>
            </label>


        </div>)}
   
}

export default Filter;