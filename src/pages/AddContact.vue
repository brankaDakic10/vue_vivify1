<template>
  <div class="container">

    <article class="col-8 bgr">
        <!-- <h4>Add Contact </h4> -->
        <h2>{{ this.$route.params.id ? 'Edit contact' : 'Add new contact'}}</h2>
            <form @submit.prevent="addNew">
           
            <div class="form-group">
                <label >First Name</label>
                <input type="text"  v-model="newContact.first_name" class="form-control"  placeholder=" Enter name ">
            </div>
             <div class="form-group">
                <label >Last Name</label>
                <input type="text"  v-model="newContact.last_name" class="form-control"  placeholder=" Enter name ">
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
import {contact} from '../utils/Contact'
export default {
  created() {
        if(this.$route.params.id){
        contact.get(this.$route.params.id)
        .then((response) => {
            this.newContact=response.data
           
        }).catch((error) => {
            console.log(error)
        })
      }
        
    },
  data(){
    return{
      newContact:{
        first_name:'',
        last_name:'',
        email:'',
        number:''
      }
    }
  },
  methods:{
    addNew(){
       
          
          if(this.$route.params.id)
          {
            contact.edit(this.$route.params.id, this.newContact)
           .then((response)=> {
          
            this.$router.push('/contacts')
          }).catch((error)=>{
            console.log('Edit: '+ error)
         })  
          
          }
          else
          {
           contact.add(this.newContact)
             .then((response)=> {
           
             this.$router.push('/contacts')
           }).catch((error)=>{
            console.log(error)
          
          }) 
          }




   }
  }
}
</script>
<style>

</style>


