<template>
    <button>
        <MaterialIcon
            :icon="icon"
            color="var(--bs-on-primary)"
        />
    </button>
</template>

<script>
import MaterialIcon from './MaterialIcon.vue';
export default {
    components: { MaterialIcon },
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
button {
    border-radius: 999px;
    padding: 4px;
}

button:disabled {
    opacity: 0.6;
}

button:hover {
    background-color: rgba(255, 255, 255, 0.1);
    background-size: 150%;
}
button:active {
    background-color: rgba(255, 255, 255, 0.2);
}
</style>
