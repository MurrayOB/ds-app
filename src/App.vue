<template>
  <v-app>
    <!-- v-toolbar -->
    <v-app-bar app elevation="0" color="primary" dark>
      <v-btn icon class="ml-3">
        <v-badge
          bottom
          :color="$vuetify.theme.dark ? 'blue lighten-3' : 'red lighten-3'"
          dot
          offset-x="10"
          offset-y="10"
        >
          <v-avatar color="white" size="40">
            <img src="./assets/images/profile-pic.jpg" alt="Profile Pic" />
          </v-avatar>
        </v-badge>
      </v-btn>

      <v-toolbar-title class="font-weight-bold"
        ><span
          ><router-link
            class="text-decoration-none white--text"
            :to="{ name: 'home' }"
            >Data Structures and Algorithms</router-link
          ></span
        >
        -
        <span>
          <router-link
            :to="{ name: getRouteName() }"
            class="subtitle-1 text-decoration-none white--text"
            color="white"
          >
            {{ getRouteName() }}
          </router-link></span
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-switch
        :label="$vuetify.theme.dark ? 'Dark Mode' : 'Light Mode'"
        class="mt-5"
        color="secondary"
        inset
        v-model="$vuetify.theme.dark"
      >
      </v-switch>

      <v-btn @click.stop="drawer = !drawer" text color="white" dark>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
      <div style="float: right">
        <p class="font-weight-light text-caption mr-7">
          Copyright © 2021 Murray O'Brien. All Rights Reserved
        </p>
      </div>
    </v-main>

    <v-navigation-drawer app v-model="drawer" temporary absolute right>
      <v-list nav dense>
        <v-list-item
          active-class="primary--text text--accent-4"
          :to="{ name: item.name }"
          link
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import "./assets/scss/main.scss";

export default {
  name: "App",

  data: () => ({
    drawer: false,
    //trigger dark mode
    theme: false,
    items: [
      { title: "Home", name: "home" },
      { title: "Shortest Path", name: "shortest-path" },
      { title: "More Algorithms", name: "more-algorithms" },
      { title: "Learning Material", name: "learning-material" },
      { title: "About Me", name: "about" },
    ],
  }),
  methods: {
    getRouteName() {
      return this.$route.name;
    },
  },
};
</script>
