import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  primary: colors.green.accent3,
  secondary: colors.deepOrange.lighten1,
  lightGray: "grey lighten-3",
  mode: "white",
});
