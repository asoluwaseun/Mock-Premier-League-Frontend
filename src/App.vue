<template>
  <div id="app">
    <Loader v-if="loading"/>
    <div class="container w-full bg-gray-100" style="height: 100vh">
      <NavBar/>
      <router-view/>
    </div>

  </div>
</template>

<script>
  // import FixturesService from './services/FixturesService'
  import Loader from "@/components/Loader.vue";
  import NavBar from "@/components/NavBar";

  export default {
    components: {
      Loader,
      NavBar
    },
    data(){
      return {

      }
    },
    mounted() {

    },
    computed: {
      loading(){
        return this.$store.state.loading;
      }
    },
    methods: {

    }
  }
</script>
<style>

</style>
