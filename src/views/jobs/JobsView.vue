<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>
</template>


<script>
export default {
    name: 'Jobs',
    data() {
        return {
            jobs: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message));
    }
}
</script>

<style scoped>
.job h2 { max-width: 600px; background: #F4F4F4; padding: 20px; border-radius: 10px; margin: 10px auto; cursor: pointer; color: #444;  }
.job h2:hover { background: #DDD; }
.job a { text-decoration: none; }
</style>