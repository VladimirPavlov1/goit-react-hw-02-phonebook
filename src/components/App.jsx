import { Component } from "react";
import { FormContacts } from "./FormContacts/FormContacts";
import { Section } from "./Section/Section";
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList/ContactList";
import {Filter}  from "./Filter/Filter";



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

  getContactsFilter=()=>{
    const {contacts,filter}=this.state;
    const normalizedFilter=filter.toLocaleLowerCase();
    return contacts.filter(({name})=>name.toLocaleLowerCase().includes(normalizedFilter))
  }

  addContacts=(name,number,id)=>{
    this.setState(prevState=>({
     contacts: [...prevState.contacts,{name,number,id:nanoid()}]}))
  }


  inputChangeHandler=(event)=>{
 const {value}=event.target;
 this.setState({filter:value})
  }

  render (){
    const {filter}=this.state;
    const visibleContacts=this.getContactsFilter();
    return(
      <div>
        <Section title="Phonebook">
          <FormContacts onSubmit={this.addContacts} />
          <Filter onChange={this.inputChangeHandler} value={filter}/>
        </Section>
        
        <Section title="Contacts">
          <ContactList contacts={visibleContacts} />
        </Section>
        
      </div>
     
   
    )
}
}
    


export default App;