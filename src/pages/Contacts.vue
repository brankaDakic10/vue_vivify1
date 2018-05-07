<template>
  <div class="container mt-4">

   
    <article class="row">
        <div class="col">
        <ContactList :contacts="contacts" />
      </div>
      <div class="col-8">
        <ContactDetails :contact="routeContact" />
     </div>
    </article>





  </div>
</template>
<script>
import axios from 'axios'

import ContactList from '../components/ContactList.vue'
import ContactDetails from '../components/ContactDetails.vue'
import {contactService} from '../utils/ContactService'

export default {
 
  components: {
    ContactList,
    ContactDetails
  },
  created(){
    this.getContact()
  },

  data(){
      return{
      //    contacts:[
      //     {id:1,name:'John Doe',email:'john@gmail.com',number:'434333'},
      //     {id:2,name:'Ann Doe',email:'annn@gmail.com',number:'434243'},
      //     {id:3,name:'Sam Doe',email:'sam@gmail.com',number:'123333'}
     
      //  ]
      contacts:[]
      }
  },
  computed: {
    routeContact() {
      return this.contacts.find(contact => contact.id == this.$route.params.id)
    }
  },
  methods:{
    getContact(){
      axios.get('https://api.randomuser.me/')
      .then((response)=> {
        let contact = {}
        contact.id=response.data.results[0].id.name
        contact.name=response.data.results[0].name.first
        contact.email=response.data.results[0].email
        contact.number=response.data.results[0].cell
        this.contacts.push(contact)
        
      })
      .catch((error) => {
        // console.log(error)
      })
  
     axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com'

      axios.post('posts',{
        body:{firstName: 'Branka'}

      }).then((response) => {
        console.log('Success ',response)
      }).catch((error) => {
        console.log('Error ',error)
      })
    }


  }
}
</script>