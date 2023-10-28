<template>
    <song-filter-component @filter="handleFilter" />
    <h1>SongListComponent</h1>
    <p></p>
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
import songs from "../getSongs";

export default {
    data() {
        return {
            songs: songs.slice(), // Create a copy of the original array
        };
    },
    methods: {
        handleFilter(option) {
            if (option === 'Name') {
                this.songs.sort((a, b) => a.song.localeCompare(b.song));
            } else if (option === 'Artist') {
                this.songs.sort((a, b) => a.artist.localeCompare(b.artist));
            } else if (option === 'None') {
                this.songs = songs.slice(); // Reset to the default order
            }
        },
    },
};
</script>
<style></style>