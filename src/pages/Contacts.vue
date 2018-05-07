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
import {contactService} from '../utils/ContactService'

export default {
 
  components: {
    ContactList,
    ContactDetails
  },
  data(){
      return{
          contacts:contactService.list()
      }
  },
  computed: {
    routeContact() {
      return this.contacts.find(contact => contact.id == this.$route.params.id)
    }
  }
}
</script>