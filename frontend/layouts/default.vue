<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-900">
    <LayoutHeader />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
