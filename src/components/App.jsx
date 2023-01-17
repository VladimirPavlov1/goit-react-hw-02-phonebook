import { Component } from "react";
import { FormContacts } from "./FormContacts/FormContacts";
import { Section } from "./Section/Section";
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";



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

 findContact=filter=>{
  const {contacts} = this.state;
  filter=this.state.filter.toLowerCase()
  console.log(contacts)
  console.log(filter)

  // contacts.find(contact=>{
  //   if(contact.name===this.state.filter){
  //     console.log(contact)
  
  // }})
  // return this.setState({contacts:[...contact]})
 }
  
  


  handleChange=event=>{
  const {name,value}= event.currentTarget;
  this.setState({[name]:value})
    this.findContact(value);
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
          <Filter onChange={this.handleChange} />
        </Section>
        
        <Section title="Contacts">
          <ContactList contacts={this.state.contacts} />
        </Section>
        
      </div>
     
   
    )
}
}
    


export default App;