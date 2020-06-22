<template>
    <div class="container bg-cover bg-center bg-opacity-0 h-auto " :style="{backgroundImage: `url(${require('@/assets/images/stadium.jpg')})`}">

        <div class="container text-center ">
            <div class="inline-flex mt-2">
                <button class="font-bold py-2 px-4 rounded-l" v-on:click="chooseView('fixtures')" :class="view === 'fixtures' ? 'bg-black text-white hover:text-gray-100' : 'bg-gray-100 text-gray-800 '">
                    Fixtures
                </button>
                <button class="font-bold py-2 px-4 rounded-r" v-on:click="chooseView('teams')" :class="view === 'teams' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 '">
                    Teams
                </button>
            </div>
        </div>

        <Fixtures :admin="true" :fixtures="fixtures" v-if="view === 'fixtures'" />
        <Teams :admin="true" :teams="teams" v-else />
    </div>
</template>
<script>
    import TeamsService from "../services/TeamsService";
    import FixturesService from "../services/FixturesService";
    import Fixtures from "../components/Fixtures";
    import Teams from "../components/Teams";

    export default {
        name: 'Admin',
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