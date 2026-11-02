/**
 * Main Application Logic & Interactivity
 * Dhairya Verma Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initDynamicTyping();
  initProjects();
  initModals();
  initContactForm();
  initStatsCounter();
  initBackToTop();
  initFooterYear();
});

/* ===================================================================
   1. NAVBAR & ACTIVE NAVIGATION LINK TRACKING
   =================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const desktopLinks = document.querySelectorAll('.nav-link');

  // Sticky Navbar on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        const icon = mobileBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }

  // Active section tracking with IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* ===================================================================
   2. DYNAMIC HERO TYPING ANIMATION
   =================================================================== */
function initDynamicTyping() {
  const typedElem = document.getElementById('typed-text');
  if (!typedElem) return;

  const roles = (typeof portfolioData !== 'undefined' && portfolioData.profile && portfolioData.profile.roles) 
    ? portfolioData.profile.roles 
    : ['Data Scientist', 'C++ Developer', 'Full Stack Engineer', 'AI Specialist'];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
      typedElem.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 50;
    } else {
      typedElem.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 1800; // Pause at full string
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // Pause before new role
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ===================================================================
   3. PROJECTS RENDERING & CATEGORY FILTERING
   =================================================================== */
function initProjects() {
  const container = document.getElementById('projects-container');
  const filterBtns = document.querySelectorAll('#project-filters .filter-btn');

  if (!container || typeof portfolioData === 'undefined' || !portfolioData.projects) return;

  function renderProjects(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all' 
      ? portfolioData.projects 
      : portfolioData.projects.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card glass-card animate-fade-in';
      card.setAttribute('data-id', project.id);

      const tagsHtml = project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');

      card.innerHTML = `
        <div class="project-thumbnail-wrapper">
          ${project.imageSvg}
          <div class="project-badge-top">${project.categoryLabel}</div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-summary">${project.summary}</p>
          <div class="project-tags">
            ${tagsHtml}
          </div>
          <div class="project-links">
            <button class="project-btn-link project-btn-primary view-project-btn" data-id="${project.id}">
              <span>View Details</span>
              <i class="fas fa-arrow-right"></i>
            </button>
            <div class="social-pills">
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="View Code">
                <i class="fab fa-github"></i>
              </a>
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="Live Demo">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    // Attach event listeners for details modal
    document.querySelectorAll('.view-project-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-id');
        openProjectModal(id);
      });
    });
  }

  // Initial render
  renderProjects('all');

  // Filter button click events
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });
}

/* ===================================================================
   4. MODAL DIALOGS (PROJECT DETAILS & HIRE ME)
   =================================================================== */
function initModals() {
  const projectModal = document.getElementById('project-modal');
  const projectModalClose = document.getElementById('modal-close');
  const hireModal = document.getElementById('hire-modal');
  const hireModalClose = document.getElementById('hire-modal-close');
  const hireTriggers = document.querySelectorAll('.hire-me-trigger');
  const hireForm = document.getElementById('hire-form');

  // Project Modal Close
  if (projectModal && projectModalClose) {
    projectModalClose.addEventListener('click', () => {
      projectModal.classList.remove('open');
      projectModal.setAttribute('aria-hidden', 'true');
    });

    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.classList.remove('open');
        projectModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Hire Me Modal Open & Close
  if (hireModal && hireModalClose) {
    hireTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        hireModal.classList.add('open');
        hireModal.setAttribute('aria-hidden', 'false');
      });
    });

    hireModalClose.addEventListener('click', () => {
      hireModal.classList.remove('open');
      hireModal.setAttribute('aria-hidden', 'true');
    });

    hireModal.addEventListener('click', (e) => {
      if (e.target === hireModal) {
        hireModal.classList.remove('open');
        hireModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Hire Me Form Submit
  if (hireForm) {
    hireForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('hire-name').value;
      const type = document.getElementById('hire-type').value;

      showToast('Inquiry Received!', `Thank you ${name}. I'll get back to you regarding ${type} within 24 hours.`, 'fas fa-check-circle');
      hireForm.reset();
      hireModal.classList.remove('open');
      hireModal.setAttribute('aria-hidden', 'true');
    });
  }

  // Global Escape Key Listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal) projectModal.classList.remove('open');
      if (hireModal) hireModal.classList.remove('open');
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-body-content');
  if (!modal || !content || typeof portfolioData === 'undefined') return;

  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const featuresHtml = project.details.keyFeatures
    .map(f => `<li><i class="fas fa-check-circle text-orange mr-2"></i> ${f}</li>`)
    .join('');

  const techStackHtml = project.details.techStack
    .map(t => `<span class="skill-badge">${t}</span>`)
    .join('');

  content.innerHTML = `
    <div style="border-radius: 12px; overflow: hidden; margin-bottom: 24px; max-height: 280px;">
      ${project.imageSvg}
    </div>
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 10px;">
      <span class="project-badge-top" style="position: static;">${project.categoryLabel}</span>
      <div class="social-pills">
        <a href="${project.githubUrl}" target="_blank" class="social-icon-btn" title="View Source Code"><i class="fab fa-github"></i></a>
        <a href="${project.liveUrl}" target="_blank" class="social-icon-btn" title="Open Live Site"><i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <h2 style="font-size: 1.8rem; margin-bottom: 16px; color: var(--text-white);">${project.title}</h2>
    <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 24px;">${project.details.description}</p>
    
    <h4 style="font-size: 1.15rem; margin-bottom: 14px; color: var(--text-white);"><i class="fas fa-star text-orange mr-2"></i> Core Architecture & Features</h4>
    <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; color: var(--text-muted); font-size: 0.95rem;">
      ${featuresHtml}
    </ul>

    <h4 style="font-size: 1.15rem; margin-bottom: 14px; color: var(--text-white);"><i class="fas fa-layer-group text-orange mr-2"></i> Technologies Used</h4>
    <div class="tags-container" style="margin-bottom: 28px;">
      ${techStackHtml}
    </div>

    <div style="display: flex; gap: 14px; flex-wrap: wrap;">
      <a href="${project.liveUrl}" target="_blank" class="btn btn-primary">
        <span>Visit Live Demo</span>
        <i class="fas fa-external-link-alt"></i>
      </a>
      <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
        <i class="fab fa-github"></i>
        <span>Explore GitHub Repo</span>
      </a>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

/* ===================================================================
   5. INTERACTIVE CONTACT FORM & TOAST ALERTS
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      showToast('Please fill all fields', 'All fields marked with an asterisk are required.', 'fas fa-exclamation-triangle');
      return;
    }

    const submitBtn = document.getElementById('submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>`;
    submitBtn.disabled = true;

    // Simulate reliable async submission
    setTimeout(() => {
      showToast(
        'Message Sent Successfully!',
        `Thank you ${nameInput.value}! I have received your message and will reply via ${emailInput.value} shortly.`,
        'fas fa-paper-plane'
      );
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 900);
  });
}

function showToast(title, message, iconClass = 'fas fa-info-circle') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="${iconClass} toast-icon"></i>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.35s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

/* ===================================================================
   6. STATS COUNTER ANIMATION
   =================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target') || '0', 10);
          const suffix = stat.textContent.includes('%') ? '%' : '+';
          let count = 0;
          const duration = 1500;
          const step = Math.ceil(target / (duration / 30));

          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              stat.textContent = `${target}${suffix}`;
              clearInterval(timer);
            } else {
              stat.textContent = `${count}${suffix}`;
            }
          }, 30);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsCard = document.querySelector('.stats-glass-card');
  if (statsCard) observer.observe(statsCard);
}

/* ===================================================================
   7. BACK TO TOP BUTTON & FOOTER YEAR
   =================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initFooterYear() {
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}
