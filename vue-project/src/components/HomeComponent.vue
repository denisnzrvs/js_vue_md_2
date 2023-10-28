<template>
    <header-component />
    <div class="row">
        <div class="col" id="nav">
            <nav-component />
        </div>
        <div class="col" id="content">
            <h1>Home</h1>
            <song-list-component />
        </div>
    </div>
</template>
<script></script>
<style>
#nav {
    max-width: 30%;
}

#content {
    max-width: 70%;

}

.col {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    padding: 1rem;
}

.row {
    display: flex;
    flex-direction: row;
    flex: 1;
    height: 100vh;
    width: 100%;
}

h1 {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:blanchedalmond
}

button {
    font-family: "Roboto", sans-serif;
    background-color: #7c7c89;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    font-weight: bold;
    text-decoration: none;
    opacity: 75%;
    margin-bottom: 1rem;
    margin-right: 1rem;
    text-decoration: none;
}

</style>
