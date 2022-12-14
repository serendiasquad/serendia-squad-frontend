<script lang="ts" setup>
import { ref } from "vue";

import CodeCard from "@/presentation/components/explore/CodeCard.vue";
import Navbar from "@/presentation/components/Navbar.vue";
import { categories, tags } from "@/domain/constants";

const totalCode = ref(0);
const totalDeveloper = ref(0);
const selectedTags = ref<string[]>([]);
const selectedCategories = ref<string[]>([]);

function selectTag(tag: string) {
    if (selectedTags.value.includes(tag)) {
        selectedTags.value = selectedTags.value.filter((t) => t !== tag);
    } else {
        selectedTags.value.push(tag);
    }
}

function selectCategory(category: string) {
    if (selectedCategories.value.includes(category)) {
        selectedCategories.value = selectedCategories.value.filter(
            (c) => c !== category
        );
    } else {
        selectedCategories.value.push(category);
    }
}

function isTagSelected(tag: string) {
    return selectedTags.value.includes(tag);
}

function isCategorySelected(category: string) {
    return selectedCategories.value.includes(category);
}
</script>

<template>
    <Navbar />
    <main class="w-full mt-20">
        <section class="container mx-auto flex flex-col px-4 sm:px-0 transition-all sm:flex-row justify-between">
            <div class="sm:w-3/6">
                <h1 class="text-5xl font-bold tracking-wide">
                    Explore
                    <span class="text-emerald-500">SQ</span> Codes
                </h1>
                <p class="mt-4 text-lg">
                    Discover our list of codes to supercharge your project. Created by
                    <span class="text-emerald-500">SerendiaSquad</span> and the community.
                </p>
            </div>
            <div class="mt-8 sm:mt-0 sm:w-3/6 flex justify-end">
                <section class="flex flex-col w-max mx-6">
                    <h3 class="mb-1">Total</h3>
                    <strong class="text-5xl text-emerald-500">
                        {{ totalCode }}
                    </strong>
                    <p class="mt-1">Codes</p>
                </section>
                <section class="flex flex-col w-max mx-6">
                    <h3 class="mb-1">Total</h3>
                    <strong class="text-5xl text-emerald-500">
                        {{ totalDeveloper }}
                    </strong>
                    <p class="mt-1">Developers</p>
                </section>
            </div>
        </section>
        <img src="/wave.svg" class="w-full" />
        <section class="container mx-auto relative flex flex-col sm:flex-row sm:px-0 px-4 mb-8">
            <div class="w-full sm:w-80 mr-6 sm:mb-0 mb-4">
                <section>
                    <h2 class="text-2xl font-bold text-emerald-500">Categories</h2>
                    <div
                        class="mt-6 grid gap-x-4 sm:auto-cols-auto sm:grid-flow-row auto-cols-max grid-flow-col gap-y-3 overflow-x-auto pb-4 m:pb-0">
                        <button
                            class="flex items-center px-4 py-3 bg-neutral-800 rounded-lg transition border border-transparent hover:border-violet-500">
                            <div class="flex items-center">
                                <i class="text-base text-emerald-500 ri-hashtag"></i>
                                <span class="ml-2 text-base">All</span>
                            </div>
                        </button>
                        <button v-for="(category, i) in categories" :key="i" @click="selectCategory(category)"
                            :class="{ 'border-emerald-500': isCategorySelected(category) }"
                            class="flex items-center px-4 py-3 bg-neutral-800 rounded-lg transition border border-transparent hover:border-emerald-500">
                            <div class="flex items-center">
                                <i class="text-base text-emerald-500 ri-hashtag"></i>
                                <span class="ml-2 text-base">{{ category }}</span>
                            </div>
                        </button>
                    </div>
                </section>
                <section class="mt-6">
                    <h2 class="text-2xl font-bold text-emerald-500">Tags</h2>
                    <div
                        class="mt-6 grid gap-x-4 sm:auto-cols-auto sm:grid-flow-row auto-cols-max grid-flow-col gap-y-3 overflow-x-auto pb-4 sm:pb-0">
                        <button v-for="(tag, i) in tags" :key="i" @click="selectTag(tag.name)"
                            :class="{ 'border-emerald-500': isTagSelected(tag.name) }"
                            class="flex items-center px-4 py-3 bg-neutral-800 rounded-lg transition border border-transparent hover:border-emerald-500">
                            <div class="flex items-center">
                                <i class="text-base text-emerald-500" :class="{ [tag.icon]: true }"></i>
                                <span class="ml-2 text-base text-neutral-100">
                                    {{ tag.name }}
                                </span>
                            </div>
                        </button>
                    </div>
                </section>
            </div>
            <div class="flex flex-col w-full">
                <section class="flex items-center w-full mb-4 bg-neutral-800 rounded-lg py-4 px-6 justify-between">
                    <h3 class="text-lg">
                        <span class="text-xl font-bold text-emerald-500">
                            0
                        </span>
                        code(s) found
                    </h3>
                    <div class="flex items-center ml-auto">
                        <span class="mr-2 hidden sm:block">Order By</span>
                        <select class="py-2 px-2 rounded bg-neutral-700 focus:outline-none" name="cars" id="cars">
                            <option value="view">Most Viewed</option>
                            <option selected value="like">Most Liked</option>
                            <option value="updatedAt">Updated</option>
                            <option value="createdAt">Created</option>
                        </select>
                    </div>
                </section>
                <section class="grid gap-x-6 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
                    <CodeCard v-for="i in 50" :key="i" />
                </section>
            </div>
        </section>
    </main>
</template>
