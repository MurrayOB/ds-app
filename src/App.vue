<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-spacer></v-spacer>
      <v-btn text>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
