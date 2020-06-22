<template>
    <div class="container px-2 mt-2">
        <div v-if="admin" class="m-2 text-center w-full">
            <button
                    class="bg-white hover:bg-white text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                Add Team
            </button>
        </div>
        <div class="md:flex">
            <t-card class="w-full  h-32 bg-white mt-1 mr-2" v-for="team in teams" :key="team.id">
                <div class="flex justify-center">
                    <div class="w-full text-center flex justify-center">
                        <div class="self-center">
                            <img :src="team.logo" class="rounded-full w-12 h-12">
                        </div>
                    </div>
                </div>
                <div class="flex text-center">
                    <div class="w-full">
                        <p>{{team.fullname}} <span v-if="team.nickname"><small>({{team.nickname}})</small></span></p>
                    </div>
                </div>
                <div class="flex text-center">
                    <div class="w-full">
                        <small v-if="team.teams_stadia.length > 0">Stadium: {{team.teams_stadia[0].name}} | </small>
                        <small>Founder: {{team.founder}}</small>
                    </div>
                </div>
            </t-card>
        </div>

    </div>
</template>
<script>
    export default {
        props: ["teams","admin"]
    }
</script>