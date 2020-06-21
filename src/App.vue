<template>
  <div id="app">
    <Loader v-if="loading"/>
    <router-view v-else/>
  </div>
</template>

<script>
  // import FixturesService from './services/FixturesService'
  import Loader from "@/components/Loader.vue";

  export default {
    components: {
      Loader
    },
    data(){
      return {

      }
    },
    mounted() {
      setTimeout(()=> {
        this.$store.commit('changeLoading')
      }, 5000)
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
