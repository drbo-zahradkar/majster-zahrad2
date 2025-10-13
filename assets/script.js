// ✅ Úlohy — načítanie zo storage alebo prázdny zoznam
let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

// ✅ Cieľový element pre zoznam
const list = document.querySelector('#task-list');

// ✅ Funkcia na uloženie úloh do localStorage
function save() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ✅ Funkcia na pridanie novej úlohy
function addTask(title, date = '', category = '') {
  if (!title.trim()) return;
  tasks.push({
    title: title.trim(),
    date: date.trim(),
    category: category.trim(),
    done: false
  });
  save();
  render();
}

// ✅ Funkcia na vykreslenie všetkých úloh
function render() {
  list.innerHTML = '';

  tasks.forEach((t) => {
    const li = document.createElement('li');
    li.className = 'task' + (t.done ? ' done' : '');
    li.innerHTML = `
      <input type="checkbox" ${t.done ? 'checked' : ''} aria-label="Označiť hotové" />
      <div>
        <div><strong>${t.title}</strong></div>
        <div class="meta">${t.date ? `Termín: ${t.date} · ` : ''}Kategória: ${t.category || '-'}</div>
      </div>
      <button class="btn" data-act="edit">Upraviť</button>
      <button class="btn danger" data-act="del">Zmazať</button>
    `;

    // Checkbox – hotová úloha
    li.querySelector('input[type="checkbox"]').addEventListener('change', e => {
      t.done = e.target.checked;
      save();
      render();
    });

    // Tlačidlo vymazať
    li.querySelector('[data-act="del"]').addEventListener('click', () => {
      tasks = tasks.filter(x => x !== t);
      save();
      render();
    });

    // Tlačidlo upraviť
    li.querySelector('[data-act="edit"]').addEventListener('click', () => {
      const newTitle = prompt('Úprava úlohy', t.title);
      if (newTitle !== null && newTitle.trim()) {
        t.title = newTitle.trim();
        save();
        render();
      }
    });

    list.appendChild(li);
  });
}

// ✅ Pridanie úlohy po stlačení Enter v inpute
const inputTitle = document.querySelector('#new-task');
const inputDate = document.querySelector('#new-task-date');
const inputCat = document.querySelector('#new-task-cat');
const addBtn = document.querySelector('#add-task-btn');

if (addBtn) {
  addBtn.addEventListener('click', () => {
    addTask(inputTitle.value, inputDate.value, inputCat.value);
    inputTitle.value = '';
    inputDate.value = '';
    inputCat.value = '';
  });
}

if (inputTitle) {
  inputTitle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask(inputTitle.value, inputDate.value, inputCat.value);
      inputTitle.value = '';
      inputDate.value = '';
      inputCat.value = '';
    }
  });
}

// ✅ Spusti vykreslenie po načítaní
render();
