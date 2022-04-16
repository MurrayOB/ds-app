<template>
  <v-snackbar
    text
    v-model="snack"
    :color="snackbarSuccess ? 'success' : 'error'"
    right
  >
    {{ msg }}

    <template v-slot:action="{ attrs }">
      <v-btn
        :color="snackbarSuccess ? 'success' : 'error'"
        text
        v-bind="attrs"
        @click="snack = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {
  props: ["snackbar", "snackbarSuccess", "msg"],
  name: "Snackbar-component",
  data: function () {
    return {
      snack: this.snackbar,
    };
  },
};
</script>
