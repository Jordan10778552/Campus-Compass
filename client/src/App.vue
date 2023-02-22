<template>
   <div id="app">
     <h1 class="title">Welcome to Campus Compass</h1>
     
   </div>
 </template>
 
 <script>
 import axios from "axios";
 export default {
   name: "App",
   data() {
     return {
       items: [],
       description: "",
       editedDescription: "",
       selected: {}
     };
   },
   async mounted() {
     const response = await axios.get("api/studentInfo/");
     this.items = response.data;
   },
   methods: {
     async addItem() {
       const response = await axios.post("api/studentInfo/", {
         description: this.description
       });
       this.items.push(response.data);
       this.description = "";
     },
     async removeItem(item, i) {
       await axios.delete("api/studentInfo/" + item._id);
       this.items.splice(i, 1);
     },
     select(item) {
       this.selected = item;
       this.editedDescription = item.description;
     },
     isSelected(item) {
       return item._id === this.selected._id;
     },
     unselect() {
       this.selected = {};
       this.editedDescription = "";
     },
     async updateItem(item, i) {
       const response = await axios.put("api/studentInfo/" + item._id, {
         description: this.editedDescription
       });
       this.items[i] = response.data;
       this.unselect();
     }
   }
 };
 </script>
 
 <style>
 #app {
   margin: auto;
   margin-top: 3rem;
   max-width: 700px;
 }
 .icon {
   cursor: pointer;
 }
 </style>