<template>
    <div @click.self="$emit('closeModal')" class="fixed inset-0 bg-neutral-900 flex items-center justify-center">
        <div class="flex flex-col w-full text-3xl text-center">
            <h1 class="mb-24 text-emerald-500 font-bold text-4xl">Serendia Squad</h1>
            <router-link to="/" class="py-4">Home</router-link>
            <router-link to="/explore" class="py-4">Explore</router-link>
            <router-link to="/editor" class="py-4">Editor</router-link>
            <router-link to="/faq" class="py-4">F.A.Q.</router-link>
        </div>
    </div>
</template>