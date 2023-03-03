<template>
   <div>
      <h2>Login</h2>
   </div>
</template>

<script>
export default {
   name: 'LoginComponent',
   data() {
      return {
         email: '',
         password: '',
      }
   },
   methods: {
      submitForm() {
         // TODO: Add logic to submit the form to the server
         console.log(
            'Submitting form with email:',
            this.email,
            'and password:',
            this.password
         )
      },
   },
}
</script>

<style scoped></style>
