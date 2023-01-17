import { Contact } from "components/Contact/Contact"

export const ContactList=({contacts})=>{
    return <ul>
        {contacts.map(({name,id,number})=>{
            console.log(number)
            return <li key={id}>
                <Contact userName={name} userId={id} userNumber={number}/>
            </li>
        })}
    </ul>
}