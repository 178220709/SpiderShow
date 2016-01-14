<template>
    <!-- 全局header -->
    <nv-top></nv-top>

    <section id="page">
        <!-- 首页列表 -->

        <div class="row  TextCenter ">
            <div class="col-xs-10" id="divSpiderBox">
                <div class="box">
                    <div class="box-header">
                        <!--<h3 class="box-title">哈哈笑话列表</h3>-->
                        <!--<span>-->
                        <!--<select>-->
                        <!--<option value="1">haha</option>-->
                        <!--<option value="2">youmin</option>-->
                        <!--</select>-->
                        <!--</span>-->
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body table-responsive no-padding">
                        <table class="table table-hover">
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Flag</th>
                                <th>Url</th>
                                <th>Content</th>
                                <th>View</th>
                                <th>Weight</th>
                            </tr>
                            <tr v-for=" row in BaseList" @click="Index=$index"
                                :class="{actived:Index==$index}">

                                <td>
                                    <span class="glyphicon  glyphicon-remove-sign" aria-hidden="true"
                                          @click="delClick(row)"></span>
                                </td>
                                <td>{{row.Flag}}</td>
                                <td><a target="_blank" :href="row.Url" :title="row.Url">{{row.Url}}</a></td>
                                <td>
                                    <div :title="row.Content"
                                         style="text-overflow: ellipsis ; overflow: hidden ; white-space: nowrap;width: 500px;">
                                        <!--<i class="fa fa-at" ms-attr-title="row.Content"></i> -->
                                        {{row.Content}}
                                    </div>
                                </td>
                                <td>
                                    <a target="_blank" class="btn" :class="row.Weight|getBtnColor"
                                       :href=" '/#!/view/' +  encodeURIComponent(row.Url)  ">view</a>
                                </td>
                                <td>
                                    {{row.Weight}}
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div><!-- /.box-body -->
                </div><!-- /.box -->
            </div>
        </div>
        <nv-pager @paging="paging" :total="Count" @size="10"></nv-pager>
        <div class="row TextCenter" style="padding-left: 80px;">
            <div class="col-xs-9">
                <h1>{{current.Title}}</h1>
                <div style="margin-bottom: 30px;"></div>
                <div class="highlight">
                    {{{current.Content}}}
                </div>
            </div>
        </div>


    </section>

    <side-fix :text="'删除,下一条'" @click0="delClick" @click1="goNextClick"></side-fix>

</template>

<script type="text/babel">


    var cnName = localStorage.getItem("cnName") || "spider"

    export default {
        data (){
            return {
                Index: 0,
                Count: 0,
                BaseList: [],
                PageIndex: 1,
                searchDataStr: ''
            }
        },
        computed: {
            current(){
                return this.BaseList.length > 0 ? this.BaseList[this.Index] : {}
            }
        },

        route: {
            data (transition){
                let query = transition.to.query, tab = query.tab || 'all';
                this.getList()
            },
            deactivate (transition){
                transition.next();
            }
        },
        methods: {
            getList (){
                let params = {
                    pageIndex: this.PageIndex,
                    cnName: cnName
                };

                $.post(util.api("spider/get"), params).done(data=> {
                    this.BaseList = data.Rows;
                    this.Count = data.Count;
                })
            },

            delClick(){
                let url = this.BaseList[this.Index].Url
                let params = {url, cnName};

                $.post(util.api("spider/delete"), params).done(data=> {
                    this.getList()
                })
            },
            goNextClick(){
                if (this.Index == 9) {
                    this.Index = 0
                    this.PageIndex += 1
                    this.getList()
                } else {
                    this.Index +=1
                }
            },
            paging(newIndex){
                this.Index = 1
                this.PageIndex = newIndex
                this.getList()
            }
        },
        components: {
            "nvTop": require('../components/top.vue'),
            "nvPager": require('../components/pager.vue'),
            "side-fix": require('../components/side-fix.vue')
        }
    }
</script>
<style lang="sass">
    @import '../assets/bootstrap/css/bootstrap.css';

    #divSpiderBox {
        margin: 0 0 0 100px;
    }

    #divSpiderBox .actived {
        background-color: #ccffcc;
    }

    #divSpiderBox .glyphicon-remove-sign {
        cursor: pointer;
    }

    #page {
        padding-bottom: 50px;;
    }

</style>