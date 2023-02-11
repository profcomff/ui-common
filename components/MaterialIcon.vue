<template>
  <span
    class="material-symbols-sharp"
    :style="{ fontSize: `${size}px`, color }"
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
    size: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: "black",
    },
  },
};
</script>
