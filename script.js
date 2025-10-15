// Small helpers for the page
(function(){
  // Current year in footer
  document.getElementById('y').textContent = new Date().getFullYear();

  // Theme toggle with localStorage
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme') || 'dark';
  if(saved === 'light'){ root.classList.add('light'); }
  btn.addEventListener('click', () => {
    root.classList.toggle('light');
    const val = root.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', val);
  });

  // Mobile nav
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if(navToggle){
    navToggle.addEventListener('click', () => {
      const show = !navList.classList.contains('show');
      navList.classList.toggle('show', show);
      navToggle.setAttribute('aria-expanded', String(show));
    });
  }

  // Render projects from inline JSON
  const dataEl = document.getElementById('project-data');
  const grid = document.getElementById('project-grid');
  try{
    const items = JSON.parse(dataEl.textContent.trim());
    grid.innerHTML = items.map(p => {
      const links = (p.links||[]).map(l => `<a href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join('');
      const stack = (p.stack||[]).map(s => `<span class="badge">${s}</span>`).join('');
      return `
        <article class="card">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="stack">${stack}</div>
          <div class="links">${links}</div>
        </article>
      `;
    }).join('');
  }catch(e){
    console.warn('Failed parsing project data', e);
  }
})();
