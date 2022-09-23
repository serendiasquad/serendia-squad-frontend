<script setup lang="ts">
import Navbar from '@/common/components/Navbar.vue';
import FieldWrapper from "@/common/components/home/FieldWrapper.vue";
import ResponsiveFieldWrapper from '@/common/components/home/ResponsiveFieldWrapper.vue';
import VectorEditorComponent from '@/common/components/home/VectorEditorComponent.vue';
import InformationCard from '@/common/components/home/InformationCard.vue';
</script>

<template>
    <Navbar />
    <section class="flex flex-col w-full transition items-center text-center mt-12">
        <h1 class="text-4xl font-bold text-emerald-500">Serendia Squad</h1>
        <p class="mt-6 w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque totam iusto
            dignissimos provident
            repellendus at sint perspiciatis. Officia saepe aliquid, magni distinctio dolorum earum modi. Assumenda
            ratione mollitia cumque quam.</p>
        <div class="flex justify-center mt-8 items-center">
            <a href="https://www.github.com/serendiasquad" target="_blank">
                <button class="py-2 px-4 transition hover:bg-white hover:bg-opacity-10 rounded mr-4">
                    <i class="fa-brands fa-github mr-1"></i>
                    Github
                </button>
            </a>
            <a href="https://discord.gg/serendia" target="_blank">
                <button class="py-2 px-4 transition hover:bg-white hover:bg-opacity-10 rounded mr-4">
                    <i class="fa-brands fa-discord mr-1"></i>
                    Discord
                </button>
            </a>
            <button class="py-2 px-4 transition bg-emerald-500 hover:bg-emerald-500 hover:bg-opacity-80 rounded">
                Get Started
            </button>
        </div>
    </section>
    <FieldWrapper class="text-center">
        <h3 class="text-xl tracking-wide mb-4 opacity-50">Learn</h3>
        <h1 class="text-4xl font-bold">
            <span class="text-emerald-500">Easy</span> to learn.
            <span class="text-emerald-500">Easy</span> to make
        </h1>
        <p class="mt-2 opacity-80">
            You have everything to make a Discord Bot. Copy if necessary, learn if you
            want, or paste what you have copied.
        </p>

        <div class="w-full flex flex-col sm:flex-row sm:justify-center mt-12 transition-all">
            <VectorEditorComponent>tutorial.js</VectorEditorComponent>
            <VectorEditorComponent class="sm:ml-6">index.js</VectorEditorComponent>
        </div>
    </FieldWrapper>
    <FieldWrapper class="text-center">
        <h3 class="text-xl tracking-wide mb-4 opacity-50">Explore</h3>
        <h1 class="text-4xl font-bold">
            To develop yourself? So much to
            <span class="text-emerald-500">Explore</span>
        </h1>
        <p class="mt-2 opacity-80">
            Discover powerful modules, integrate with your favorite providers and
            start quickly with themes.
        </p>
        <ResponsiveFieldWrapper class="text-emerald-500 mt-12">
            <InformationCard>
                <i class="text-4xl fa-solid fa-code-branch"></i>
                <h5 class="mt-6 text-lg font-bold tracking-wide">Modules</h5>
                <p class="mt-2">
                    If you needed other extensions, this solved at problem.
                </p>
            </InformationCard>
            <InformationCard>
                <i class="text-4xl fa-solid fa-code"></i>
                <h5 class="mt-6 text-lg font-bold tracking-wide">Codes</h5>
                <p class="mt-2">
                    So much difference writed codes by difference developers. Just see at
                    this codes and copy!
                </p>
            </InformationCard>
            <InformationCard>
                <i class="text-4xl fa-solid fa-users"></i>
                <h5 class="mt-6 text-lg font-bold tracking-wide">Large Community</h5>
                <p class="mt-2">
                    <span class="text-emerald-500">Serendia Squad</span> have a large
                    community. All kinds of people shape us with different ideas,
                    different projects and content.
                </p>
            </InformationCard>
        </ResponsiveFieldWrapper>
    </FieldWrapper>

</template>
