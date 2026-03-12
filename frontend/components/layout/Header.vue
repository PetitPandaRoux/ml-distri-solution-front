<script setup lang="ts">
const navOpen = ref(false)

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos services', to: '#services' },
  { label: 'Nos secteurs', to: '#secteurs' },
  { label: 'Logistique', to: '#services' },
  { label: 'Contact', to: '#contact' },
]
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="text-xl font-bold text-primary">
          ML Distribution
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            href="#contact"
            class="inline-flex items-center px-4 py-2 rounded-lg bg-highlight text-white text-sm font-medium hover:bg-highlight-light transition-colors"
          >
            Contactez-nous
          </a>
        </nav>

        <button
          class="md:hidden p-2 text-gray-600"
          @click="navOpen = !navOpen"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!navOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <nav
        v-if="navOpen"
        class="md:hidden pb-4 border-t border-gray-100 pt-4 flex flex-col gap-3"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          @click="navOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <a
          href="#contact"
          class="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-highlight text-white text-sm font-medium hover:bg-highlight-light transition-colors"
          @click="navOpen = false"
        >
          Contactez-nous
        </a>
      </nav>
    </div>
  </header>
</template>
