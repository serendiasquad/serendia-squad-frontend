<template>
    <div
        class="flex flex-col w-full h-40 bg-neutral-800 border border-transparent hover:border-emerald-500 px-4 py-3 overflow-hidden rounded-lg transition cursor-pointer">
        <div class="flex items-end">
            <h3 class="font-medium text-lg">Get User Avatar</h3>
            <div class="ml-auto flex gap-2">
                <div title="Tag"
                    class="flex items-center justify-center text-xs px-2 h-6 bg-neutral-700 rounded-full text-center">
                    Database</div>
            </div>
        </div>
        <p class="mt-2 max-h-[3.75rem] text-ellipsis overflow-y-hidden font-light text-sm">Lorem ipsum dolor sit amet
            consectetur
            adipisicing elit. Nihil perferendis animi inventore, laborum asperiores eos dolorem tempora esse
            exercitationem magni neque aperiam explicabo tempore. Illum ipsa voluptatibus exercitationem? Et, rem.</p>
        <div class="mt-auto flex items-center gap-2 text-sm">
            <div title="Author" class="flex items-center">
                <img class="w-5 h-5 rounded-full bg-red-500" src="https://cdn.discordapp.com/avatars/945275057406627910/c0e8a7e97d27efd9a577bff57dcdf5f8.png?size=1024" alt="">
                <span class="ml-1 text-sm">Parzival.</span>
            </div>
            <div title="View" class="ml-auto flex items-center">
                <i class="ri-eye-fill"></i>
                <span class="ml-1">100</span>
            </div>
            <div title="Like" class="flex items-center">
                <i class="ri-heart-fill text-red-500"></i>
                <span class="ml-1">100</span>
            </div>
            <div title="Verified" class="flex items-center">
                <i class="ri-star-fill text-yellow-300"></i>
            </div>
        </div>
    </div>
</template>