<!-- 每个组员的数据展示模板 -->
<template>
<div class=''>
    <slot name="example_show">child show</slot>
    <slot name="example_description">child des</slot>
    <slot name="dataset_link">child link</slot>
</div>
</template>

<script>

export default {
components: {},
data() {
return {

}
},
methods: {

},
computed: {},
watch: {},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
//生命周期 - 创建之前
beforeCreate() {

},
//生命周期 - 挂载之前
beforeMount() {

},
//生命周期 - 更新之前
beforeUpdate() {

}, 
//生命周期 - 更新之后
updated() {

}, 
//生命周期 - 销毁之前
beforeDestroy() {

},
//生命周期 - 销毁完成
destroyed() {

},
//如果页面有keep-alive缓存功能，这个函数会触发
activated() {

},
}
</script>
<style scoped>

</style>