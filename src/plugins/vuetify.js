import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    //dark: true,
    themes: {
      light: {
        primary: "#64B5F6",
        secondary: "#b0bec5",
        anchor: "#8c9eff",
      },
      dark: {
        primary: colors.red.darken1,
        secondary: colors.red.lighten4,
        accent: colors.indigo.base,
      },
    },
  },
});
