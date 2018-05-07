<template>
  <div class="continer">
      TXT
  </div>
</template>

<script>
import Parent from './Parent.vue'
export default {
    extends: Parent,

   data(){
      return{
          name:'Petar'
      }
   },
    created() {
        console.log('Child')
    }
  
}
</script>
