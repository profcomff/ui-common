<template>
    <span
        class="material-symbols-sharp"
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
