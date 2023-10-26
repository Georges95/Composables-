<script setup>
import { useFetch } from '@/composables/useFetch.js';

const props = defineProps({
    url: {
        type: String,
        required: true,
    }
})

//const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/users');
const {data, error, loading} = useFetch(props.url);

</script>

<template>
    
    <div v-if="error">
        <h2>Error : {{ error }}</h2>
    </div>

    <div v-if="loading">
        <h2>Chargement en cours....</h2>
    </div>

    <h2>Posts</h2>
    <ul v-for="item in data" :key="item.id">
        <li>Titre : {{ item.title }}</li>
        <li>Contenu : {{ item.body }}</li>
        <br>
    </ul>

</template>

<style scoped>

</style>