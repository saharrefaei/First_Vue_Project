<template>
  <div class="Box-Decoration">
    <div v-for="User in PostsList.data" :key="User.id">
      <PostsBox :User="User" />
    </div>
  </div>
</template>

<script>
  import PostsBox from '@/components/Posts/PostBox.vue'
  import axios from 'axios';
  import {
    ref
  } from 'vue';

  export default {
    name: 'PostsPage',
    components: {
      PostsBox
    },
    setup() {
      const PostsList = ref([]);

      function GetPosts() {
        axios.get('https://reqres.in/api/users?page=2')
          .then(function (response) {
            PostsList.value = response.data

            // console.log(PostsList.value);
          })
          .catch(function (error) {

            console.log(error);
          })
      }
      GetPosts();
      return {
        PostsList
      };
    }

  }
</script>

<style>
  .Box-Decoration {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    padding: 5%;
  }
</style>