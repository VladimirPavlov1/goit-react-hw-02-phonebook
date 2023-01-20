import { Component } from "react";
import { FormContacts } from "./FormContacts/FormContacts";
import { Section } from "./Section/Section";
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList/ContactList";
import {Filter}  from "./Filter/Filter";

import { Contacts, Container } from "./App.styled";




class App extends Component{
 
  state={
    contacts:[
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    
  }

  getContactsFilter=()=>{
    const {contacts,filter}=this.state;
    const normalizedFilter=filter.toLowerCase();
    return contacts.filter(contact=>(contact.name.toLowerCase().includes(normalizedFilter)))
  }

  addContacts=(name,number,id)=>{
    const {contacts}= this.state;
    if(contacts.find(contact=>contact.name.toLowerCase().includes(name.toLowerCase()))){
      alert(`${name} is already in contacts`);
      return
    }else{
      this.setState(prevState=>({
        contacts: [...prevState.contacts,{name,number,id:nanoid()}]}))
    }
    
    
  }


  inputChangeHandler=(event)=>{
 const {value}=event.target;
 this.setState({filter:value})
  }

  deleteContact=contactId=>{
   this.setState(prevState=>({
    contacts:prevState.contacts.filter(({id})=>id!==contactId)}))
  }

  render (){
    const {filter}=this.state;
    const visibleContacts=this.getContactsFilter();
    return(
      <Container>
        <Section title="Phonebook">
          <FormContacts onSubmit={this.addContacts} />
         
        </Section>
        
        <Contacts>Contacts</Contacts> 
          <Filter onChange={this.inputChangeHandler} value={filter}/>
          {visibleContacts.length?<ContactList contacts={visibleContacts} onDelete={this.deleteContact}/>:
          alert('No such contact found')}
        
        
      </Container>
     
   
    )
}
}
    


export default App;