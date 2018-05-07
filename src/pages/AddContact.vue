<template>
  <div class="container">
   Add    Contact 
    <article class="col-8 bgr">
        <h4>Add Contact </h4>
            <form @submit.prevent="addNew">
           
            <div class="form-group">
                <label >Name</label>
                <input type="text"  v-model="newContact.name" class="form-control"  placeholder=" Enter name ">
            </div>
             <div class="form-group">
                <label >Email</label>
                <input type="email" v-model="newContact.email" class="form-control"  placeholder="Enter email ">
            </div>
            <div class="form-group">
                <label >Number</label>
                <input type="text"  v-model="newContact.number" class="form-control"  placeholder=" Enter number ">
            </div>
           
            <div class="form-group">
            <button class="btn btn-success">Add new contact</button>
            </div>
            </form>
    </article>
  </div>
</template>
<script>
import {contactService} from '../utils/ContactService'
export default {
  data(){
    return{
      newContact:{
        name:'',
        email:'',
        number:''
      }
    }
  },
  methods:{
    addNew(){
      contactService.addContact(this.newContact)
    }
  }
}
</script>
<style>

</style>


