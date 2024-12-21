<template>
  <div class="flex flex-col gap-5">
    <p class="text-3xl font-bold">Buttons</p>
    <div>
      <p class="text-xl font-semibold mb-2">Base</p>
      <div class="flex items-center gap-3 mb-2">
        <MyButton type="black">Black</MyButton>
        <MyButton type="primary">Primary</MyButton>
        <MyButton type="secondary">Secondary</MyButton>
        <MyButton type="danger">Danger</MyButton>
        <MyButton type="info">Info</MyButton>
      </div>

      <code id="base-block" ref="baseButtonsRef" data-lang="vue">
        <pre class="p-2">{{ `
<template>
  <div class="flex items-center gap-3 mb-5">
    <my-button type="black">Black</my-button>
    <my-button type="primary">Primary</my-button>
    <my-button type="secondary">Secondary</my-button>
    <my-button type="danger">Danger</my-button>
    <my-button type="info">Info</my-button>
  </div>
</template>
          `.trim() }}</pre>
      </code>
    </div>
    <div>
      <p class="text-xl font-semibold mb-2">Loading</p>
      <div class="flex items-center gap-3 mb-2">
        <MyButton loading type="black">Black</MyButton>
        <MyButton loading type="primary">Primary</MyButton>
      </div>

      <code id="loading-block" ref="loadingButtonsRef" data-lang="vue">
        <pre>{{
          `
<template>
  <div class="flex items-center gap-3">
    <my-button loading type="black">Black</my-button>
    <my-button loading type="primary">Primary</my-button>
  </div>
</template>
        `.trim()
        }}</pre>
      </code>
    </div>
    <div>
      <p class="text-xl font-semibold mb-2">Icon button</p>
      <div class="flex items-center gap-3 mb-2">
        <MyButton :left-icon="EnvelopeIcon" type="black">Black</MyButton>
        <MyButton :right-icon="EnvelopeIcon" type="primary">Primary</MyButton>
      </div>

      <code id="icon-block" ref="iconButtonsRef" data-lang="vue">
        <pre>{{
          `
<template>
  <div class="flex items-center gap-3">
    <my-button :left-icon="EnvelopeIcon" type="black">Black</my-button>
    <my-button :right-icon="EnvelopeIcon" type="primary">Primary</my-button>
  </div>
</template>
        `.trim()
        }}</pre>
      </code>
    </div>
    <div>
      <p class="text-xl font-semibold mb-2">Size</p>
      <div class="flex items-center gap-3 mb-2">
        <MyButton :right-icon="EnvelopeIcon" type="black" size="small"
          >Small</MyButton
        >
        <MyButton :right-icon="EnvelopeIcon" type="black">Medium</MyButton>
        <MyButton :right-icon="EnvelopeIcon" type="black" size="large"
          >Large</MyButton
        >
      </div>

      <code id="size-block" ref="sizeButtonsRef" data-lang="vue">
        <pre>{{
          `
<template>
  <div class="flex items-center gap-3">
    <my-button :right-icon="EnvelopeIcon" type="black" size="small"
      >Small</my-button
    >
    <my-button :right-icon="EnvelopeIcon" type="black">Medium</my-button>
    <my-button :right-icon="EnvelopeIcon" type="black" size="large"
      >Large</my-button
    >
  </div>
</template>
        `.trim()
        }}</pre>
      </code>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useHighlight } from "@/modules/shiki";

import MyButton from "@/components/Button/MyButton.vue";
import { EnvelopeIcon } from "@heroicons/vue/20/solid";

const baseButtonsRef = ref<HTMLElement>();
const loadingButtonsRef = ref<HTMLElement>();
const iconButtonsRef = ref<HTMLElement>();
const sizeButtonsRef = ref<HTMLElement>();

onMounted(() => {
  useHighlight(
    baseButtonsRef,
    loadingButtonsRef,
    iconButtonsRef,
    sizeButtonsRef,
  );
});
</script>

<style scoped></style>
