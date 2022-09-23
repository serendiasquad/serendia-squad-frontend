<script setup lang="ts">
import NavModal from "@/common/components/mobile/NavModal.vue";
import { ref } from "vue";

const modal = ref(false);

function onLoginClick() {

}
</script>
    
<template>
    <nav class="container mx-auto">
        <div class="flex items-center px-4 sm:px-0 py-2 sm:py-8 sm:mt-4 bg-emerald-500 sm:bg-transparent">
            <div class="w-6/12 sm:w-3/12">
                <router-link to="/" class="text-white sm:text-emerald-500 font-bold text-xl">Serendia Squad
                </router-link>
            </div>
            <div class="w-6/12 block sm:hidden">
                <div class="flex justify-end">
                    <button @click="modal = true"
                        class="w-10 h-10 focus:bg-white/50 focus:text-black rounded flex items-center justify-center">
                        <i class="ri-menu-line"></i>
                    </button>
                </div>
            </div>
            <div class="w-6/12 hidden sm:block">
                <div class="flex justify-center items-center gap-2">
                    <router-link to="/explore" exact-active-class="active" class="btn-primary rounded-full">Explore
                    </router-link>
                    <router-link to="/editor" exact-active-class="active" class="btn-primary rounded-full">Editor
                    </router-link>
                    <router-link to="/faq" exact-active-class="active" class="btn-primary rounded-full">F.A.Q.
                    </router-link>
                </div>
            </div>
            <div class="w-3/12 hidden sm:block">
                <div class="flex justify-end">
                    <button @click="onLoginClick"
                        class="group flex items-center justify-center font-medium w-12 h-12 bg-emerald-500 focus:bg-emerald-600 hover:w-24 transition-all rounded-full">
                        <i class="ri-login-circle-line text-lg"></i>
                        <span class="group-hover:ml-2 overflow-hidden max-w-0 group-hover:max-w-max">Login</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    <Teleport to="body">
        <NavModal v-if="modal" @closeModal="() => modal = false"></NavModal>
    </Teleport>
</template>
