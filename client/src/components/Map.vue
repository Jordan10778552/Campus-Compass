<template>
   <h1>Map</h1>
   <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.866046654194!2d-111.71608200604764!3d40.27872573843891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9b1eeeb9f5c5%3A0x63523d8413e98aa1!2sUtah%20Valley%20University!5e0!3m2!1sen!2sus!4v1682398195958!5m2!1sen!2sus" 
    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
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

<style scoped>
  .map {
    height: 100%;
    width: 100%;
  }
</style>
