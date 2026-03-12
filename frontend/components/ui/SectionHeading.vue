<script setup lang="ts">
defineProps<{
  subtitle?: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="text-center max-w-2xl mx-auto mb-12">
    <p v-if="subtitle" class="text-sm font-semibold text-highlight uppercase tracking-wider mb-2">
      {{ subtitle }}
    </p>
    <h2 class="text-3xl sm:text-4xl font-bold text-primary mb-4">{{ title }}</h2>
    <p v-if="description" class="text-gray-500 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
