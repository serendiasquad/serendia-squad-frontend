import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("@/common/pages/Home.vue");
const Explore = () => import("@/common/pages/Explore.vue")
const Faq = () => import("@/common/pages/Faq.vue");
const Editor = () => import("@/common/pages/Editor.vue");

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/explore",
            name: "Explore",
            component: Explore,
        },
        {
            path: "/faq",
            name: "F.A.Q.",
            component: Faq,
        },
        {
            path: "/editor",
            name: "Editor",
            component: Editor,
        },
    ]
});
