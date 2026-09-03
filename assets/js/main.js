/**
 * Digititup Agency Pvt. Ltd. - Core Application Script
 * Smooth Navigation, Interactive Canvas, Animated Counters, WhatsApp Form Dispatch
 */

(function () {
  'use strict';

  // Constants
  const WHATSAPP_PHONE = '9779812414094';
  const AGENCY_EMAIL = 'digititup@gmail.com';

  /* ==========================================================================
     1. Header Scroll & Mobile Drawer
     ========================================================================== */
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function handleScroll() {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile drawer listener handled at bottom of main.js

  /* ==========================================================================
     2. Active Navigation Spy on Scroll
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ==========================================================================
     3. Ambient Neural Mesh Canvas in Hero
     ========================================================================== */
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 16000), 65);
    const maxDistance = 140;
    let mouse = { x: null, y: null, radius: 160 };

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    });

    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 2 + 1;
        this.baseRadius = this.radius;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse interaction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 2.5;
            this.y -= (dy / dist) * force * 2.5;
            this.radius = this.baseRadius + force * 2.5;
          } else {
            this.radius = this.baseRadius;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(74, 222, 128, 0.85)';
        ctx.shadowColor = '#018d2e';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = 1 - dist / maxDistance;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(1, 141, 46, ${alpha * 0.28})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    }

    initParticles();
    animate();
  }

  /* ==========================================================================
     4. Animated Stat Counters
     ========================================================================== */
  const statElements = document.querySelectorAll('.stat-counter');
  let statsTriggered = false;

  function countUp(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const isRank = prefix.includes('#') || el.innerText.includes('#');
    const duration = 1800; // ms
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * target);

      el.innerHTML = `${prefix}${currentVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.innerHTML = `${prefix}${target}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsTriggered) {
          statsTriggered = true;
          statElements.forEach(el => countUp(el));
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    const metricsSection = document.querySelector('.metrics-section');
    if (metricsSection) statObserver.observe(metricsSection);
  } else {
    statElements.forEach(el => countUp(el));
  }

  /* ==========================================================================
     5. FAQ Accordion
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  /* ==========================================================================
     6. Work With Us Tab Switcher
     ========================================================================== */
  const tabBtns = document.querySelectorAll('.form-tab-btn');
  const formBoxes = document.querySelectorAll('.form-box');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabBtns.forEach(b => b.classList.remove('active'));
      formBoxes.forEach(box => box.classList.remove('active'));

      btn.classList.add('active');
      const targetBox = document.getElementById(targetId);
      if (targetBox) {
        targetBox.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     7. WhatsApp Interactive Form Handlers
     ========================================================================== */
  
  // Invest on Venture Form
  const investForm = document.getElementById('investForm');
  if (investForm) {
    investForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const name = document.getElementById('inv-name')?.value.trim();
      const email = document.getElementById('inv-email')?.value.trim();
      const phone = document.getElementById('inv-phone')?.value.trim();
      const venture = document.getElementById('inv-venture')?.value;
      const ticket = document.getElementById('inv-ticket')?.value;
      const message = document.getElementById('inv-message')?.value.trim();

      if (!name || !email || !venture) {
        alert('Please complete all required fields.');
        return;
      }

      // Build structured WhatsApp message
      const text = 
`🤝 *INVESTMENT / STRATEGIC PARTNERSHIP ENQUIRY*
━━━━━━━━━━━━━━━━━━━━━━━━━━
• *Name:* ${name}
• *Email:* ${email}
• *WhatsApp / Phone:* ${phone || 'Not specified'}
• *Venture of Interest:* ${venture}
• *Ticket Size / Allocation:* ${ticket || 'Flexible / Custom'}
• *Proposal / Thesis:*
${message || 'Requesting investor briefing and deck.'}
━━━━━━━━━━━━━━━━━━━━━━━━━━
_Sent via digititup.com portal_`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      // Visual feedback
      const submitBtn = investForm.querySelector('.form-submit-btn');
      if (submitBtn) {
        const origText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>✓ Connecting to WhatsApp...</span>`;
        submitBtn.style.background = '#15803d';
        setTimeout(() => {
          submitBtn.innerHTML = origText;
          submitBtn.style.background = '';
        }, 4000);
      }
    });
  }

  // Join the Team Form
  const teamForm = document.getElementById('teamForm');
  if (teamForm) {
    teamForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('team-name')?.value.trim();
      const email = document.getElementById('team-email')?.value.trim();
      const phone = document.getElementById('team-phone')?.value.trim();
      const role = document.getElementById('team-role')?.value;
      const portfolio = document.getElementById('team-portfolio')?.value.trim();
      const message = document.getElementById('team-message')?.value.trim();

      if (!name || !email || !role) {
        alert('Please complete all required fields.');
        return;
      }

      // Build structured WhatsApp message
      const text = 
`🚀 *CAREER APPLICATION - DIGITITUP TEAM*
━━━━━━━━━━━━━━━━━━━━━━━━━━
• *Applicant Name:* ${name}
• *Email:* ${email}
• *WhatsApp / Phone:* ${phone || 'Not specified'}
• *Target Role:* ${role}
• *Portfolio / GitHub:* ${portfolio || 'Provided upon request'}
• *Introduction & Work:*
${message || 'Looking forward to building high-velocity ventures with Digititup.'}
━━━━━━━━━━━━━━━━━━━━━━━━━━
_Sent via digititup.com careers portal_`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      // Visual feedback
      const submitBtn = teamForm.querySelector('.form-submit-btn');
      if (submitBtn) {
        const origText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>✓ Opening WhatsApp Application...</span>`;
        submitBtn.style.background = '#15803d';
        setTimeout(() => {
          submitBtn.innerHTML = origText;
          submitBtn.style.background = '';
        }, 4000);
      }
    });
  }

  /* ==========================================================================
     8. Video Reel Modal
     ========================================================================== */
  const videoModal = document.getElementById('videoModal');
  const openVideoBtns = document.querySelectorAll('.open-video-modal');
  const closeVideoBtn = document.querySelector('.modal-close-btn');
  const modalVideo = document.getElementById('modalVideoPlayer');

  if (videoModal && openVideoBtns.length) {
    openVideoBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        videoModal.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (modalVideo) {
          modalVideo.currentTime = 0;
          modalVideo.play().catch(() => {});
        }
      });
    });

    function closeVideo() {
      videoModal.classList.remove('open');
      document.body.style.overflow = '';
      if (modalVideo) {
        modalVideo.pause();
      }
    }

    if (closeVideoBtn) closeVideoBtn.addEventListener('click', closeVideo);

    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideo();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModal.classList.contains('open')) {
        closeVideo();
      }
    });
  }

  /* ==========================================================================
     9. Back to Top Button
     ========================================================================== */
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     10. Scroll Reveal Animations
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* ==========================================================================
     11. Interactive Card Spotlight Effect
     ========================================================================== */
  const glowCards = document.querySelectorAll('.venture-card, .flywheel-card, .pillar-card');
  glowCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

})();

