import { body, projectList } from ".";

function renderAside() {
  const aside = document.createElement('aside');
  const inbox = document.createElement('div');
  const list = document.createElement('div');
  const addProject = document.createElement('div');

  inbox.innerText = 'Inbox';
  inbox.classList.add('aside-select');
  inbox.dataset.index = 0;

  const ul = document.createElement('ul');
  projectList.forEach((project, index) => {
    if (project.name == 'Inbox') return;
    ul.innerHTML += `<li class="aside-select" data-index="${index}">${project.name}</li>`
  })

  list.appendChild(ul);
  addProject.innerHTML = `Add Project <i class="fa-solid fa-plus add-project-trigger"></i>`;
  addProject.classList.add('add-project','add-project-trigger');

  aside.appendChild(inbox);
  aside.appendChild(addProject);
  aside.appendChild(ul);
  

  body.appendChild(aside);
}

export { renderAside }