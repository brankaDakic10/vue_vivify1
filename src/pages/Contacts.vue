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
import ContactList from '../components/ContactList.vue'
import ContactDetails from '../components/ContactDetails.vue'
  
export default {
 
  components: {
    ContactList,
    ContactDetails
  },
  data(){
      return{
          contacts:[
              {id:1,name:'John Doe',email:'john@gmail.com',number:'434333'},
              {id:2,name:'Ann Doe',email:'annn@gmail.com',number:'434243'},
              {id:3,name:'Sam Doe',email:'sam@gmail.com',number:'123333'}
               
          ]
      }
  },
  computed: {
    routeContact() {
      return this.contacts.find(contact => contact.id == this.$route.params.id)
    }
  }
}
</script>