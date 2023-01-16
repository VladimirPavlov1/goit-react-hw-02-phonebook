

export const FormContacts =({onSubmit})=>{
   
   const handleSubmit=event=>{
    event.preventDefault();
    console.log(event)
    const {name} = event.target.elements;
  console.log(name.value)
    onSubmit(name.value)
   }

   
    return(
        <div>
             <form onSubmit={handleSubmit}>
          <label>
            Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
          </label>
          <button onSubmit={handleSubmit} >Add contact</button>
        </form>
        </div>

    )
}