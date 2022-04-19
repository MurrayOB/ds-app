import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.blue,
        secondary: "#b0bec5",
        grey: colors.grey.lighten3,
        anchor: "#8c9eff",
      },
      dark: {
        primary: colors.red.darken1,
        secondary: colors.red.lighten4,
        grey: "#212121",
        accent: colors.indigo.base,
      },
    },
  },
});
