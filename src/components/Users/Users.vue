<template>
  <div class="Box-Decoration">
    <div v-for="User in UsersList.data" :key="User.id">
      <UsersBox :User="User" />
    </div>
  </div>
</template>

<script>
  import UsersBox from '@/components/Users/UserBox.vue'
  import axios from 'axios';
  import {
    ref
  } from 'vue';

  export default {
    name: 'UserPage',
    components: {
      UsersBox
    },
    setup() {
      const UsersList = ref([]);

      function GetUsers() {
        axios.get('https://reqres.in/api/users?page=2')
          .then(function (response) {
            UsersList.value = response.data

            console.log(UsersList.value);
          })
          .catch(function (error) {

            console.log(error);
          })
      }
      GetUsers();
      return {
        UsersList
      };
    }

  }
</script>

<style scoped>
  .Box-Decoration {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 5%;
  }
</style>