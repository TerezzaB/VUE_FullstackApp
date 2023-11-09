<template>
    <div v-if="job">
        <h1>{{ job.title }}</h1>
        <p>The job ID is: {{ id }}</p>
        <!-- $route.params.id -> '':id' used in index.js file in router--->
        <p>{{ job.details }}</p>
    </div>
    <div v-else>
        <p>Loading files....</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            job: null,
            id: this.$route.params.id
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err.message));
    }
}
</script>

<style scoped>
</style>