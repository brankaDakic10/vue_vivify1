const contacts=[
    {id:1,name:'John Doe',email:'john@gmail.com',number:'434333'},
    {id:2,name:'Ann Doe',email:'annn@gmail.com',number:'434243'},
    {id:3,name:'Sam Doe',email:'sam@gmail.com',number:'123333'}
     
]

let nextId = 4
export default class ContactService{
    list(){
        return contacts
   }
   addContact(contact){
    contact.id=nextId
    contacts.push(contact)
    nextId++
       
   }
}

export const contactService=new ContactService()