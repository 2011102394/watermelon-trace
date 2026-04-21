<template>
  <section class="product-section animate-on-scroll">
    <div class="section-inner">
      <div class="section-header">
        <div class="section-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <h2 class="section-title">品种规格</h2>
        <div class="section-line"></div>
      </div>

      <div class="product-grid">
        <div class="product-card main-card">
          <div class="card-glow"></div>
          <div class="card-content">
            <span class="card-label">品种</span>
            <span class="card-value highlight">{{ data.variety }}</span>
          </div>
        </div>

        <div class="product-card">
          <div class="card-content">
            <span class="card-label">重量</span>
            <span class="card-value">{{ data.weight }}</span>
          </div>
        </div>

        <div class="product-card">
          <div class="card-content">
            <span class="card-label">规格</span>
            <span class="card-value">{{ data.spec }}</span>
          </div>
        </div>

        <div class="product-card">
          <div class="card-content">
            <span class="card-label">种植方式</span>
            <span class="card-value">{{ data.growMethod }}</span>
          </div>
        </div>

        <div class="product-card cert-card">
          <div class="card-content">
            <span class="card-label">品质认证</span>
            <span class="card-value cert-value">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="cert-icon">
                <path d="M9 12l2 2 4-4"/>
                <path d="M12 2l2.4 2.4L17 2.8l.6 3.6L21 7l-1.6 3L21 13l-3.4.6-.6 3.6-2.6-1.6L12 18l-2.4-2.4-2.6 1.6-.6-3.6L3 13l1.6-3L3 7l3.4-.6.6-3.6 2.6 1.6z"/>
              </svg>
              {{ data.certification }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: { type: Object, required: true }
})
</script>

<style scoped>
.product-section {
  padding: 4rem 1.5rem;
  background: linear-gradient(180deg, #f0f6f2 0%, #ffffff 100%);
}

.section-inner {
  max-width: 480px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  color: #1a5632;
}

.section-icon svg {
  width: 100%;
  height: 100%;
}

.section-title {
  font-size: 1.5rem;
  color: #1a5632;
  font-weight: 600;
  letter-spacing: 0.15em;
  margin: 0 0 0.8rem;
}

.section-line {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #c8a45a, #d4b76a);
  margin: 0 auto;
}

.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
}

.product-card {
  background: #ffffff;
  border: 1px solid #e8f0eb;
  border-radius: 0.8rem;
  padding: 1.2rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:active {
  transform: scale(0.98);
}

.main-card {
  grid-column: span 2;
  background: linear-gradient(135deg, #1a5632, #237a45);
  border: none;
  position: relative;
  overflow: hidden;
}

.main-card .card-glow {
  position: absolute;
  top: -50%;
  right: -30%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(200, 164, 90, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.main-card .card-label {
  color: rgba(255, 255, 255, 0.7);
}

.main-card .card-value {
  color: #ffffff;
  font-size: 1.5rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
}

.card-label {
  font-size: 0.75rem;
  color: #7a8f82;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.card-value {
  font-size: 1rem;
  color: #1a3a28;
  font-weight: 600;
}

.highlight {
  font-size: 1.5rem;
  letter-spacing: 0.1em;
}

.cert-card {
  grid-column: span 2;
  background: linear-gradient(135deg, #faf8f0 0%, #fff9e6 100%);
  border-color: #e8dfc0;
}

.cert-value {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8a7a3a;
}

.cert-icon {
  width: 20px;
  height: 20px;
  color: #c8a45a;
}
</style>
