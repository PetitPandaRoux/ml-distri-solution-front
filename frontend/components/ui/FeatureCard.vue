<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-highlight/20 transition-all duration-300">
    <div class="w-12 h-12 rounded-xl bg-highlight/10 text-highlight flex items-center justify-center mb-5 group-hover:bg-highlight group-hover:text-white transition-colors duration-300">
      <span class="text-2xl" v-html="icon" />
    </div>
    <h3 class="text-lg font-bold text-primary mb-2">{{ title }}</h3>
    <p class="text-sm text-gray-500 leading-relaxed">{{ description }}</p>
  </div>
</template>
