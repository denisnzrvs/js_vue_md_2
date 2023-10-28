<template>
    <form>
        <label for="first_name">First name</label>
        <input type="text" id="first_name" name="first_name" v-model="store.firstName" :disabled="isFormEditing" />

        <label for="last_name">Last name</label>
        <input type="text" id="last_name" name="last_name" v-model="store.lastName" :disabled="isFormEditing" />

        <label for="student_code">Student code</label>
        <input type="text" id="student_code" name="student_code" v-model="store.studentCode" :disabled="isFormEditing" />

        <div>
            <label>Logged in at</label>
            <div v-for="timestamp in sortedTimestamps" :key="timestamp">
                {{ timestamp }}
            </div>
        </div>
    </form>
</template>

<script>
import { defineComponent, computed, toRef } from 'vue';
import { useUserStore } from '../store';

export default defineComponent({
    name: 'FormComponent',
    props: {
        isFormEditing: Boolean, // Prop to control the input fields' disabled attribute
    },
    setup(props) {
        const store = useUserStore();
        const isFormEditing = toRef(props, 'isFormEditing'); // Create a reference to the prop

        const sortedTimestamps = computed(() => {
            return store.loggedAtTimestamp
                .slice()
                .reverse()
        });

        return {
            store,
            sortedTimestamps,
            isFormEditing,
        };
    },
});
</script>

<style></style>
