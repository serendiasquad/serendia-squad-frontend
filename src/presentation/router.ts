import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("@/presentation/pages/Home.vue");
const Explore = () => import("@/presentation/pages/Explore.vue")
const Faq = () => import("@/presentation/pages/Faq.vue");
const Editor = () => import("@/presentation/pages/Editor.vue");

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
