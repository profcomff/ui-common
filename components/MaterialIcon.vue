<template>
    <span
        class="material-symbols-sharp noselect"
        :style="style"
    >
        {{ icon }}
    </span>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        size: Number,
        color: String,
    },
    computed: {
        style() {
            const style = {};
            if (this.size) style.fontSize = `${this.size}px`;
            if (this.color) style.color = this.color;
            return style;
        },
    },
};
</script>
<style scoped>
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
