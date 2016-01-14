<template>
    <nav style="text-align: center;margin-top: 30px;">
        <ul class="pagination DivCenter">
            <li>
                <a @click="setIndex(1)" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li v-for="n in numCount" :class="{ 'active': index == (n+offset+1)}">
                <a @click="setIndex(n+offset+1)">{{n+offset+1}}</a>
            </li>

            <li>
                <a @click="setIndex(count)" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
            <li v-if="debug">
                count: {{count}}
            </li>
        </ul>
    </nav>

</template>
<script type="text/babel">


    export default {
        // replace: true,
        props: {
            //['size', 'index', 'total']
            size: {
                type: Number,
                default: 20
            },
            index: {
                type: Number,
                default: 1
            },
            total: {
                type: Number,
                required: true
            },
            debug: {
                type: Boolean,
                default: false
            }
        },
        created () {

        },

        data (){
            return {
                // count: 1 //page count
            }
        },
        computed: {
            count(){
                return this.getCount()
            },
            offset(){
                let _count = this.getCount()
                return _count < 9 || this.index < 5 ? 0 : this.index - 5
            },
            numCount(){
                return Math.min(this.getCount(), 9)
            },
            showLast(){
                return this.index != this.getCount();

            },
            showFirst(){
                return this.index != 1 && this.getCount() > 1;
            }
        },
        methods: {
            getCount(){
                let divisor = ~~(this.total / this.size);
                return (this.total % this.size) == 0 ? divisor : divisor + 1
            },
            setIndex (val){
                if (this.index == val)
                    return false;

                this.index = val
                this.$dispatch('paging', val)
            }
        }
    }
</script>


<style lang="sass">
    .pagination a {
        cursor: pointer;
        width: 42px;
    }
</style>