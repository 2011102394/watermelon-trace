<template>
  <footer class="footer-section animate-on-scroll">
    <div class="footer-inner">
      <div class="footer-divider"></div>
      <div class="footer-brand">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
            <circle cx="9" cy="10" r="1" fill="currentColor"/>
            <circle cx="15" cy="10" r="1" fill="currentColor"/>
          </svg>
        </div>
        <p class="brand-slogan">追溯每一口甜蜜</p>
        <p class="brand-sub">品质保证 · 安全可溯</p>
      </div>
      <div class="footer-cert">
        <div class="cert-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="cert-icon">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
          <span>品质保障</span>
        </div>
        <div class="cert-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="cert-icon">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
          </svg>
          <span>产地溯源</span>
        </div>
        <div class="cert-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="cert-icon">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <path d="M22 4L12 14.01l-3-3"/>
          </svg>
          <span>绿色认证</span>
        </div>
      </div>
      <p class="footer-copyright">宁夏硒砂瓜溯源系统</p>
      <div class="footer-support">
        <p>中煤航测遥感集团</p>
        <p>陕西煤航安全印务有限公司</p>
        <p class="support-label">提供技术支持</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  padding: 3rem 1.5rem 2rem;
  background: linear-gradient(180deg, #f8faf9 0%, #eef3f0 100%);
}

.footer-inner {
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
}

.footer-divider {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c8a45a, transparent);
  margin: 0 auto 2rem;
}

.footer-brand {
  margin-bottom: 2rem;
}

.brand-icon {
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  color: #1a5632;
}

.brand-icon svg {
  width: 100%;
  height: 100%;
}

.brand-slogan {
  font-size: 1.2rem;
  color: #1a5632;
  font-weight: 600;
  letter-spacing: 0.2em;
  margin: 0 0 0.4rem;
}

.brand-sub {
  font-size: 0.8rem;
  color: #7a8f82;
  letter-spacing: 0.15em;
  margin: 0;
}

.footer-cert {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.cert-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.cert-icon {
  width: 28px;
  height: 28px;
  color: #2d8a56;
}

.cert-item span {
  font-size: 0.7rem;
  color: #7a8f82;
  letter-spacing: 0.05em;
}

.footer-copyright {
  font-size: 0.7rem;
  color: #a0b0a6;
  letter-spacing: 0.1em;
  margin: 0 0 1.2rem;
}

.footer-support {
  padding-top: 1rem;
  border-top: 1px solid rgba(26, 86, 50, 0.1);
}

.footer-support p {
  font-size: 0.75rem;
  color: #7a8f82;
  letter-spacing: 0.1em;
  margin: 0;
  line-height: 1.8;
}

.footer-support .support-label {
  font-size: 0.65rem;
  color: #a0b0a6;
  margin-top: 0.1rem;
}
</style>
