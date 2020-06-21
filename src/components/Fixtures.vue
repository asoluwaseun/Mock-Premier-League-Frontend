<template>
    <div class="container px-2 mt-2">
        <t-card class="w-full h-32 bg-white mt-1 mr-2" v-for="fixture in fixtures" :key="fixture.id">
            <div class="flex justify-center ">
                <div class="w-2/5 text-center flex justify-center">
                    <div class="self-center">
                        <img :src="fixture.home_team.logo" class="rounded-full w-12 h-12">
                        <p>{{fixture.home_team.shortname}}</p>
                    </div>

                </div>

                <div class="w-1/5 text-center flex justify-center">
                    <h5 class="self-center font-weight-bold">VS</h5>
                </div>
                <div class="w-2/5 text-center flex justify-center">
                    <div class="self-center">
                        <img :src="fixture.away_team.logo" class="rounded-full w-12 h-12">
                        <p>{{fixture.away_team.shortname}}</p>
                    </div>

                </div>
            </div>
            <div class="flex text-center">
                <div class="w-full">
                    <small>{{parseDate(fixture.match_date)}} at {{fixture.teams_stadium.name}}</small>
                </div>
            </div>
        </t-card>
    </div>
</template>
<script>
    import moment from "moment";

    export default {
        props: ["fixtures"],
        methods: {
            parseDate(date){
                return moment(date).format('ddd, DD MMM')
            }
        }
    }
</script>