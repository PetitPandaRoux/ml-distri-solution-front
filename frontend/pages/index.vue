<script setup lang="ts">
const sectors = [
  {
    icon: '💻',
    title: 'High-tech',
    description: 'Les dernières innovations tech, prêtes à conquérir toutes les marketplaces européennes.',
    link: '#',
  },
  {
    icon: '✨',
    title: 'Beauté',
    description: 'Des marques de beauté premium, sélectionnées pour briller sur les marketplaces.',
    link: '#',
  },
  {
    icon: '🌿',
    title: 'Compléments alimentaires',
    description: 'Bien-être, santé, nature : vos compléments alimentaires en vente partout en Europe.',
    link: '#',
  },
]

const stats = [
  { value: 50000, suffix: '+', label: 'Références distribuées' },
  { value: 100, suffix: '+', label: 'Marques accompagnées' },
  { value: 10000, suffix: '+', label: 'Produits expédiés chaque mois' },
]

const services = [
  {
    icon: '📦',
    title: 'Solution logistique',
    description: 'Notre entrepôt basé en Bretagne assure un stockage sécurisé et une expédition rapide à l\'échelle européenne.',
  },
  {
    icon: '🌐',
    title: 'Distribution à 360°',
    description: 'Nous diffusons vos produits sur toutes les marketplaces clés pour une visibilité maximale et des ventes optimisées.',
  },
  {
    icon: '👥',
    title: 'Une équipe dédiée',
    description: 'Experts marketplace, logisticiens, conseillers… notre équipe engagée pilote chaque aspect de votre distribution.',
  },
]

const strengths = [
  {
    number: '01',
    title: 'Maîtrise des marketplaces',
    description: 'Nous optimisons chaque aspect de votre présence en ligne : création de contenus attractifs, gestion des prix et des stocks, campagnes publicitaires ciblées et respect des standards des marketplaces.',
  },
  {
    number: '02',
    title: 'Logistique performante et rapide',
    description: 'Nous garantissons un stockage fiable, une préparation de commande rigoureuse et des expéditions rapides, pour offrir à vos clients une livraison sans faille et renforcer leur satisfaction.',
  },
  {
    number: '03',
    title: 'Relation de confiance',
    description: 'Nous collaborons en toute transparence, dans le respect de votre stratégie commerciale, avec un suivi régulier et un engagement constant pour valoriser votre marque et développer vos ventes.',
  },
]

const marketplaces = [
  'Amazon', 'Cdiscount', 'Fnac', 'Darty',
  'ManoMano', 'Rakuten', 'eBay', 'Leclerc',
]
</script>

<template>
  <div>
    <!-- 1. Hero -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-accent overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-highlight rounded-full blur-3xl" />
        <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-wide">
          ML Distribution
        </h1>
        <p class="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Votre marque, sur toutes les marketplaces.
        </p>
        <a
          href="#contact"
          class="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-highlight text-white font-semibold text-lg hover:bg-highlight-light transition-colors shadow-lg shadow-highlight/25"
        >
          Nous contacter
        </a>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- 2. Nos secteurs -->
    <section id="secteurs" class="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <UiSectionHeading
          subtitle="Nos secteurs"
          title="Des marchés que nous maîtrisons"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="sector in sectors"
            :key="sector.title"
            class="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-highlight/20 transition-all duration-300 text-center"
          >
            <div class="text-5xl mb-6">{{ sector.icon }}</div>
            <h3 class="text-xl font-bold text-primary mb-3">{{ sector.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-6 italic">{{ sector.description }}</p>
            <a
              :href="sector.link"
              class="inline-flex items-center text-sm font-semibold text-highlight hover:text-highlight-light transition-colors uppercase tracking-wider"
            >
              Voir plus
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Stats banner -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold text-white text-center mb-14">
          Nos marques distribuées
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <UiStatCounter
            v-for="stat in stats"
            :key="stat.label"
            :value="stat.value"
            :suffix="stat.suffix"
            :label="stat.label"
          />
        </div>
      </div>
    </section>

    <!-- 4. Nos services -->
    <section id="services" class="py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <UiSectionHeading
          subtitle="Nos services"
          title="Une distribution complète"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UiFeatureCard
            v-for="service in services"
            :key="service.title"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
          />
        </div>
        <div class="text-center mt-12">
          <a
            href="#contact"
            class="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-highlight text-white font-semibold hover:bg-highlight-light transition-colors shadow-lg shadow-highlight/25 uppercase tracking-wider"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>

    <!-- 5. Nos forces -->
    <section class="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <UiSectionHeading
          subtitle="Nos forces"
          title="Pourquoi nous choisir"
        />
        <div class="space-y-12">
          <UiStrengthItem
            v-for="strength in strengths"
            :key="strength.number"
            :number="strength.number"
            :title="strength.title"
            :description="strength.description"
          />
        </div>
      </div>
    </section>

    <!-- 6. Nos marketplaces -->
    <section class="py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <UiSectionHeading
          subtitle="Nos marketplaces"
          title="Présents partout en Europe"
        />
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div
            v-for="mp in marketplaces"
            :key="mp"
            class="flex items-center justify-center h-24 rounded-xl border border-gray-200 bg-gray-50 hover:border-highlight/30 hover:shadow-md transition-all duration-300"
          >
            <span class="text-lg font-semibold text-gray-400">{{ mp }}</span>
          </div>
        </div>
        <p class="text-center text-gray-400 mt-8 text-sm italic">Et bien d'autres…</p>
      </div>
    </section>

    <!-- 7. Contact -->
    <section id="contact" class="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary-light to-accent">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold text-white text-center mb-14 uppercase">
          Nous contacter
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div class="md:col-span-3">
            <UiContactForm />
          </div>
          <div class="md:col-span-2 flex flex-col justify-center">
            <h3 class="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Contact</h3>
            <div class="border-t border-white/10 pt-4">
              <address class="text-gray-300 not-italic leading-relaxed space-y-1">
                <p class="font-semibold text-white">ML Distribution</p>
                <p>Z.A. du Bisconte</p>
                <p>56680 Plouhinec</p>
                <p>Bretagne, FR</p>
                <p class="mt-4">
                  <a href="mailto:contact@example.com" class="text-highlight hover:text-highlight-light transition-colors">
                    contact@example.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
