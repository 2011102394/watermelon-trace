<template>
  <section class="date-section animate-on-scroll">
    <div class="section-inner">
      <div class="section-header">
        <div class="section-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <h2 class="section-title">生长历程</h2>
        <div class="section-line"></div>
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z"/>
              <circle cx="12" cy="9" r="2"/>
            </svg>
          </div>
          <div class="timeline-connector"></div>
          <div class="timeline-content">
            <span class="timeline-label">播种种植</span>
            <span class="timeline-date">{{ data.plantDate }}</span>
            <span class="timeline-desc">宁夏中卫沙坡头区旱作压砂地</span>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot growing">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22c-4-4-8-7.5-8-11a8 8 0 0116 0c0 3.5-4 7-8 11z"/>
              <path d="M12 8v8"/>
              <path d="M8 12l4-4 4 4"/>
            </svg>
          </div>
          <div class="timeline-connector"></div>
          <div class="timeline-content">
            <span class="timeline-label">自然生长</span>
            <span class="timeline-date">约90天</span>
            <span class="timeline-desc">日照充足、昼夜温差大、天然硒砂地</span>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot harvest">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01z"/>
            </svg>
          </div>
          <div class="timeline-content">
            <span class="timeline-label">采摘收获</span>
            <span class="timeline-date">{{ data.harvestDate }}</span>
            <span class="timeline-desc">精心挑选，糖度达标方可采摘</span>
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
.date-section {
  padding: 4rem 1.5rem;
  background: #ffffff;
}

.section-inner {
  max-width: 480px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
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

.timeline {
  position: relative;
  padding-left: 3rem;
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -3rem;
  top: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f0f6f2;
  border: 2px solid #1a5632;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.timeline-dot svg {
  width: 16px;
  height: 16px;
  color: #1a5632;
}

.timeline-dot.growing {
  background: #e8f5e9;
  border-color: #4caf50;
}

.timeline-dot.growing svg {
  color: #4caf50;
}

.timeline-dot.harvest {
  background: #fff9e6;
  border-color: #c8a45a;
}

.timeline-dot.harvest svg {
  color: #c8a45a;
}

.timeline-connector {
  position: absolute;
  left: -1.47rem;
  top: 36px;
  width: 2px;
  height: calc(100% - 36px);
  background: linear-gradient(180deg, #1a5632, #e0ebe4);
}

.timeline-item:last-child .timeline-connector {
  display: none;
}

.timeline-content {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-top: 0.3rem;
}

.timeline-label {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1a3a28;
  letter-spacing: 0.05em;
}

.timeline-date {
  font-size: 0.9rem;
  color: #2d8a56;
  font-weight: 500;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.05em;
}

.timeline-desc {
  font-size: 0.8rem;
  color: #7a8f82;
  line-height: 1.5;
}
</style>
