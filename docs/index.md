---
hide:
  - navigation
  - toc
---

<div class="about-grid">
  <div class="about-photo">
    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" alt="Workspace">
  </div>
  
  <div class="about-content">
    <div class="metrics-bar">
      <span>🎓 <strong>Industrial Engineering</strong></span> | 
      <span>🎓 <strong>Master in Data Science, Big Data & AI</strong></span> | 
      <span>🧑‍💻 <strong>42 Madrid Programming School</strong></span> | 
      <span>📍 <strong>Madrid, Spain</strong></span>
    </div>
    
    <div class="callout-box">
      <h3>📊 About Me</h3>
      <p>
        Industrial Engineer and data analyst with a habit of asking "where does this number come from?" I've spent years working with data that people make real decisions on: analyzing it, validating its quality, and tracing broken data flows back to their source to resolve incidents before they became bigger problems.
      </p>
      <p>
        Now I'm building toward data engineering on purpose: learning the tools and practices behind the modern data stack and putting them to work. I care about work that's clean, reliable and useful to the people on the other side.
      </p>
    </div>
  </div>
</div>

<h2 class="section-heading">🚀 FEATURED PROJECTS</h2>

<div class="projects-grid">
  <a href="projects/data-engineering/data-quality-control/" class="project-card">
    <div class="card-tag">DATA ENGINEERING</div>
    <h3>Data Quality Control</h3>
    <p>Arquitectura de validación, gobierno del dato y flujos automatizados de control de calidad en entornos analíticos.</p>
    <span class="card-footer">Ver arquitectura →</span>
  </a>

  <a href="projects/42-school/c/push_swap/" class="project-card">
    <div class="card-tag">ALGORITHMS IN C</div>
    <h3>push_swap</h3>
    <p>Optimized two-stack sorting algorithm with complexity analysis and move visualization.</p>
    <span class="card-footer">View code & benchmarks →</span>
  </a>

  <a href="projects/42-school/python/a-maze-ing/" class="project-card">
    <div class="card-tag">PYTHON & ALGORITHMS</div>
    <h3>A-Maze-ing</h3>
    <p>Maze generator and solver implementing Prim, Recursive Backtracker, BFS and visual rendering.</p>
    <span class="card-footer">Explore project →</span>
  </a>
</div>

<script>
  document.querySelectorAll('.mega-category').forEach(cat => {
    cat.addEventListener('mouseenter', () => {
      document.querySelectorAll('.mega-category').forEach(c => c.classList.remove('active'));
      document.querySelectorAll('.mega-panel').forEach(p => p.classList.remove('active'));
      cat.classList.add('active');
      document.getElementById(cat.dataset.target).classList.add('active');
    });
  });
</script>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const headerInner = document.querySelector(".md-header__inner");
    const customTopbar = document.querySelector(".custom-topbar");
    const paletteBtn = document.querySelector('[data-md-component="palette"]');

    if (headerInner && customTopbar) {
      if (paletteBtn) {
        headerInner.insertBefore(customTopbar, paletteBtn);
      } else {
        headerInner.appendChild(customTopbar);
      }
      customTopbar.classList.add("in-header");
    }
  });
</script>