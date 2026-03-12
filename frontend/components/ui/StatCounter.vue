<script setup lang="ts">
const props = defineProps<{
  value: number
  suffix?: string
  prefix?: string
  label: string
}>()

const displayed = ref(0)
const counterEl = ref<HTMLElement>()
let animated = false

function animateCount() {
  if (animated) return
  animated = true
  const duration = 2000
  const start = performance.now()

  function step(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayed.value = Math.round(eased * props.value)
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  if (!counterEl.value) return
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) animateCount()
    },
    { threshold: 0.3 },
  )
  observer.observe(counterEl.value)
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <div ref="counterEl" class="text-center">
    <p class="text-4xl sm:text-5xl font-bold text-white mb-2">
      {{ prefix }}{{ displayed.toLocaleString('fr-FR') }}{{ suffix }}
    </p>
    <p class="text-sm uppercase tracking-wider text-gray-400">{{ label }}</p>
  </div>
</template>
