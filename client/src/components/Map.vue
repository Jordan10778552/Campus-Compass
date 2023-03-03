<template>
   <h1>Map</h1>
</template>

<script>
export default {
   name: 'MapComponent',
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
