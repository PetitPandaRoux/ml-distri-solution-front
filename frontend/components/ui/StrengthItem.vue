<script setup lang="ts">
defineProps<{
  number: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="flex gap-6 sm:gap-8">
    <div class="shrink-0">
      <span class="text-5xl sm:text-6xl font-bold text-highlight/20">{{ number }}</span>
    </div>
    <div class="border-l border-gray-200 pl-6 sm:pl-8">
      <h3 class="text-xl font-bold text-primary mb-3">{{ title }}</h3>
      <p class="text-gray-500 italic leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>
