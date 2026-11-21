document.addEventListener("DOMContentLoaded", function () {
  const headerInner = document.querySelector(".md-header__inner");
  if (!headerInner || document.querySelector(".custom-topbar")) return;

  // Detecta la ruta base del sitio para que los enlaces funcionen desde cualquier subcarpeta
  const baseUrl = new URL(".", document.querySelector('link[rel="canonical"]')?.href || window.location.origin + "/").pathname;
  // Si estás en subcarpetas como /projects/42-school/c/push_swap/, calcula la raíz:
  const root = window.location.pathname.includes("/projects/")
    ? window.location.pathname.split("/projects/")[0] + "/"
    : window.location.pathname.endsWith("/about/")
    ? window.location.pathname.split("/about/")[0] + "/"
    : "./";

  const nav = document.createElement("nav");
  nav.className = "custom-topbar in-header";
  nav.innerHTML = `
    <div class="topbar-links">
      <a href="${root}" class="nav-item">Home</a>

      <div class="dropdown">
        <button class="dropbtn">C ▾</button>
        <div class="dropdown-content simple-dropdown">
          <a href="${root}projects/42-school/c/push_swap/">push_swap</a>
          <a href="${root}projects/42-school/c/get_next_line/">get_next_line</a>
          <a href="${root}projects/42-school/c/ft_printf/">ft_printf</a>
          <a href="${root}projects/42-school/c/libft/">libft</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Python ▾</button>
        <div class="dropdown-content simple-dropdown">
          <a href="${root}projects/42-school/python/a-maze-ing/">A-Maze-ing</a>
          <a href="${root}projects/42-school/python/python-modules/">Python Modules (42)</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Data ▾</button>
        <div class="dropdown-content mega-dropdown">
          <div class="mega-col-left">
            <div class="mega-category active" data-target="cat-de">Data Engineering →</div>
            <!-- <div class="mega-category" data-target="cat-ds">Data Science →</div> -->
            <!-- <div class="mega-category" data-target="cat-bi">Business Intelligence (BI) →</div> -->
          </div>
          <div class="mega-col-right">
            <div id="cat-de" class="mega-panel active">
              <h4>Data Engineering</h4>
              <a href="${root}projects/data-engineering/data-quality-control/">Data Quality Control</a>
              <!-- <a href="${root}projects/data-engineering/">Pipelines & ETL Architecture</a> -->
            </div>
            <div id="cat-ds" class="mega-panel">
              <h4>Data Science</h4>
              <a href="${root}projects/data-engineering/">Predictive Modeling & Analytics</a>
              <a href="${root}projects/data-engineering/">Statistical Analysis (UCM)</a>
            </div>
            <div id="cat-bi" class="mega-panel">
              <h4>Business Intelligence</h4>
              <a href="${root}projects/data-engineering/">Power BI Dashboards & KPIs</a>
              <a href="${root}projects/data-engineering/">Operational Risk Reporting</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  headerInner.appendChild(nav);

  // Interactividad del mega-menú de Data
  nav.querySelectorAll(".mega-category").forEach((cat) => {
    cat.addEventListener("mouseenter", () => {
      nav.querySelectorAll(".mega-category").forEach((c) => c.classList.remove("active"));
      nav.querySelectorAll(".mega-panel").forEach((p) => p.classList.remove("active"));
      cat.classList.add("active");
      nav.querySelector("#" + cat.dataset.target).classList.add("active");
    });
  });
});