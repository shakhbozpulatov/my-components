<template>
  <div class="h-[100vh] bg-amber-700 p-3 pt-[20px] text-white">
    <ul>
      <li class="cursor-pointer">
        <p class="font-semibold py-3">Base</p>
        <ul>
          <li
            class="text-[14px] hover:bg-white hover:text-black rounded transition duration-100"
          >
            <router-link
              exact-active-class="active-route"
              class="w-full"
              :to="{ name: 'Input' }"
            >
              <p class="p-2">Input</p>
            </router-link>
          </li>
          <li
            class="text-[14px] hover:bg-white hover:text-black rounded transition duration-100"
          >
            <router-link
              exact-active-class="active-route"
              class="w-full"
              :to="{ name: 'Button' }"
            >
              <p class="p-2">Button</p>
            </router-link>
          </li>
          <li
            class="text-[14px] hover:bg-white hover:text-black rounded transition duration-100"
          >
            <router-link
              exact-active-class="active-route"
              class="w-full"
              :to="{ name: 'Table' }"
            >
              <p class="p-2">Table</p>
            </router-link>
          </li>
          <li
            class="text-[14px] hover:bg-white hover:text-black rounded transition duration-100"
          >
            <router-link
              exact-active-class="active-route"
              class="w-full"
              :to="{ name: 'Carusel' }"
            >
              <p class="p-2">Carusel</p>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.active-route {
  background-color: white;
}
</style>
