<template>
    <div>
        <Table border :columns="columns" :data="listdata"></Table>
        <Page :total="40" @on-change="showpage" show-total show-elevator show-sizer></Page>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                columns: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'age',
                        key: 'age'
                    },
                    {
                        title: 'address',
                        key: 'address'
                    }
                ],
                listdata: [
                    {
                        name: 'feng',
                        age: 12,
                        address: '北京'
                    }
                ]
            }
        },
        methods: {
            showpage(num){
                this.$Message.info("current page:" + num);
            }
        }
    }
</script>