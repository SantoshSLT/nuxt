import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import { faListAlt, faUpload, faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faListAlt, faGithub, faUpload, faShoePrints);

Vue.component('fa', FontAwesomeIcon);
Vue.component('fal', FontAwesomeLayers);
Vue.component('falt', FontAwesomeLayersText);
