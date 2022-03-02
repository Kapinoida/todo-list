import { body, projectList } from ".";

function renderProject(curProject) {
  const main = document.createElement('main');
  const heading = document.createElement('h2');
  const list = document.createElement('div');
  const current = projectList[curProject];
  const addTask = document.createElement('div');

  heading.classList.add('title');
  heading.innerText = current.name;

  list.classList.add('list');

  current.tasks.forEach((task, index) => {
    const element = document.createElement('div');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const name = document.createElement('div');
    const date = document.createElement('div');
    const priority = document.createElement('div');
    const trash = document.createElement('i');


    element.classList.add('item');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('check');
    checkbox.dataset.index = index;
    if(task.complete){
      checkbox.setAttribute('checked', 'checked');
      element.classList.add('strike');
    }
    label.appendChild(checkbox);
    label.appendChild(span);
    element.appendChild(label);

    name.innerText = task.name;
    element.appendChild(name);

    date.innerText = task.dueDate;
    element.appendChild(date);

    priority.innerText = task.priority;
    element.appendChild(priority);

    trash.classList.add('trash','fa-solid','fa-trash-can');
    trash.dataset.index = index;
    element.appendChild(trash);

    list.appendChild(element);
  });

  addTask.innerHTML = `Add Task <i class="fa-solid fa-plus"></i>`
  addTask.classList.add('item','add-task');
  list.appendChild(addTask);

  main.appendChild(heading);
  main.appendChild(list);
  body.appendChild(main);
}

export { renderProject };