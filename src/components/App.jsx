import { Component } from "react";
import { FormContacts } from "./FormContacts/FormContacts";
import { Section } from "./Section/Section";
import { nanoid } from 'nanoid'




class App extends Component{
 
  state={
    contacts:[]
  }
 


  addContacts=(name,id)=>{
    this.setState(prevState=>({
     contacts: [...prevState.contacts,{id:nanoid(),name}]}))
  }

  render (){
    return(
   
      <Section title="Phonebook">
        <FormContacts onSubmit={this.addContacts}></FormContacts>
      </Section>
     
   
  )}
    
};

export default App;