/* ==========================================================================
   INTERACTIVE HERO STUDIO COCKPIT TERMINAL & COMPOUND SLIDER
   ========================================================================== */
(function() {
  const cockpitTabs = document.querySelectorAll('.cockpit-tab');
  const cBadge = document.getElementById('cBadge');
  const cKpiPill = document.getElementById('cKpiPill');
  const cVentureTitle = document.getElementById('cVentureTitle');
  const cVentureDesc = document.getElementById('cVentureDesc');
  const cmVal1 = document.getElementById('cmVal1');
  const cmLbl1 = document.getElementById('cmLbl1');
  const cmVal2 = document.getElementById('cmVal2');
  const cmLbl2 = document.getElementById('cmLbl2');
  const cmVal3 = document.getElementById('cmVal3');
  const cmLbl3 = document.getElementById('cmLbl3');
  const cActionBtn = document.getElementById('cActionBtn');
  const cActionText = document.getElementById('cActionText');
  const cActionNote = document.getElementById('cActionNote');
  const cockpitTerminal = document.getElementById('cockpitTerminal');

  const ventureData = {
    media: {
      badge: '★ HIGH-RETENTION PRODUCTION',
      badgeColor: '#ff4d4d',
      kpi: '5M+ Organic Views',
      title: 'Digititup Media',
      desc: 'Viral investigative explainers, documentary filmmaking, and commercial narrative engines engineered for maximum watch retention.',
      metrics: [
        { val: '5,000,000+', lbl: 'Views' },
        { val: '70%+', lbl: 'Avg Retention' },
        { val: 'Zero', lbl: 'Ad Spend / CAC' }
      ],
      link: 'https://media.digititup.com',
      linkText: 'Explore media.digititup.com',
      note: 'Verified YouTube & Reel Engine',
      glow: 'rgba(255, 42, 42, 0.28)'
    },
    academy: {
      badge: '★ APPLIED AI ACADEMY',
      badgeColor: '#38bdf8',
      kpi: '1,000+ Students',
      title: 'Digititup Academy',
      desc: 'Practical, cohort-based masterclasses teaching Generative AI, LLM automation workflows, and high-income digital creator skills.',
      metrics: [
        { val: '1,000+', lbl: 'Enrolled' },
        { val: '4.9 / 5', lbl: 'Student Score' },
        { val: '100%', lbl: 'Practical Labs' }
      ],
      link: 'https://academy.pratiktharu.com.np',
      linkText: 'Visit academy.pratiktharu.com.np',
      note: 'Cohort AI Masterclasses',
      glow: 'rgba(56, 189, 248, 0.28)'
    },
    tech: {
      badge: '★ ENTERPRISE AI ARCHITECTURE',
      badgeColor: '#21d800',
      kpi: '99.9% Uptime',
      title: 'Digititup Tech',
      desc: 'Full-stack web applications, bespoke business process automation, and autonomous AI agents built with engineering discipline.',
      metrics: [
        { val: '99.9%', lbl: 'System Uptime' },
        { val: '10x', lbl: 'Dev Velocity' },
        { val: 'Zero', lbl: 'Legacy Bloat' }
      ],
      link: '#work-with-us',
      linkText: 'Build With Tech Solutions',
      note: 'Enterprise Software & Cloud',
      glow: 'rgba(33, 216, 0, 0.28)'
    },
    unicorns: {
      badge: '★ GLOBAL DATA INTELLIGENCE',
      badgeColor: '#e5c07b',
      kpi: '1,404 Live Unicorns',
      title: 'Global Unicorns 3D',
      desc: 'Interactive 3D WebGL globe mapping every $1B+ tech unicorn worldwide, complete with financial valuation and city-level geocoding.',
      metrics: [
        { val: '1,404', lbl: 'Billion $ Techs' },
        { val: '$7.05T', lbl: 'Total Valued' },
        { val: '53', lbl: 'Nations Mapped' }
      ],
      link: 'unicorns.html',
      linkText: 'Launch 3D Earth Globe 🌍',
      note: 'Live CB Insights Telemetry',
      glow: 'rgba(229, 192, 123, 0.32)'
    }
  };

  if (cockpitTabs && cockpitTabs.length) {
    cockpitTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        cockpitTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const key = tab.dataset.venture;
        const data = ventureData[key];
        if (!data) return;

        if (cBadge) { cBadge.textContent = data.badge; cBadge.style.color = data.badgeColor; }
        if (cKpiPill) cKpiPill.textContent = data.kpi;
        if (cVentureTitle) cVentureTitle.textContent = data.title;
        if (cVentureDesc) cVentureDesc.textContent = data.desc;

        if (cmVal1) { cmVal1.textContent = data.metrics[0].val; cmVal1.style.color = data.badgeColor; }
        if (cmLbl1) cmLbl1.textContent = data.metrics[0].lbl;
        if (cmVal2) { cmVal2.textContent = data.metrics[1].val; cmVal2.style.color = data.badgeColor; }
        if (cmLbl2) cmLbl2.textContent = data.metrics[1].lbl;
        if (cmVal3) { cmVal3.textContent = data.metrics[2].val; cmVal3.style.color = data.badgeColor; }
        if (cmLbl3) cmLbl3.textContent = data.metrics[2].lbl;

        if (cActionBtn) {
          cActionBtn.href = data.link;
          if (cActionText) cActionText.textContent = data.linkText;
        }
        if (cActionNote) cActionNote.textContent = data.note;

        if (cockpitTerminal) {
          cockpitTerminal.style.boxShadow = `0 30px 90px rgba(0, 0, 0, 0.85), 0 0 50px ${data.glow}`;
          cockpitTerminal.style.borderColor = data.badgeColor + '55';
        }
      });
    });
  }

  // Compound Simulator Slider
  const compoundSlider = document.getElementById('compoundSlider');
  const compoundOutput = document.getElementById('compoundOutput');
  if (compoundSlider && compoundOutput) {
    const projection = {
      '1': 'Year 1: 5.2M Views · $180K Value',
      '2': 'Year 2: 12.8M Views · $420K Value',
      '3': 'Year 3: 28.5M Views · $1.1M Value',
      '4': 'Year 4: 55.0M Views · $2.8M Value',
      '5': 'Year 5: 110M+ Views · $6.5M+ (Moonshot)'
    };
    compoundSlider.addEventListener('input', (e) => {
      compoundOutput.textContent = projection[e.target.value] || 'Active';
    });
  }

  // Enhanced Mobile Menu Trigger
  const menuToggles = document.querySelectorAll('.menu-toggle, #menuToggle, .burger-btn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('mobileDrawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link, .mobile-nav-item');

  function openDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  menuToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  });

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDrawer();
    });
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        closeDrawer();
      }
    });
  }
})();
