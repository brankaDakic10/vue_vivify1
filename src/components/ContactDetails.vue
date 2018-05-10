
<template>
  <div>
    <div class="card">
      <ul class="list-group list-group-flush" v-if="contact">
        <li class="list-group-item"><i class="fas fa-user fa-fw"></i> {{ contact.first_name }}</li>
        <li class="list-group-item"><i class="fas fa-user fa-fw"></i> {{ contact.last_name }}</li>
        <li class="list-group-item"><i class="fas fa-envelope fa-fw"></i> {{ contact.email }}</li>
        <li class="list-group-item"><i class="fas fa-phone fa-fw"></i> {{ contact.number }}</li>
        <button class="btn btn-danger " @click="deleteContact(contact.id)" > Delete</button>
         <router-link tag="button" :to="{ name: 'edit-contact', params: { id: contact.id }}" class="btn btn-primary" >Edit</router-link>
      </ul>
      <div class="card-body" v-else>
        &larr; Please select a contact you want to see or click 
        <router-link to="/add-contact">here</router-link> to create a new contact.
      </div>
    </div>
  </div>
</template>

<script>
import {contact} from '../utils/Contact'
export default {
  props: ['contact'],
  
  methods:{
    deleteContact(id){
         let confirmDelete = confirm('Do you want to delete this contact?')
            if (confirmDelete) {
                contact.delete(id)
               .then((success) => {
                   this.$emit('delete' , id)
                    
             }).catch((error)=> {
                console.log(error)
         })  
    }
  }

  
  }
}
</script>