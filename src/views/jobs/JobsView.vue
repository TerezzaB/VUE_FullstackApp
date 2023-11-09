<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :kex="job.id" class="job">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id, title: job.title, details: job.details } }">
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>
</template>


<script>
export default {
    name: 'Jobs',
    data() {
        return {
            jobs: [
                { id: '1', title: 'Ninja Designer', details: 'something here' },
                { id: '2', title: 'Ninja Developer', details: 'something' },
                { id: '3', title: 'Other Dev', details: 'some description' },
                { id: '4', title: 'Some other developer', details: 'something here to describe' }
            ]
        }
    }
}
</script>

<style scoped>
.job h2 { max-width: 600px; background: #F4F4F4; padding: 20px; border-radius: 10px; margin: 10px auto; cursor: pointer; color: #444;  }
.job h2:hover { background: #DDD; }
.job a { text-decoration: none; }
</style>