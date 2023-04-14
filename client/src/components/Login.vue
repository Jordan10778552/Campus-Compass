<template>
   <div class="button-container">
      <button @click="displayLogin">Login Screen</button>
      <button v-show="showProfileButton" @click="displayCreateProfile">Create Profile</button>
   </div>
   <img src="../assets/uvucompasslogo.png" alt="Campus Compass Logo">
   <div class="studentLogin" v-show="showStudentLogin">

            
               <div class="mb-3">
                  <label for="loginId" class="form-label" style="display: inline-block; width: 30%;">StudentId</label>
                  <input type="loginId" id="loginId" v-model="loginId" style="display: inline-block; width: 60%; height: 25px">
                  
               </div>
               <div class="mb-3">
                  <label for="loginPassword" class="labelform-" style="display: inline-block; width: 30%;">Password</label>
                  <input type="password" id="loginPassword" v-model="loginPassword" style="display: inline-block; width: 60%; height: 25px">
               </div>

               <div id="loginWarning" v-show="loginWarning">No profile for this student ID and password exists.</div>
               
               <button @click="attemptLogin">Login</button>
            
         
         
      
   </div>
   <div class="createProfile" v-show="showCreateProfile">
      
         <div id="firstname">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" v-model="firstName">
         </div>
         <div id="lastName">
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" v-model="lastName">
         </div>
         <div id="studentId">
            <label for="studentId">Student ID:</label>
            <input type="text" id="studentId" v-model="studentId">
         </div>
         <div id="password">
            <label for="pasword">Password:</label>
            <input type="password" id="password" v-model="password">
         </div>
      
      <button @click="createProfile">Create Profile!</button>
   </div>
   <div id="profileSavedMessage" v-show="profileSavedMessage">Your profile has been saved!<br>Please return to Login</div>
</template>

<script>
import { createProfile, attemptLogin } from '@/../api';

export default {
   name: 'LoginComponent',
   data() {
      
      return {
         firstName: '',
         lastName: '',
         password: '',
         studentId: '',
         loginId: '',
         loginPassword: '',
         showStudentLogin: true,
         showCreateProfile: false,
         showProfileButton: true,
         profileSavedMessage: false,
         loginWarning: false,
         LoggedIn: true
      }
   },
   methods: {
      createProfile() {
      createProfile(this.firstName, this.lastName, this.studentId, this.password)
        .then(response => {
          console.log(response);
          this.profileSavedMessage = true;
          this.showCreateProfile = false;
          this.showProfileButton = false;
        })
        .catch(error => {
          console.log(error);
        });
      },
      attemptLogin(){
         attemptLogin(this.loginId, this.loginPassword).then(response => {
            console.log(response);
            if (response.data.password == this.loginPassword){
               console.log("success!")
               this.loginWarning = false;
               this.showCreateProfile = false;
               this.showProfileButton = false;
               this.showStudentLogin = false;

               sessionStorage.setItem('user', JSON.stringify(response.data));
               const userName = `${response.data.firstName} ${response.data.lastName}`;
               console.log(userName);
               this.$emit('user-emit', userName);
            }
            else{
               this.loginWarning = true;
            }
            
         })
      },

      displayLogin(){
         this.showStudentLogin = true;
         this.showCreateProfile = false;
      },
      displayCreateProfile(){
         this.showStudentLogin = false;
         this.showCreateProfile = true;
      },
   },
}
</script>

<style scoped>
.studentLogin,
.createProfile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  width: 400px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
}

input[type="text"],
input[type="password"],
input[type="loginId"] {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 100%;
}

#loginId,
#loginPassword,
#studentId,
#password {
  width: 70%;
  margin-left: 5%;
}

#loginId-label,
#loginPassword-label {
  margin-right: 5%;
}

button {
  background-color: darkgreen;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
}

button:hover {
  background-color: #3e8e41;
}

#loginWarning {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}

#profileSavedMessage {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}

img {
  display: block;
  margin: 0 auto;
  max-width: 200px;
  max-height: 200px;
}
.button-container {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
}

.button-container button {
  margin-right: 10px;
  margin-bottom: 10px;
}

</style>
