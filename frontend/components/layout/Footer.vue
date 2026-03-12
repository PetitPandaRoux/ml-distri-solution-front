<template>
  <footer class="bg-primary text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4">ML Distribution</h3>
          <p class="text-gray-300 text-sm leading-relaxed">
            Grossiste et acteur majeur du e-commerce en Europe depuis 2020.
          </p>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Navigation</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-sm text-gray-300 hover:text-white transition-colors">
                Accueil
              </NuxtLink>
            </li>
            <li>
              <a href="#contact" class="text-sm text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Adresse</h4>
          <address class="text-sm text-gray-300 not-italic leading-relaxed">
            Z.A. du Bisconte<br>
            56680 Plouhinec<br>
            Bretagne, FR
          </address>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-400">
          &copy; {{ new Date().getFullYear() }} ML Distribution. Tous droits réservés.
        </p>
        <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
          Mentions légales
        </a>
      </div>
    </div>
  </footer>
</template>
