<template>
    <header-component />
    <div class="row">
        <div class="col" id="nav">
            <nav-component />
        </div>
        <div class="col" id="content    ">
            <h1>About me</h1>
            <button class="button" @click="toggleFormEditing" :class="{ active: !isEditingDisabled }">{{ editFormButtonLabel
            }}</button>
            <form-component :isFormEditing="isEditingDisabled" />
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import FormComponent from './FormComponent.vue';

export default {
    setup() {
        const isEditingDisabled = ref(true);

        const toggleFormEditing = () => {
            isEditingDisabled.value = !isEditingDisabled.value;
        };

        const editFormButtonLabel = computed(() => {
            return isEditingDisabled.value ? 'EDIT FORM' : 'CANCEL';
        });

        return {
            isEditingDisabled,
            toggleFormEditing,
            editFormButtonLabel,
        };
    },
};
</script>

<style>
.col {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
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
    color: blanchedalmond
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


form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30%;
    justify-content: center;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
}

input {
    color: black;
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

input:disabled {
    background-color: black;
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

.active {
    background-color: orange;
}
</style>
