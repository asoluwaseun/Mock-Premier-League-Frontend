<template>
    <div>
        <div class="container flex justify-center bg-cover bg-center  h-screen "
             :style="{backgroundImage: `url(${require('@/assets/images/stadium.jpg')})`}">
            <div class="mt-20">

                <div class="w-full max-w-xs">
                    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" autocomplete="off">
                        <div v-if="input_error" class="bg-red-100 mb-2 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                             role="alert">
                            <strong class="font-bold">All inputs are required!</strong>

                        </div>
                        <div v-if="error_message" class="bg-red-100 mb-2 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                             role="alert">
                            <strong class="font-bold">{{error_message}}</strong>

                        </div>
                        <div v-if="success_message" class="bg-green-100 mb-2 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                             role="alert">
                            <strong class="font-bold">Login Successful</strong>

                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email
                            </label>
                            <input autocomplete="none"
                                   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                   id="email" type="email" name="email" v-model="email" placeholder="Email">

                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                   id="password" type="password" name="password" v-model="password"
                                   placeholder="******************">

                        </div>
                        <div class="flex items-center justify-center">
                            <button v-if="email && password && !loading" v-on:click="submitForm"
                                    class="bg-black hover:bg-black text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button">
                                Login
                            </button>
                            <button v-else type="button"
                                    class="bg-black text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                                Login <span v-if="loading"><i class="fa fa-spin fa-spinner"></i></span>
                            </button>

                        </div>
                        <div class="w-full text-center">
                            <router-link to="/signup"><small class="text-center w-full">Sign Up</small></router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import UserService from "../services/UserService";

    export default {
        data() {
            return {
                email: "",
                password: "",
                error: false,
                input_error: false,
                success_message: false,
                error_message: "",
                loading: false
            }
        },
        methods: {
            async submitForm() {
                try{
                    this.input_error = false;
                    if (this.email && this.password) {
                        this.error_message = "";
                        this.loading = true;
                        let {data: response} = await UserService.adminLogin({
                            email: this.email,
                            password: this.password
                        });
                        this.success_message = true;
                        this.$store.commit('setUserDetails', response.data);
                        this.$router.push({
                            name: 'Admin'
                        }, () => {});
                        this.loading = false;

                    } else {
                        this.input_error = true;
                    }
                }
                catch(err){
                    this.loading = false;
                    this.error_message = err.response.data.message
                }

            }
        }
    }
</script>