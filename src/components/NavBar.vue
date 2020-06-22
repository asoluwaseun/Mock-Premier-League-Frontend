<template>
    <div class="flex h-12 bg-black text-white w-full">
        <div class="w-2/5 text-center">

        </div>
        <div class="w-2/5 flex  justify-center">
            <div class="self-center">
                <img src="@/assets/images/premier_league.png" class="animate__animated animate__pulse  object-center" width="80" />
            </div>
        </div>
        <div class="w-2/5 text-center">
            <button v-on:click="gotoPage()" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 mt-1 border border-gray-400 rounded shadow">
               <span v-if="present_page.indexOf('admin') === -1 && present_page !== '/login'">
                    Admin
               </span>
                <span v-else>
                    Home
                </span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            present_page(){
                return this.$route.path;
            }
        },
        methods: {
            gotoPage(){
                if(this.$route.path === '/login'){
                    this.$router.push({
                        name: 'Home'
                    }, () => {});
                    return;
                }
                if(this.$route.path.indexOf('admin') === -1){
                    this.$router.push({
                        name: 'Admin'
                    }, () => {});
                }
                else{
                    this.$router.push({
                        name: 'Home'
                    }, () => {});
                }
            }
        }
    };
</script>
