<template>
  <section class="origin-section animate-on-scroll">
    <div class="section-inner">
      <div class="section-header">
        <div class="section-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
        </div>
        <h2 class="section-title">产地信息</h2>
        <div class="section-line"></div>
      </div>

      <div class="origin-card">
        <div class="origin-address">
          <div class="address-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <p class="address-text">{{ data.origin.address }}</p>
        </div>

        <div class="origin-details">
          <div class="detail-row">
            <span class="detail-label">种植农户</span>
            <span class="detail-value farmer-name">{{ data.origin.farmer }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">联系电话</span>
            <a :href="'tel:' + data.phone" class="detail-value phone-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="phone-icon">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {{ data.phone }}
            </a>
          </div>
          <div class="detail-row">
            <span class="detail-label">批次编号</span>
            <span class="detail-value batch-no">{{ data.batchNo }}</span>
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
.origin-section {
  padding: 4rem 1.5rem;
  background: #ffffff;
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
  display: none;
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

.origin-card {
  background: #f8faf9;
  border: 1px solid #e8f0eb;
  border-radius: 1rem;
  overflow: hidden;
}

.origin-address {
  background: linear-gradient(135deg, #1a5632, #2d8a56);
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
}

.address-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 2px;
}

.address-icon svg {
  width: 100%;
  height: 100%;
}

.address-text {
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.7;
  letter-spacing: 0.05em;
  margin: 0;
}

.origin-details {
  padding: 1.2rem 1.5rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 0;
  border-bottom: 1px solid #eef3f0;
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-label {
  font-size: 0.85rem;
  color: #7a8f82;
  letter-spacing: 0.05em;
}

.detail-value {
  font-size: 0.95rem;
  color: #1a3a28;
  font-weight: 500;
}

.farmer-name {
  font-size: 1rem;
  font-weight: 600;
  color: #1a5632;
}

.phone-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #2d8a56;
  text-decoration: none;
  transition: color 0.2s;
}

.phone-link:active {
  color: #1a5632;
}

.phone-icon {
  width: 16px;
  height: 16px;
}

.batch-no {
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #c8a45a;
  letter-spacing: 0.1em;
}
</style>
