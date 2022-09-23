import { createApp } from 'vue'
import App from "@/common/App.vue";
import router from '@/common/core/router';

const app = createApp(App);
app.use(router);

router.isReady().then(() => {
    app.mount('#app')
});
