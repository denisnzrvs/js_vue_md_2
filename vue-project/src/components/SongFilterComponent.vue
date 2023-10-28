<template>
    <h1>SongFilterComponent</h1>
    <div class="row">
        <button @click="filter('None')">None</button>
        <button @click="filter('Name')">Name</button>
        <button @click="filter('Artist')">Artist</button>
    </div>
</template>

<script>
export default {
    methods: {
        filter(option) {
            this.$emit('filter', option); // Emit an event with the selected filter option
        }
    }
};
</script>
<style></style>