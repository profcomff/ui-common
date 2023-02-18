<template>
    <button
        class="noselect desktop-menu-item"
        :class="{ active }"
    >
        {{ title }}
    </button>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            requred: true,
        },
        active: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
<style>
.desktop-menu-item {
    color: var(--bs-on-primary);
    padding: 0 4px;
    width: 120px;
}

.desktop-menu-item:hover {
    background: rgba(255, 255, 255, 0.1);
}

.active {
    color: var(--bs-secondary);
    background: rgba(255, 255, 255, 0.2);
}

.noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
