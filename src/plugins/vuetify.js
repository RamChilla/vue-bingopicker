import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      // light: {
      //   primary: '#ee44aa',
      //   secondary: '#424242',
      //   accent: '#82B1FF',
      //   error: '#FF5252',
      //   info: '#2196F3',
      //   success: '#4CAF50',
      //   warning: '#FFC107'
      // },
      dark: {
        primary: '#7375A5',
        secondary: '#2B364A',
        accent: '#6CF3D5',
        error: '#FF5252',
        info: '#21A3A3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#2B364A',
        anchor: '#6CF3D5'
      }
    },
  },
  icons: {
    iconfont: 'md',
  },
});
