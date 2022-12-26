<template>
    <code-component
      class="border border-neutral-800 rounded sm:w-[32rem] h-max mb-6 sm:mb-0 transition-all">
      <div class="flex items-center w-full p-4 border-b border-neutral-800">
        <div class="mr-2 w-4 h-4 rounded-full bg-emerald-500" />
        <div class="mr-2 w-4 h-4 rounded-full bg-emerald-600" />
        <div class="mr-2 w-4 h-4 rounded-full bg-emerald-700" />
        <div class="ml-auto text-sm opacity-50">
          <slot></slot>
        </div>
      </div>
      <div class="flex flex-col">
        <div v-for="i in 9" :key="i" class="flex items-center">
          <span
            class="border-r border-neutral-800 px-2 py-0.5 flex flex-col opacity-50 items-center text-sm"
            >{{ i }}</span
          >
          <div
            :class="{
              [`bg-neutral-${
                ['500', '600', '700', '800'][Math.floor(4 * Math.random())]
              }`]: true,
              [`w-${
                [32, 56, 64, 72, 40, 16, 44, 28][Math.floor(5 * Math.random())]
              }`]: true,
            }"
            class="ml-2 h-2 rounded-lg" />
        </div>
      </div>
    </code-component>
  </template>