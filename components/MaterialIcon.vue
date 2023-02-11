<template>
  <span class="material-symbols-sharp"> {{ icon }} </span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
