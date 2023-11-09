<template>
    <h1>Job Details page</h1>
    <!-- $route.params.id -> '':id' used in index.js file in router--->
    <p>Job id is: {{ id }}</p>
</template>

<script>
export default {
    props: [ 'id', 'title', 'details' ],
    data()  {
        return {
            id: this.$route.params.id
        }
    }
}
</script>

<style scoped>
</style>