<template>
    <song-filter-component @filter="handleFilter" />
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Artist</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="song in songs" :key="song.id">
                <td>{{ song.song }}</td>
                <td>{{ song.artist }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { useSongsStore } from '../store';

export default {
    data() {
        return {
            songs: useSongsStore().all_songs.slice(), // Create a copy of the original array
        };
    },
    methods: {
        handleFilter(option) {
            if (option === 'Name') {
                this.songs.sort((a, b) => a.song.localeCompare(b.song));
            } else if (option === 'Artist') {
                this.songs.sort((a, b) => a.artist.localeCompare(b.artist));
            } else if (option === 'None') {
                this.songs = useSongsStore().all_songs.slice(); // Reset to the default order
            }
        },
    },
};
</script>
<style>
th,
td {
    color: white;
    font-size: 16pt;
    font-family: Arial, Helvetica, sans-serif;
}

table {
    table-layout: auto;
}
</style>