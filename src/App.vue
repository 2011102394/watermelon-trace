<template>
  <div class="app">
    <HeroSection :data="traceData" />
    <OriginSection :data="traceData" />
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getTraceData } from './data/mock.js'
import HeroSection from './components/HeroSection.vue'
import OriginSection from './components/OriginSection.vue'
import FooterSection from './components/FooterSection.vue'

const traceData = ref(getTraceData())

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  if (id) {
    traceData.value = getTraceData(id)
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: #ffffff;
}
</style>
