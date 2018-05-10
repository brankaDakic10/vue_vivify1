import axios from 'axios'
export default class Contact
{
    constructor(){
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
    getAll()
        {
            return axios.get('contacts')
        }
    add(contact)
        {
            return axios.post('contacts', contact)
        }
    delete(id){
            return axios.delete(`contacts/${id}`)
        }


    get(id) {
            return axios.get(`contacts/${id}`)
        }
    edit(id, contact){
            return axios.put(`contacts/${id}`, contact)
        }
}
export const contact = new Contact()