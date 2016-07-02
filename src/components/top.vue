<template>
    <div id="divTopContainer">
        <header class="main-header">
            <!-- Logo -->
            <a href="/" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini"><b>SMC</b></span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg"><b>销售</b>监控中心</span>
            </a>

            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top" role="navigation">
                <!-- Sidebar toggle button-->
                <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button" click="sidebarToggleClick">
                    <span class="sr-only">Toggle navigation</span>
                </a>
                <!-- Navbar Right Menu -->
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <li class="">
                            <a @click="exitClick" class="dropdown-toggle" data-toggle="dropdown">
                                <span class="hidden-xs">登出</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-toggle="control-sidebar" @click="showModal = true"><i
                                    class="fa fa-gears"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar" style="height: auto;">
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul class="sidebar-menu">
                    <li class="header">功能菜单</li>
                    <li><a v-link="{name : 'dashboard'}"><i class="fa fa-book"></i> <span>Dashboard</span></a></li>

                    <li class="active treeview">
                        <a href="#">
                            <i class="fa fa-dashboard"></i> <span>资源中心</span> <i
                                class="fa fa-angle-left pull-right"></i>
                        </a>
                        <ul class="treeview-menu">
                            <li><a v-link="{name : 'product'}"><i class="fa fa-book"></i> <span>商品</span></a></li>
                            <li><a v-link="{name : 'request'}"><i class="fa fa-book"></i> <span>请求</span></a></li>
                            <li><a v-link="{name : 'message'}"><i class="fa fa-book"></i> <span>数据跟踪</span></a></li>
                        </ul>
                    </li>
                    <li class="treeview">
                        <a href="#">
                            <i class="fa fa-dashboard"></i> <span>监控中心</span> <i
                                class="fa fa-angle-left pull-right"></i>
                        </a>
                        <ul class="treeview-menu">
                            <li><a v-link="{name : 'queryRequest'}"><i class="fa fa-book"></i> <span>查询请求</span></a></li>
                            <li><a v-link="{name : 'nodetail'}"><i class="fa fa-book"></i> <span>无码单</span></a></li>
                            <li><a v-link="{name : 'alert'}"><i class="fa fa-book"></i> <span>告警</span></a></li>
                            <li><a v-link="{name : 'exception'}"><i class="fa fa-book"></i> <span>异常</span></a></li>
                        </ul>
                    </li>

                    <li><a v-link="{name : 'job'}"><i class="fa fa-book"></i> <span>任务执行</span></a></li>

                    <li class=" treeview">
                        <a href="#">
                            <i class="fa fa-dashboard"></i> <span>报表展示</span> <i
                                class="fa fa-angle-left pull-right"></i>
                        </a>
                        <ul class="treeview-menu">
                            <li><a v-link="{ path: '/charts/pro'}"><i class="fa fa-circle-o"></i> 对接商品</a></li>
                            <li><a v-link="{ path: '/charts/trace'}"><i class="fa fa-circle-o"></i> 商品跟踪</a></li>
                            <li><a v-link="{ path: '/charts/stock'}"><i class="fa fa-circle-o"></i> 存量统计</a></li>
                        </ul>
                    </li>

                    <li class="header">第三方嵌入</li>
                    <li><a v-link="{name : 'search'}"><i class="fa fa-book"></i> <span>搜索入口</span></a></li>
                </ul>
            </section>
            <!-- /.sidebar -->
        </aside>

        <modal :show.sync="showModal">
            <div slot="modal-header" class="modal-header">
                <h4 class="modal-title">关于</h4>
            </div>
            <div slot="modal-body" class="modal-body">
                资源中心查询页面({{configName}})(v0.0.1)
                <div>
                    <input type="text" v-model="flag" @keyup.enter="changeClick">
                </div>
                <div>
                    <input type="text" v-model="proxy" @keyup.enter="changeClick">
                </div>
                <input type="button" @click="changeClick" value="修改配置">
            </div>

            <div slot="modal-footer" class="modal-footer">
                <button type="button" class="btn btn-default" @click='showModal = false'>Exit</button>
            </div>
        </modal>
    </div>
</template>
<script type="text/babel">
    document.title = "销售引擎监控中心";
    import {modal} from  'vue-strap';
    import config  from "../libs/config"
    import app  from "../assets/dist/js/app"
    export default {
        data(){
            return {
                flag: localStorage.getItem("flag"),
                proxy: localStorage.getItem("proxy"),
                showModal: false,
                configName: config.name
            }
        },
        methods: {
            exitClick(e){
                localStorage.setItem("login.key", "")
                this.$route.router.go({name: 'home'});
            },
            changeClick(){
                localStorage.setItem("flag", this.flag)
                localStorage.setItem("proxy", this.proxy)
                this.showModal = false;
            }
        },
//        route: {
//            data (transition){
//                transition.next();
//            },
//            deactivate (transition){
//                transition.next();
//            }
//        },
        ready(){
            setTimeout(()=> {
                app()
            }, 10)
        },
        components: {
            modal
        }
    }

</script>


<style>

</style>