
function renderProjects(filter) {
  const list = filter === 'all' ? projects : projects.filter(p => p.filter === filter);
  document.getElementById('projectGrid').innerHTML = list.map(p => `
    <div class="project-card" onclick="openQModal(${p.id})">
      <div class="card-thumb" style="background:${p.bg}">
        <span>${p.emoji}</span>
        <div class="card-arrow">↗</div>
      </div>
      <div class="card-info">
        <div class="card-title">${p.title} <span class="arr">↗</span></div>
        <div class="card-cat">${p.cat}</div>
      </div>
    </div>`).join('');
}
renderProjects('all');

document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  renderProjects(t.dataset.filter);
}));