<template>
  <section class="hero-section">
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>
    <img src="../assets/images/logo.png" alt="Logo" class="hero-logo" />
    <div class="hero-content">
      <div class="hero-badge">品质溯源</div>
      <h1 class="hero-title">{{ data.productName }}</h1>
      <p class="hero-subtitle">每一口甜蜜，都值得追溯</p>
      <div class="hero-id">
        <span class="id-label">溯源编号</span>
        <span class="id-value">{{ data.id }}</span>
      </div>
      <div class="hero-scroll-hint">
        <span>下滑查看详情</span>
        <div class="scroll-arrow"></div>
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
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 12vh;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('../assets/images/9.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(160deg, rgba(13, 59, 30, 0.85) 0%, rgba(26, 86, 50, 0.75) 30%, rgba(30, 107, 62, 0.7) 60%, rgba(45, 138, 86, 0.65) 100%);
  background-image:
    radial-gradient(circle at 20% 50%, rgba(200, 164, 90, 0.08) 1px, transparent 1px),
    radial-gradient(circle at 80% 30%, rgba(200, 164, 90, 0.06) 1px, transparent 1px),
    linear-gradient(160deg, rgba(13, 59, 30, 0.92) 0%, rgba(26, 86, 50, 0.88) 30%, rgba(30, 107, 62, 0.85) 60%, rgba(45, 138, 86, 0.82) 100%);
  background-size: 60px 60px, 40px 40px, 100% 100%;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem 1.5rem;
  animation: fadeInUp 1s ease-out;
}

.hero-logo {
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  z-index: 3;
  height: 52px;
  width: auto;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid #ffffff;
  border-radius: 0.5rem;
  padding: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

.hero-badge {
  display: inline-block;
  padding: 0.4rem 1.5rem;
  border: 1px solid rgba(200, 164, 90, 0.6);
  border-radius: 2rem;
  color: #c8a45a;
  font-size: 0.85rem;
  letter-spacing: 0.3em;
  margin-bottom: 2rem;
  background: rgba(200, 164, 90, 0.08);
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.15em;
  margin: 0 0 1rem;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.2em;
  margin: 0 0 2.5rem;
  font-weight: 300;
}

.hero-id {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  padding: 0.8rem 1.5rem;
}

.id-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.1em;
}

.id-value {
  font-size: 1rem;
  color: #c8a45a;
  font-weight: 600;
  letter-spacing: 0.15em;
  font-family: 'Courier New', monospace;
}

.hero-scroll-hint {
  position: absolute;
  bottom: -6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  transform: rotate(45deg);
  animation: bounceDown 2s infinite;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounceDown {
  0%, 100% { transform: rotate(45deg) translateY(0); opacity: 0.3; }
  50% { transform: rotate(45deg) translateY(8px); opacity: 0.8; }
}
</style>
