<template>
    <div class="filter-row">
        <button @click="filter('None')" :class="{ 'active': activeFilter === 'None' }">None</button>
        <button @click="filter('Name')" :class="{ 'active': activeFilter === 'Name' }">Name</button>
        <button @click="filter('Artist')" :class="{ 'active': activeFilter === 'Artist' }">Artist</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeFilter: 'None' // Initialize with the default filter
        };
    },
    methods: {
        filter(option) {
            this.activeFilter = option; // Update the active filter
            this.$emit('filter', option); // Emit an event with the selected filter option
        }
    }
};
</script>
<style>
.active {
    background-color: orange;
    color: white;
}
</style>
