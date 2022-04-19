<template>
  <v-app>
    <v-app-bar elevation="0" app color="primary" dark>
      <v-row>
        <v-col>
          <v-btn icon class="ml-3">
            <v-badge bottom color="red" dot offset-x="10" offset-y="10">
              <v-avatar color="white" size="40">
                <img src="./assets/images/profile-pic.jpg" alt="Profile Pic" />
              </v-avatar>
            </v-badge>
          </v-btn>
        </v-col>
        <v-col>
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
        </v-col>
        <v-col> </v-col>
        <v-col>
          <v-switch
            class="mt-5"
            color="secondary"
            v-model="theme"
            inset
          ></v-switch>
        </v-col>
        <v-col>
          <v-btn @click.stop="drawer = !drawer" text color="white" dark>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view />
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
      { title: "About", name: "about" },
      { title: "Content", name: "content" },
    ],
  }),
};
</script>
