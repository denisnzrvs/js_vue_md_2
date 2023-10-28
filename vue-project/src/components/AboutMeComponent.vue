<template>
    <div class="row">
        <div class="col">
            <nav-component />
        </div>
        <div class="col">
            <h1>About me</h1>
        </div>
    </div>
</template>
<script></script>
<style>
.col {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    width: 50%;
}

.row {
    display: flex;
    flex-direction: row;
    flex: 1;
    height: 100vh;
    width: 100%;
}
</style>