import { Component } from "react";
import { FormContacts } from "./FormContacts/FormContacts";
import { Section } from "./Section/Section";
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList/ContactList";



class App extends Component{
 
  state={
    contacts:[]
  }
 


  addContacts=(name,number,id)=>{
    this.setState(prevState=>({
     contacts: [...prevState.contacts,{name,number,id:nanoid()}]}))
  }

  render (){
    return(
   
      <div>
        <Section title="Phonebook">
          <FormContacts onSubmit={this.addContacts} />
        </Section>
        
        <Section title="Contacts">
          <ContactList contacts={this.state.contacts} />
        </Section>
        
      </div>
     
   
  )}
    
};

export default App;