<script setup lang="ts">
const form = reactive({
  company: '',
  email: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  // Phase 1: static only, no backend
  // Phase 2+: wire to PocketBase or email API
  submitted.value = true
}
</script>

<template>
  <div v-if="!submitted">
    <form class="space-y-5" @submit.prevent="handleSubmit">
      <div>
        <label for="company" class="block text-sm font-medium text-gray-300 mb-1">Nom de l'entreprise</label>
        <input
          id="company"
          v-model="form.company"
          type="text"
          required
          class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
          placeholder="Votre entreprise"
        >
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
          placeholder="contact@entreprise.com"
        >
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          required
          class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent resize-none"
          placeholder="Votre message..."
        />
      </div>
      <button
        type="submit"
        class="w-full px-8 py-4 rounded-xl bg-highlight text-white font-semibold text-lg hover:bg-highlight-light transition-colors shadow-lg shadow-highlight/25"
      >
        Envoyer
      </button>
    </form>
  </div>
  <div v-else class="text-center py-8">
    <div class="w-16 h-16 rounded-full bg-highlight/20 text-highlight flex items-center justify-center mx-auto mb-4">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <p class="text-xl font-semibold text-white mb-2">Merci pour votre message !</p>
    <p class="text-gray-300">Nous vous recontacterons dans les plus brefs délais.</p>
  </div>
</template>
