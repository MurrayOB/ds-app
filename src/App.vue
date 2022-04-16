<template>
  <v-app>
    <v-app-bar elevation="0" app color="primary" dark>
      <v-btn icon class="ml-3">
        <v-badge bottom color="blue" dot offset-x="10" offset-y="10">
          <v-avatar color="white" size="40"></v-avatar>
        </v-badge>
      </v-btn>
      <v-toolbar-title class="font-weight-bold"
        ><span
          ><router-link
            class="text-decoration-none white--text"
            :to="{ name: 'home' }"
            >Welcome</router-link
          ></span
        >
        -
        <span>
          <router-link
            :to="{ name: 'about' }"
            class="subtitle-1 text-decoration-none white--text"
            color="white"
          >
            See what this project is about
          </router-link></span
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="white" dark v-bind="attrs" v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            :to="{ name: item.name }"
            link
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import "./assets/scss/main.scss";

export default {
  name: "App",

  data: () => ({
    items: [
      { title: "Home", name: "home" },
      { title: "About", name: "about" },
      { title: "Content", name: "content" },
    ],
  }),
};
</script>
