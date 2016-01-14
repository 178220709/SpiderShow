
<template>
    <header class="navbar navbar-static-top bs-docs-nav" id="top" role="banner"
            style="background-color: rgb(236, 238, 239); ">
        <div class="container">
            <nav id="bs-navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a v-link="">首页</a>
                    </li>
                    <!--<li  class="dropdown">-->
                    <!--<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">-->
                    <!--Dropdown <span class="caret"></span>-->
                    <!--</a>-->
                    <!--<ul class="dropdown-menu">-->
                    <!--<li><a href="#">Action</a></li>-->
                    <!--<li><a href="#">Another action</a></li>-->
                    <!--<li><a href="#">Something else here</a></li>-->
                    <!--<li role="separator" class="divider"></li>-->
                    <!--<li><a href="#">Separated link</a></li>-->
                    <!--</ul>-->
                    <!--</li>-->

                </ul>


                <ul class="nav navbar-nav navbar-right hidden-sm">
                    <li><a @click="showModalClick" style="cursor: pointer">关于</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <modal :show.sync="showModal">
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">关于本站</h4>
        </div>
        <div slot="modal-body" class="modal-body">
            所有内容来自互联网,本人不对内容负任何责任.
        </div>
        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-default" @click='showModal = false'>Exit</button>
        </div>
    </modal>

</template>
<script>

    var modal = require('vue-strap').modal;

    export default {
        replace: true,
        props: ['pageType', 'fixHead', 'showMenu', 'messageCount', 'needAdd'],
        data (){
            return {
                showModal: false
            }
        },
        methods: {
            showModalClick (){
                this.showModal = true
            }
        },
        components: {
           modal
        }
    }
</script>


<style lang="sass">
    #hd {
        height: 200px;
        width: 1000px;
        background-color: #00aaaa;
    }

    .nv-toolbar {
        width: 100%;
        height: 44px;
        display: -webkit-box;
        -webkit-box-align: center;

    .toolbar-nav {
        width: 49px;
        height: 44px;
        position: absolute;
        background: url("../assets/images/components/nav_icon.png") no-repeat center center;
        background-size: 19px 16px;
        margin: 0;
        z-index: 1;
        top: 0;
        left: 0;
    }

    &
    >
    span {
        display: block;
        text-align: center;
        height: 100%;
        line-height: 44px;
        font-size: 16px;
        width: 100%;
        position: relative;
        z-index: 0;
    }

    .num {
        background-color: #80bd01;
        color: #fff;
        width: 20px;
        height: 20px;
        line-height: 20px;
        vertical-align: middle;
        text-align: center;
        border-radius: 50%;
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 10;
    }

    .add-icon {
        color: #42b983;
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 10;
        padding: 5px 15px;
        border-radius: 5px;
    }

    }
    .scroll-hide {
        height: 100%;
        overflow: hidden;
    }
</style>