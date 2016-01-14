<template>
    <!-- 全局header -->
    <nv-top></nv-top>

    <div class="DivIndexTop" style="">
        <div class="container ">
            <p style="font-size: 30px">Please input the access code </p>

            <div style="margin: 30px 0 0 0 ">
                <div class="input-group col-sm-3 " style="margin: auto">
                    <input type="text" v-model="code" @keyup.enter="checkClick"
                           class="form-control" placeholder="access code">
                    <span class="input-group-addon" @click="checkClick">check</span>
                </div>
            </div>
        </div>
    </div>

    <alert
            :show.sync="showError"
            :duration="3000"
            type="danger"
            width="400px"
            placement="top-right"
            dismissable>
        <span class="icon-ok-circled alert-icon-float-left"></span>
        <strong>Error!</strong>
        <p>You code is illegality.</p>
    </alert>


</template>
<script type="text/babel">

    import { alert } from 'vue-strap'

    export default {
        data(){
            return {
                code: "",
                showError: false
            }
        },
        route: {
            data (transition){
                this.code = localStorage.getItem("login.key") || sessionStorage.getItem("login.key")

            }
        },

        methods: {
            checkClick(){
                if (this.code && this.code == "jsonsong") {
                    localStorage.setItem("cnName","SpiderEntity")
                }

                if (this.code && this.code == "json") {
                    sessionStorage.setItem("login.key", "json")
                    this.$route.router.go({name: 'list'});
                } else {
                    this.showError = true
                }
            }
        },
        components: {
            'nvTop': require('../components/top.vue'),
            alert
        }

    }
</script>
<style lang="sass">
    @import '../assets/bootstrap/css/bootstrap.css';

    .DivIndexTop {
        text-align: center;
        min-height: 300px;
        margin: 100px 0 50px 0;
        background: url('../assets/images/loading.gif') no-repeat center 150px;
    }

    .input-group-addon {
        cursor: pointer;
    }

    .title {
        font-size: 30px;

    }
</style>

