import { Component } from "react";
import { FormContacts } from "./FormContacts/FormContacts";
import { Section } from "./Section/Section";
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList/ContactList";
import Filter  from "./Filter/Filter";



class App extends Component{
 
  state={
    contacts:[
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
  }



  addContacts=(name,number,id)=>{
    this.setState(prevState=>({
     contacts: [...prevState.contacts,{name,number,id:nanoid()}]}))
  }
 
  findContact=()=>{
  const contact=this.state.contacts.filter(contact=>{
    if(contact.name===this.state.filter){
      return contact
    }})
    console.log(contact)
    this.setState({contacts:[...contact]})
  }
  

  inputChangeHandler=(value)=>{
   this.setState({filter:value});
   this.findContact();
  }

  render (){
    return(
   
      <div>
        <Section title="Phonebook">
          <FormContacts onSubmit={this.addContacts} />
          <Filter onChange={this.inputChangeHandler} />
        </Section>
        
        <Section title="Contacts">
          <ContactList contacts={this.state.contacts} />
        </Section>
        
      </div>
     
   
    )
}
}
    


export default App;