import { body } from ".";

function renderTaskModal() {
  const modal = document.createElement('div');
  const close = document.createElement('span');
  const form = document.createElement('form');
  const name = document.createElement('label');
  const nameInput = document.createElement('input');
  const desc = document.createElement('label');
  const descInput = document.createElement('input');
  const dueDate = document.createElement('label');
  const dueDateInput = document.createElement('input');
  const priority = document.createElement('label');
  const priorityInput = document.createElement('select');
  const low = document.createElement('option');
  const med = document.createElement('option');
  const high = document.createElement('option');
  const submit = document.createElement('input');

  modal.classList.add('modal');
  form.classList.add('modal-content');
  close.classList.add('close');
  submit.classList.add('task-submit');

  close.innerHTML = `&times;`;

  name.setAttribute('for', 'name');
  name.innerText = 'Name: ';
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  name.appendChild(nameInput);

  desc.setAttribute('for', 'desc');
  desc.innerText = 'Description: ';
  descInput.setAttribute('type', 'text');
  descInput.setAttribute('id', 'desc');
  descInput.setAttribute('name', 'desc');
  desc.appendChild(descInput);

  dueDate.setAttribute('for', 'dueDate');
  dueDate.innerText = 'Due Date: ';
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'dueDate');
  dueDateInput.setAttribute('name', 'dueDate');
  dueDate.appendChild(dueDateInput);

  priority.setAttribute('for', 'priority');
  priority.innerText = 'Priority: ';
  priorityInput.setAttribute('id', 'priority');
  priorityInput.setAttribute('name', 'priority');
  low.setAttribute('value', 'Low')
  low.innerText = 'Low';
  med.setAttribute('value', 'Medium')
  med.innerText = 'Medium';
  high.setAttribute('value', 'High')
  high.innerText = 'high';
  priorityInput.appendChild(low);
  priorityInput.appendChild(med);
  priorityInput.appendChild(high);
  priority.appendChild(priorityInput);

  submit.setAttribute('type', 'submit');

  form.appendChild(name);
  form.appendChild(desc);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(submit);
  modal.appendChild(close);
  modal.appendChild(form);
  body.appendChild(modal);
}

export { renderTaskModal }