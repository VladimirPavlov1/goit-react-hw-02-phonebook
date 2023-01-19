import { BtnAdd, FormWrapper, Input, Label } from "./FormContacts.styled";

export const FormContacts =({onSubmit})=>{
   
   

    

   const handleSubmit=event=>{
    event.preventDefault();
    
    const {name,number,} = event.target.elements;

    onSubmit(name.value,number.value)
    name.value='';
    number.value='';
   }

   
    return(
        <FormWrapper>
             <form onSubmit={handleSubmit}>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>

                <Label>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                    
                
          <BtnAdd>Add contact</BtnAdd>
         </form>
        
           
        </FormWrapper>

    )
}