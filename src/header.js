import { body } from ".";

function renderHeader() {
  const header = document.createElement('header');
  const heading = document.createElement('h1');
  const right = document.createElement('div');
  const quickAdd = document.createElement('div');

  heading.innerText = 'Todo List';
  header.appendChild(heading);

  right.classList.add('right');
  quickAdd.classList.add('quick-add','fa-solid','fa-plus');
  right.appendChild(quickAdd);
  header.appendChild(right);

  body.appendChild(header);
}

export { renderHeader };