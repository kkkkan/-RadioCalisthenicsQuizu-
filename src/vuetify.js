import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import Vuetify from 'vuetify'


Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: colors.blue.darken4,
            },
        },
    },
};

export default new Vuetify(opts)