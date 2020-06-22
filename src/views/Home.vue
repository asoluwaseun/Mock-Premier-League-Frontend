<template>
  <div class="container bg-cover bg-center bg-opacity-0 h-screen " :style="{backgroundImage: `url(${require('@/assets/images/stadium.jpg')})`}">
    <div class="flex pt-auto px-1 mx-2 rounded-sm bg-white bg-opacity-25 h-24 overflow-x-auto">
      <p class="text-center w-full" v-if="teams.length === 0">
        <i class="fa fa-2x fa-spin fa-spinner"></i>
      </p>
      <div class="w-auto mr-1 self-center" v-else v-for="team in teams" :key="team.id">
        <t-card class="h-20 w-20 bg-cover bg-center shadow-lg" :style="{backgroundImage: `url(${team.logo})`}">

        </t-card>
      </div>
    </div>
    <div class="container text-center mt-2">
      <div class="inline-flex">
        <button class="font-bold py-2 px-4 rounded-l" v-on:click="chooseView('fixtures')" :class="view === 'fixtures' ? 'bg-black text-white hover:text-gray-100' : 'bg-gray-100 text-gray-800 '">
          Fixtures
        </button>
        <button class="font-bold py-2 px-4 rounded-r" v-on:click="chooseView('teams')" :class="view === 'teams' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 '">
          Teams
        </button>
      </div>
    </div>

    <Fixtures :fixtures="fixtures" v-if="view === 'fixtures'" />
    <Teams :teams="teams" v-else />
  </div>
</template>

<script>
import TeamsService from "../services/TeamsService";
import FixturesService from "../services/FixturesService";
import Fixtures from "../components/Fixtures";
import Teams from "../components/Teams";

export default {
  name: 'Home',
  components: {
    Fixtures,
    Teams
  },
  data(){
    return{
      teams: [],
      fixtures: [],
      view: "fixtures"
    }
  },
  mounted() {
      this.getTeams();
  },
  computed: {

  },
  methods: {
    async getTeams(){
      try{
        this.$store.commit('changeLoading', true);
        let [{data: response_1},{data: response_2}] = await Promise.all([
                TeamsService.viewTeams(),
                FixturesService.viewFixtures()
        ]);

        let { teams } = response_1.data;
        let { fixtures } = response_2.data;
        this.teams = teams;
        this.fixtures = fixtures;
        this.$store.commit('changeLoading', false);
      }
      catch (e) {
        console.log(e)
      }
    },
    chooseView(view){
      this.view = view;
    }
  }
}
</script>
