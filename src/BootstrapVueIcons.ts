import { App, Plugin } from 'vue';
import Components from './components';
import './styles/styles.scss';

export { default as BIcon } from './components/BIcon/BIcon.vue';
export { default as BIconstack } from './components/BIcon/BIconstack.vue';

const plugin: Plugin = {
    install (app: App) {
        Object.entries(Components).forEach(([ name, component ]) => {
            app.component(name, component);
        });
    },
};
export { plugin as BootstrapVue3Icons };
export default plugin;
