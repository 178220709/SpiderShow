<template>

    <div class="js-widget">
        <ul class="js-menu">
            <li v-for="name in names">
                <a href="javascript:void(0);" @click="itemClick($index)">{{name}}</a>
            </li>

        </ul>

        <div class="js-tip" >
            <span class="glyphicon glyphicon-upload" @click="goTop" aria-hidden="true" style="font-size: 25px;margin-right: 10px;"></span>
            <!--<span class="glyphicon glyphicon-th-list" style="font-size: 25px;  margin:10px 10px 0 0;" aria-hidden="true"></span>-->
        </div>

        <!--<a class="js-tip" style="opacity: 1;" @click="tipClick">Show Menu</a>-->
        <!--<a class="js-tip" style="opacity: 1;" @click="tipClick">Show Menu</a>-->
    </div>

</template>
<script type="text/babel">

    export default {
        // replace: true,
        props: {
            //['size', 'index', 'total']
            text: {
                type: String,
                default: ""
            },
            show: {
                type: Boolean,
                default: true
            }
        },

        ready (){
            if (!this.show) {
                $(".js-widget .js-menu").animate({right: -80})
            }
        },
        computed: {
            names(){
                return this.text.split(",").chain().map(str => _.trim(str)).value()
            }
        },
        methods: {
            itemClick(index){
                this.$dispatch('click' + index)
            },
            goTop(){
                $(window).scrollTop(0);
            },
            tipClick(){

                $(".js-widget .js-menu").animate({right: this.show ? -80 : 0})
                this.show = !this.show
            }
        }
    }
</script>


<style lang="sass">

    .js-widget {

        height: 100%;
        position: fixed;
        right: 0px;
        top: 100px;
        width: 100px;
        z-index: 998;
    }

    .js-widget .js-menu {

        height: 100%;
        position: relative;
        right: 0px;
        top: 0;
        width: 100px;
        z-index: 998;
    }

    .js-widget ul {
        list-style: none;
        padding: 60px 40px 0;
    }

    .js-widget ul li {
        border-top: 1px solid #424650;
        padding: 4px 0 5px;
        min-width: 45px!important;
    }

    .js-widget ul li a {
        color: #80807e;
        /*font: 300 15px/2em museo-sans, sans-serif;*/
        text-decoration: none;


    }

    /*.js-widget ul li a:hover, .js-widget ul li a.active {*/
        /*color: white;*/
    /*}*/

    .js-widget ul li:first-child {
        border-top: none;
    }

    .js-widget .js-tip {

        cursor: pointer;
        display: block;

        position: absolute;

        margin-bottom: 20px;;
        top:  10px;
        right: 0px;
        width: 50px;
        z-index: 999;
    }


</style>